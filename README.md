<p align="center">
  <img src="./img.png" alt="Project Banner" width="100%">
</p>

# [BillBreak] 🎯

## Basic Details

### Team Name: [Roopasree Rajesh]

### Team Members
- Member 1: [Roopasree Rajesh] - [Mar Baselios Christian College of Engineering]


### Hosted Project Link
[https://github.com/roo-001/bill](https://github.com/roo-001/bill)

### Project Description
[BillBreak is a web-based  household expense tracking and  bill-splitting application designed to maintain financial transparency among shared living environments such as family members or roommates. It allows users to record shared expenses and automatically splits the amount among members, displaying total spending and individual shares through a centralized dashboard.]

### The Problem statement
[In shared households, managing common expenses such as rent, groceries, and utility bills is often handled manually, which can lead to calculation errors, lack of transparency, and disputes among members. There is no structured system to accurately track contributions and pending balances.
Therefore, a reliable and automated solution is required to record expenses, split bills fairly, and provide clear visibility of financial responsibilities for all household members.
]

### The Solution
[The solution is to develop a web-based application that records and automatically splits the total amount among members. The system calculates each person’s share instantly and stores the data in a centralized database.

By providing a clear dashboard that displays total expenses, individual contributions, and pending balances, the application ensures accuracy, transparency, and fair financial management within shared households.]

---

## Technical Details

### Technologies/Components Used

**For Software:**
- Languages used: [TypeScript, JavaScript, Python]
- Frameworks used: [Next.js, Flask]
- Libraries used: [Tailwind CSS]
- Tools used: [VS Code, Git]

**For Hardware:**
- Main components: [List main components]
- Specifications: [Technical specifications]
- Tools required: [List tools needed]

---

## Features

List the key features of your project:
- Feature 1: [Instant bill Spliting]
- Feature 1: [Member management]


---

## Implementation
  The initial version of BillBreak is developed using the Flask framework with SQLite for backend processing and database management. Flask is used to handle routing, form submissions, expense calculations, and bill-splitting logic, making it suitable for rapid prototyping and backend development.

After validating the core functionality, the system is migrated to Next.js to enhance performance, scalability, and user experience. In the Next.js version, the frontend is built using React components, while APIs handle expense processing and bill-splitting logic. This migration improves responsiveness, enables better UI design, and supports future scalability for production-level deployment.

### For Software:

#### Installation
```bash
npm install
```

#### Run
```bash
npm run dev
```

### For Hardware:

#### Components Required
[List all components needed with specifications]

#### Circuit Setup
[Explain how to set up the circuit]

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

![Architecture Diagram](docs/architecture.png)
*Explain your system architecture - components, data flow, tech stack interaction*

**Application Workflow:**

![Workflow](docs/workflow.png)
*Add caption explaining your workflow*

---

### For Hardware:

#### Schematic & Circuit

![Circuit](Add your circuit diagram here)
*Add caption explaining connections*

![Schematic](Add your schematic diagram here)
*Add caption explaining the schematic*

#### Build Photos

![Team](Add photo of your team here)

![Components](Add photo of your components here)
*List out all components shown*

![Build](Add photos of build process here)
*Explain the build steps*

![Final](Add photo of final product here)
*Explain the final build*

---

## Additional Documentation

### For Web Projects with Backend:

#### API Documentation

**Base URL:** `https://api.yourproject.com`

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
**POST /api/endpoint**
- **Description:** [What it does]
- **Request Body:**
```json
{
  "field1": "value1",
  "field2": "value2"
}
```
- **Response:**
```json
{
  "status": "success",
  "message": "Operation completed"
}
```

[Add more endpoints as needed...]

---

### For Mobile Apps:

#### App Flow Diagram

![App Flow](docs/app-flow.png)
*Explain the user flow through your application*

#### Installation Guide

**For Android (APK):**
1. Download the APK from [Release Link]
2. Enable "Install from Unknown Sources" in your device settings:
   - Go to Settings > Security
   - Enable "Unknown Sources"
3. Open the downloaded APK file
4. Follow the installation prompts
5. Open the app and enjoy!

**For iOS (IPA) - TestFlight:**
1. Download TestFlight from the App Store
2. Open this TestFlight link: [Your TestFlight Link]
3. Click "Install" or "Accept"
4. Wait for the app to install
5. Open the app from your home screen

**Building from Source:**
```bash
# For Android
flutter build apk
# or
./gradlew assembleDebug

# For iOS
flutter build ios
# or
xcodebuild -workspace App.xcworkspace -scheme App -configuration Debug
```

---



## Project Demo

### Video
[https://github.com/roo-001/bill](https://raw.githubusercontent.com/roo-001/bill/main/public/screenrecord.mp4)

*A walkthrough showing the transition from Flask to the new interactive Next.js dashboard.*

---


### Additional Demos
[Add any extra demo materials/links - Live site, APK download, online demo, etc.]

---

## AI Tools Used (Optional - For Transparency Bonus)

Antigravity (AI Engineering Assistant by Google Deepmind),Chatgpt,Claude

**Tool Used:** [Antigravity]

**Purpose:** [Migrated legacy Flask/Jinja2 templates to Next.js/React components.]
- Example: "Generated boilerplate React components"
- Example: "Debugging assistance for async functions"
- Example: "Code review and optimization suggestions"

**Key Prompts Used:**
- "Create a REST API endpoint for user authentication"
- "Debug this async function that's causing race conditions"
- "Optimize this database query for better performance"

**Percentage of AI-generated code:** [85%]

**Human Contributions:**
- Architecture design and planning
- Custom business logic implementation
- Integration and testing
- UI/UX design decisions

---

## Team Contributions

- [Roopasree Rajesh]: [Frontend development, logic implementation, documentation]

---

## License

This project is licensed under the [MIT] License - see the [LICENSE](LICENSE) file for details.

---

Made with ❤️ at TinkerHub
