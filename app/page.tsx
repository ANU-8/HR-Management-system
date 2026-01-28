/*export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-600">
        HR Management System – Setup Done 🚀
      </h1>
    </div>
  );
}*/

"use client";

import { useEffect, useState } from "react";
import api from "../services/api";

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get("/api/users").then((res) => {
      setUsers(res.data);
    });
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Backend Data</h1>

      {users.map((user: any, index) => (
        <p key={index}>{user.name}</p>
      ))}
    </div>
  );
}

