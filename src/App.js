import React, { useState } from "react";
import './App.css';

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [employee, setEmployee] = useState({ name: "", contact: "", email: "" });
  const [editingIndex, setEditingIndex] = useState(-1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const saveEmployee = () => {
    if (editingIndex === -1) {
      setEmployees([...employees, employee]);
    } else {
      const updatedEmployees = employees.map((emp, index) =>
        index === editingIndex ? employee : emp
      );
      setEmployees(updatedEmployees);
    }
    resetForm();
  };

  const resetForm = () => {
    setEmployee({ name: "", contact: "", email: "" });
    setEditingIndex(-1);
  };

  const editEmployee = (index) => {
    setEmployee(employees[index]);
    setEditingIndex(index);
  };

  const deleteEmployee = (index) => {
    const filteredEmployees = employees.filter((_, i) => i !== index);
    setEmployees(filteredEmployees);
  };

  return (
    <div className="App">
      <h1>Employee Management</h1>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Employee Name"
          value={employee.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="contact"
          placeholder="Contact Number"
          value={employee.contact}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email ID"
          value={employee.email}
          onChange={handleChange}
        />
        <button onClick={saveEmployee}>
          {editingIndex === -1 ? "Add" : "Update"}
        </button>
      </div>

      <h2>List of Employees</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Contact</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, index) => (
            <tr key={index}>
              <td>{emp.name}</td>
              <td>{emp.contact}</td>
              <td>{emp.email}</td>
              <td>
                <button onClick={() => editEmployee(index)}>Edit</button>
                <button onClick={() => deleteEmployee(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
