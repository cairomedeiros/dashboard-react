import { useEffect } from "react";

export default function Dashboard() {

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    const storedLoginTime = localStorage.getItem("loginTime");
    console.log("Stored username:", storedUsername);
    if (storedUsername) {
      console.log(`Welcome back, ${storedUsername}!`);
      console.log("loginTime", storedLoginTime);
    }
  }, []);

  return (
    <header className="dashboard">
      <h1>My Dashboard</h1>
    </header>
  );
}