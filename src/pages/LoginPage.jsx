import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    // Effectuer ici votre logique de connexion en utilisant l'email et le mot de passe
    try {
      const response = await fetch(
        "https://stock-tracker-api.up.railway.app/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (!response.ok) {
        throw new Error("Login failed");
      }

      // Obtenir le token de la réponse
      const data = await response.json();
      const token = data.token;
      console.log(token);

      // Stocker le token dans localStorage
      localStorage.setItem("token", token);

      // Recharger la page ou accéder à une autre URL après la connexion réussie
      window.location.href = "/watchlists";

      // Réinitialiser les champs d'entrée
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="relative flex h-screen flex-col justify-center overflow-hidden">
      <div className="m-auto w-full rounded-md bg-white p-6 shadow-md lg:max-w-lg">
        <h1 className="text-center text-3xl font-semibold text-blue-700">
          Connectez-vous
        </h1>
        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label className="label">
              <span className="label-text text-base">Email</span>
            </label>
            <input
              type="text"
              placeholder="Email Address"
              className="input-bordered input-primary input w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-base">Mot de passe</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="input-bordered input-primary input w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <a
            href="#"
            className="text-xs text-gray-600 hover:text-blue-600 hover:underline"
          >
            Mot de passe oublié ?
          </a>
          <div>
            <button type="submit" className="btn-primary btn">
              Connecter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
