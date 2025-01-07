import path from "path";
import express from "express";
const app = express();

// Обслуговування статичних файлів із папки збірки Webpack
app.use(express.static(path.join(__dirname, "build")));

// Відправляти index.html для всіх інших маршрутів
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
