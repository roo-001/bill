<p align="center">
  <img src="https://raw.githubusercontent.com/roo-001/bill/main/public/next.svg" alt="Project Banner" width="100%">
</p>

# BillBreak 🎯

## Basic Details

### Team Name: [Roopasree]

### Team Members
- Member 1: [Roopasree Rajesh] - [Mar Baselios Christian College of Engineering]


### Hosted Project Link
[https://github.com/roo-001/bill](https://github.com/roo-001/bill)

### Project Description
BillBreak is a web-based bill-splitting application designed to maintain financial transparency among family members or roommates. It allows users to record shared expenses and automatically splits the amount among members, displaying total spending and individual shares through a centralized dashboard.

### The Problem statement
The core problem being solved is the difficulty in fairly dividing shared household expenses. Manual calculations often lead to errors, misunderstandings, and disputes among members.

Bill splitting provides an automated and transparent method to calculate each person’s share accurately, ensuring fairness and reducing financial confusion in shared living environments.

### The Solution
The solution is to develop a web-based application that records and automatically splits the total amount among members. The system calculates each person’s share instantly and stores the data in a centralized database.

By providing a clear dashboard that displays total expenses, individual contributions, and pending balances, the application ensures accuracy, transparency, and fair financial management within shared households.

---

## Technical Details

### Technologies/Components Used

**For Software:**
- Languages used: [TypeScript, JavaScript, Python, HTML, CSS]
- Frameworks used: [Next.js (React), Flask (Legacy)]
- Libraries used: [Tailwind CSS, next/font]
- Tools used: [VS Code, Git, npm, Antigravity (AI Assistant)]

**For Hardware:**
- Main components: [N/A]
- Specifications: [N/A]
- Tools required: [N/A]

---

## Features

List the key features of your project:
- Feature 1: [Instant Bill Splitting - Automatically divide costs among all household members.]
- Feature 2: [Member Management - Easily add or remove family, roommates, or flatmates.]
- Feature 3: [Real-time Dashboard - View total spending, per-person share, and a clear transaction history.]
- Feature 4: [Transparent History - Every expense is logged with details on who paid and when.]


---

## Implementation
The initial version of BillBreak is developed using the Flask framework with SQLite for backend processing and database management. Flask is used to handle routing, form submissions, expense calculations, and bill-splitting logic, making it suitable for rapid prototyping and backend development.

After validating the core functionality, the system is migrated to Next.js to enhance performance, scalability, and user experience. In the Next.js version, the frontend is built using React components, while APIs handle expense processing and bill-splitting logic. This migration improves responsiveness, enables better UI design, and supports future scalability for production-level deployment.

### For Software:

#### Installation
```bash
# Clone the repository
git clone https://github.com/roo-001/bill.git
cd bill

# Install frontend dependencies
npm install

# (Legacy) Setup Python environment
cd legacy_flask_v1
python -m venv venv
source venv/bin/activate # or venv\Scripts\activate on Windows
pip install flask
```

#### Run
```bash
# Run the Next.js frontend (Development)
npm run dev

# (Legacy) Run the Flask backend
cd legacy_flask_v1
python app.py
```

### For Hardware:

**Note: This is a software-only project.**

---

## Project Documentation

### For Software:

#### Screenshots (Add at least 3)

![Dashboard Overview](https://raw.githubusercontent.com/roo-001/bill/main/public/homepage.png)
*The centralized dashboard showing total expenses and per-person breakdown.*

![Add Member](https://raw.githubusercontent.com/roo-001/bill/main/public/add_member.png)
*Interactive member management page with avatar selection.*

![Add Expense](https://raw.githubusercontent.com/roo-001/bill/main/public/add_expense.png)
*Expense recording with dynamic auto-split preview.*

#### Diagrams

**System Architecture:**

![Architecture Diagram](https://raw.githubusercontent.com/roo-001/bill/main/public/next.svg)
*The current architecture transitions from a Flask/SQLite monolith to a Next.js (React) modern frontend with a planned serverless or local persistence layer.*

**Application Workflow:**

![Workflow](https://raw.githubusercontent.com/roo-001/bill/main/public/next.svg)
*Users enter members -> Add expenses -> BillBreak calculates splitting -> Dashboard displays shares.*

---

## Additional Documentation

### For Web Projects with Backend:

#### API Documentation (Legacy Flask)

**Base URL:** `http://localhost:5000`

##### Endpoints

**POST /add_member**
- **Description:** Adds a new member to the household.
- **Parameters:**
  - `name` (string): Full name of the member.
- **Response:** Redirects to dashboard after adding.

**POST /add_expense**
- **Description:** Records an expense and initiates auto-split.
- **Request Body:**
```json
{
  "title": "Electricity Bill",
  "amount": 2400.00,
  "paid_by": 1
}
```

---

## Project Demo

### Video
[https://github.com/roo-001/bill](https://github.com/roo-001/bill)

*A walkthrough showing the transition from Flask to the new interactive Next.js dashboard.*

---

## AI Tools Used (Optional - For Transparency Bonus)

**Tool Used:** Antigravity (AI Engineering Assistant by Google Deepmind)

**Purpose:**
- Migrated legacy Flask/Jinja2 templates to Next.js/React components.
- Ported styling to Tailwind CSS with a premium design system.
- Managed version control and deployment to GitHub.

**Key Prompts Used:**
- "Migrate this Flask project to Next.js with a premium look."
- "Implement the member addition logic in React state."
- "Deploy the project to the main branch on GitHub."

**Percentage of AI-generated code:** [85%]

**Human Contributions:**
- Architecture decision and project vision.
- Custom business logic verification.
- Content and brand guidance.

---

## Team Contributions

- Roopasree Rajesh: Full project design, backend logic implementation, and frontend migration.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with ❤️ at TinkerHub
