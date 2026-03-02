from flask import Flask, render_template, request, redirect
import sqlite3

app = Flask(__name__)


# -------------------------
# DATABASE CONNECTION
# -------------------------
def get_db():
    conn = sqlite3.connect("billbreak.db")
    conn.row_factory = sqlite3.Row
    return conn


# -------------------------
# INITIALIZE DATABASE
# -------------------------
def init_db():
    conn = get_db()
    cur = conn.cursor()

    # Members Table
    cur.execute("""
    CREATE TABLE IF NOT EXISTS members (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL
    )
    """)

    # Expenses Table
    cur.execute("""
    CREATE TABLE IF NOT EXISTS expenses (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        amount REAL NOT NULL,
        paid_by INTEGER
    )
    """)

    # Expense Split Table
    cur.execute("""
    CREATE TABLE IF NOT EXISTS expense_split (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        expense_id INTEGER,
        member_id INTEGER,
        amount_owed REAL
    )
    """)

    conn.commit()
    conn.close()


# -------------------------
# HOME / DASHBOARD
# -------------------------
@app.route("/")
def dashboard():
    conn = get_db()

    members = conn.execute("SELECT * FROM members").fetchall()
    expenses = conn.execute("SELECT * FROM expenses").fetchall()

    total = conn.execute("SELECT SUM(amount) FROM expenses").fetchone()[0]
    total = total if total else 0

    conn.close()

    return render_template("home.html",
                           members=members,
                           expenses=expenses,
                           total=total)


# -------------------------
# ADD MEMBER
# -------------------------
@app.route("/add_member", methods=["GET", "POST"])
def add_member():
    """Show form on GET, insert on POST then redirect.

    The previous version accidentally tried to render a template with
    undefined variables and had an unreachable return statement. That
    caused the app to always navigate back to the homepage.
    """

    if request.method == "POST":
        name = request.form["name"]
        conn = get_db()
        conn.execute("INSERT INTO members (name) VALUES (?)", (name,))
        conn.commit()
        conn.close()
        return redirect("/")

    # GET: render a simple standalone page containing only the add-member form
    conn = get_db()
    members = conn.execute("SELECT * FROM members").fetchall()
    conn.close()
    return render_template("add_member.html", members=members)


# -------------------------
# ADD EXPENSE + INSTANT SPLIT
# -------------------------
@app.route("/add_expense", methods=["POST"])
def add_expense():
    title = request.form["title"]
    amount = float(request.form["amount"])
    paid_by = int(request.form["paid_by"])

    conn = get_db()

    # Insert expense
    conn.execute(
        "INSERT INTO expenses (title, amount, paid_by) VALUES (?, ?, ?)",
        (title, amount, paid_by)
    )
    conn.commit()

    # Get expense ID
    expense_id = conn.execute(
        "SELECT last_insert_rowid()"
    ).fetchone()[0]

    # Get all members
    members = conn.execute("SELECT * FROM members").fetchall()

    if len(members) > 0:
        split_amount = amount / len(members)

        for member in members:
            conn.execute(
                "INSERT INTO expense_split (expense_id, member_id, amount_owed) VALUES (?, ?, ?)",
                (expense_id, member["id"], split_amount)
            )

    conn.commit()
    conn.close()

    return redirect("/")


# -------------------------
# RUN APP
# -------------------------
if __name__ == "__main__":
    init_db()
    app.run(debug=True)