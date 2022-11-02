import express from "express";
import cors from "cors";
import mariadb from "mariadb";
import { hubungkan, User } from "./db.js";

const pool = mariadb.createPool({
  host: "localhost",
  user: "root",
  connectionLimit: 5,
});

const app = express(); // inisialisasi express
app.use(cors()); // supaya bisa diakses oleh React
app.use(express.json()); // supaya bisa membaca body

app.get("/hello", (_request, response) => {
  response.send("Permintaan diterima");
});

// ROUTE

// CREATE
app.post("/users", (request, response) => {
  User.create(request.body);
  response.send("Pengguna berhasil ditambahkan.");
});

// READ ALL
app.get("/users", async (_request, response) => {
  const users = await User.findAll();
  console.log(users);
  response.send(users);
});

// READ ONE / READ BY ID/PK
app.get("/users/:id", async (request, response) => {
  const user = await User.findByPk(request.params.id);
  response.send(user);
});

// UPDATE / EDIT BY ID/PK
app.put("/users/:id", async (request, response) => {
  const user = await User.findByPk(request.params.id);
  user.update(request.body);
  response.send("Pengguna berhasil diperbarui.");
});

// DELETE BY ID/PK
app.delete("/users/:id", async (request, response) => {
  const user = await User.findByPk(request.params.id);
  user.destroy();
  response.send("Pengguna berhasil dihapus.");
});

app.listen(3000, async () => {
  console.log("Server sudah berjalan.");
  hubungkan();
  // MENGGUNAKAN RAW QUERY

  // const conn = await pool.getConnection();
  // console.log("Berhasil terhubung ke basis data.");

  // await conn.query("CREATE DATABASE neophyte");
  // console.log("Berhasil membuat basis data.");
});
