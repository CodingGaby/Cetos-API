import express from "express";
import dotenv from "dotenv";
import { getBussinessPartnerByID, getMockBPS } from "./functions/makeRequest.js";
import loginUser from "./functions/login.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON to JSObject
app.use(express.json());

// Test Route
// GET all MOCK BP's 
app.get("/", async (req, res) => {
  try {
    const result = await getMockBPS();
    res.send(result);
  } catch (error) {
    res.status(500).send("Error making remote request");
  }
});

//Log User
app.get("/login", async (req, res) => {
  try {
    const result = await loginUser();
    res.send(result);
  } catch (error) {
    res.status(500).send("Error making remote request");
  }
});

// GET BP's by id in remote server
app.get("/bp/:id", async (req, res) => {
  try {
    const result = await getBussinessPartnerByID(req.params.id);
    res.send(result);
  } catch (error) {
    res.status(500).send("Error making remote request");
  }
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
