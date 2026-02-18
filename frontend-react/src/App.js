import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/employees/")
      .then(res => setEmployees(res.data));
  }, []);

  return (
    <div>
      <h1>Employee List (React)</h1>

      {employees.map(emp => (
        <div key={emp.id}>
          <h3>{emp.name}</h3>
          <p>{emp.email}</p>
          <p>{emp.department}</p>
        </div>
      ))}

    </div>
  );
}

export default App;
