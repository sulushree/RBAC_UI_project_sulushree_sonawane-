RBAC UI Project

Author: Sulushree Sonawane

This is a frontend implementation of a Role-Based Access Control (RBAC) system designed to manage users, roles, and permissions. The project allows administrators to easily create and manage users, assign roles, and define permissions. This project is part of the VRV Security Frontend Developer Intern Assignment.


---

Features

User Management:

View, add, edit, and delete users.

Assign roles to users and manage their status (Active/Inactive).


Role Management:

Create and edit roles.

Assign permissions to roles.


Dynamic Permissions:

View and manage permissions for specific roles.

Modify or add permissions to roles dynamically.


Mock API:

Simulated API calls using json-server for CRUD operations on users and roles.

Mock responses to simulate server behavior for testing.

---

Installation and Setup

Prerequisites

Node.js and npm should be installed on your machine.


Steps to Run the Project:

1. Clone the repository or download the ZIP file and extract it.


2. Install dependencies:

npm install


3. Start the mock API server:

npm run server


4. Start the React development server:

npm start



After running these commands, the project will be accessible at http://localhost:3000/.


---

Folder Structure

RBAC_UI_Project/
├── db.json              # Mock API data
├── package.json         # Project configuration and dependencies
├── src/                 # Source code for the project
│   ├── components/      # UI components
│   │   ├── UserManagement.js
│   │   └── RoleManagement.js
│   ├── App.js           # Main app component
│   ├── index.js         # Entry point for React
│   └── index.css        # Global styles
└── README.md            # Project documentation


---

Technologies Used

React: JavaScript library for building the user interface.

Material-UI: React UI framework for designing components.

Axios: For making HTTP requests to the mock API.

JSON Server: For creating a mock API server to simulate backend data.



---

Usage

Once the project is running, you can access the following features:

User Management: Visit the /users page to manage users.

Role Management: Visit the /roles page to manage roles and permissions.



---

Future Enhancements

Implement search and filtering for users and roles.

Add sorting functionality to tables.

Integrate real authentication and authorization in the backend.



---

License

This project is for educational purposes and not for commercial use.



