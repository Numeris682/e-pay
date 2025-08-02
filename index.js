import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="flex justify-between items-center p-4 shadow bg-white">
        <h1 className="text-2xl font-bold text-blue-600">e-pay</h1>
        <div>
          <Link href="/login" className="mr-4 text-blue-600">Se connecter</Link>
          <Link href="/register" className="bg-blue-600 text-white px-4 py-2 rounded-lg">S'inscrire</Link>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center text-center p-8">
        <h2 className="text-4xl font-bold mb-4">Payer. Envoyer. Partout. Sans limites.</h2>
        <p className="text-gray-600 mb-6">Une solution de paiement fiable et sécurisée, accessible à tous.</p>
        <Link href="/register" className="bg-green-500 text-white px-6 py-3 rounded-lg shadow hover:bg-green-600">
          Créer un compte
        </Link>
      </main>

      <footer className="p-4 text-center text-gray-500">
        © 2025 e-pay • Confidentialité • CGU • Aide
      </footer>
    </div>
  );
}
