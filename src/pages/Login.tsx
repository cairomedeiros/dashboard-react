import { useState, useRef, useEffect } from "react";

export default function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const loginTime = useRef("");

  function handleSubmit(event: React.FormEvent) {
    loginTime.current = new Date().toTimeString();
    event.preventDefault();
    console.log("Logging in with", { username, password });
    console.log("UseRef", loginTime.current);

    localStorage.setItem("username", username);
    localStorage.setItem("loginTime", loginTime.current);
  }

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    console.log("Stored username:", storedUsername);
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  return (
    <>
    <header className="login">
      <h1>My login</h1>
    </header>
    <main>
    <form onSubmit={handleSubmit}>
      <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="username"/>
      <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password"/>

      <button type="submit">Login</button>
    </form>
    </main>
    </>

  );
}