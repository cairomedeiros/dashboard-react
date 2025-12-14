import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    console.log("Logging in with", { username, password });
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