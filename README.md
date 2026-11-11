# EXPERIMENT 5: FORM HANDLING IN REACT

**Name:** HANIEL REENA D R  
**Register Number:** 2305001008  
**Department:** CSE

## 1. AIM

To develop a simple Student Registration Form using React and handle form input values using the useState Hook.

## 2. ALGORITHM

1. Start the React application.
2. Import useState and the CSS file.
3. Create state variables for Name, Register Number, and Department.
4. Create a Student Registration Form with three input fields.
5. Use onChange to update the corresponding state values.
6. Use onSubmit to handle form submission.
7. Use event.preventDefault() to prevent page reload.
8. Display the entered student details in an alert box.
9. Stop the application.

## 3. PROJECT STRUCTURE

```text
Experiment_05/
├── index.html
├── package.json
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── App.css
    └── index.css
```

## 4. PROGRAMS

### Program 1: App.jsx

**Location:** `src/App.jsx`

```jsx
import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [registerNo, setRegisterNo] = useState("");
  const [department, setDepartment] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    alert(
      "Name: " + name +
      "\nRegister Number: " + registerNo +
      "\nDepartment: " + department
    );
  };

  return (
    <div className="container">
      <h1>Student Registration Form</h1>

      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter your name"
          required
        />

        <label>Register Number</label>
        <input
          type="text"
          value={registerNo}
          onChange={(event) => setRegisterNo(event.target.value)}
          placeholder="Enter register number"
          required
        />

        <label>Department</label>
        <input
          type="text"
          value={department}
          onChange={(event) => setDepartment(event.target.value)}
          placeholder="Enter department"
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
```

### Program 2: App.css

**Location:** `src/App.css`

```css
* {
  box-sizing: border-box;
}

#root {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #eef4ff, #f8fafc);
  font-family: "Segoe UI", Arial, sans-serif;
}

.container {
  width: 520px;
  max-width: calc(100% - 40px);
  background: #ffffff;
  padding: 42px;
  border-radius: 18px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 18px 45px rgba(15, 23, 42, 0.12);
  margin: auto;
}

h1 {
  margin: 0 0 30px;
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  color: #1e3a8a;
}

form {
  width: 100%;
  display: flex;
  flex-direction: column;
}

label {
  margin-top: 17px;
  margin-bottom: 7px;
  font-size: 15px;
  font-weight: 600;
  color: #334155;
}

input {
  width: 100%;
  padding: 14px 15px;
  border: 1px solid #cbd5e1;
  border-radius: 9px;
  background: #f8fafc;
  color: #0f172a;
  font-size: 15px;
  outline: none;
}

button {
  width: 100%;
  margin-top: 28px;
  padding: 14px;
  border: none;
  border-radius: 9px;
  background: #2563eb;
  color: white;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
}
```

### Program 3: main.jsx

**Location:** `src/main.jsx`

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### Program 4: index.css

**Location:** `src/index.css`

```css
* {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  min-width: 320px;
  min-height: 100%;
}
```

## 5. EXECUTION

1. Open the Experiment_05 folder in VS Code.
2. Open the terminal.
3. Install the dependencies:

```bash
npm install
```

4. Run the React application:

```bash
npm run dev
```

5. Open the localhost URL displayed in the terminal.
6. Enter Name, Register Number, and Department.
7. Click the Submit button.
8. Verify that the entered student details appear in an alert box.

## 6. BUILD CHECK

```bash
npm run build
```

## 7. OUTPUT
<img width="673" height="699" alt="image" src="https://github.com/user-attachments/assets/cfd14a4f-62d5-4e30-a6f7-95c7a8a084fa" />


## 8. OBSERVATION

The form accepts the student name, register number, and department. The entered values are stored using useState and displayed in an alert box when the Submit button is clicked.

## 9. RESULT

Thus, a Student Registration Form was successfully created using React, and the form input values were managed using the useState Hook and submitted using the onSubmit event.
