import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/users", { name, email, password, balance: 0 });
    alert("Compte créé avec succès !");
    router.push("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form onSubmit={handleRegister} className="bg-white p-6 rounded-lg shadow w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Créer un compte</h2>
        <input className="w-full p-2 border rounded mb-4" placeholder="Nom" value={name} onChange={(e) => setName(e.target.value)} />
        <input className="w-full p-2 border rounded mb-4" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" className="w-full p-2 border rounded mb-4" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className="bg-blue-600 text-white w-full py-2 rounded">S'inscrire</button>
      </form>
    </div>
  );
}
