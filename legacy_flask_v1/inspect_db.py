import sqlite3
import os

db_path = "billbreak.db"
if not os.path.exists(db_path):
    print(f"{db_path} does not exist.")
else:
    conn = sqlite3.connect(db_path)
    cur = conn.cursor()
    
    # Check tables
    cur.execute("SELECT name FROM sqlite_master WHERE type='table';")
    tables = cur.fetchall()
    print(f"Tables: {tables}")
    
    for table_tuple in tables:
        table = table_tuple[0]
        if table == "sqlite_sequence": continue
        print(f"\n--- {table} ---")
        cur.execute(f"PRAGMA table_info({table});")
        print(f"Schema: {cur.fetchall()}")
        cur.execute(f"SELECT * FROM {table};")
        print(f"Rows: {cur.fetchall()}")
    
    conn.close()
