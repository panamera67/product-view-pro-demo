// index.js
import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware de base
app.use(express.json());

// Route d'accueil
app.get("/", (req, res) => {
  res.json({
    message: "🚀 MallWorld API fonctionne parfaitement sur Vercel !",
    status: "online",
  });
});

// Exemple de route
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello depuis ton API !" });
});

// Démarre le serveur (utile pour test local)
if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => console.log(`Serveur en local sur port ${PORT}`));
}

// Export pour Vercel
export default app;
{
  "name": "mallworld-api",
  "version": "1.0.0",
  "type": "module",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {
    "express": "^4.19.2"
  }
}