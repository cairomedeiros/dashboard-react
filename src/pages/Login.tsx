import { useState, useRef } from "react";

export default function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const initTime = useRef("");

  function handleSubmit(event: React.FormEvent) {
    initTime.current = new Date().toTimeString();
    event.preventDefault();
    console.log("Logging in with", { username, password });
    console.log("UseRef", initTime.current);
  }

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