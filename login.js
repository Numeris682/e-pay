import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { loginUser } from "../utils/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await axios.get(`http://localhost:5000/users?email=${email}&password=${password}`);
    if (res.data.length > 0) {
      loginUser(res.data[0].id);
      router.push("/dashboard");
    } else {
      alert("Email ou mot de passe incorrect !");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded-lg shadow w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Connexion</h2>
        <input className="w-full p-2 border rounded mb-4" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" className="w-full p-2 border rounded mb-4" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className="bg-blue-600 text-white w-full py-2 rounded">Se connecter</button>
      </form>
    </div>
  );
}

