import { useState } from "react";
import "./App.css";
import Table from "./components/Table";
import { data } from "./data/data";

function App() {
  const [users, setUsers] = useState(data);
  const [sorted, setSorted] = useState(false);

   function handleSort() {
    if (!sorted) {
      setUsers(users.sort((a, b) => a.id - b.id))
      setSorted(true);
    } else {
      setUsers(users.sort((a, b) => b.id - a.id));
      setSorted(false);
    }
  }
 
  return (
    <>
      <table>
        <thead className="">
          <tr>
            <th style={{cursor:"pointer"}} onClick={handleSort}>Id</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
            {users.map((user) => (
              <Table key={user.id} user={user}  />
            ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
