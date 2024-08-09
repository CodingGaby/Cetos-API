import express from "express";
import dotenv from "dotenv";
import makeRemoteGet from "./functions/makeRequest.js";
import formatBPData from "./formatBPdata.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON to JSObject
app.use(express.json());

// Test Route
// GET all BP's 
app.get("/", async (req, res) => {
  try {
    const result = await makeRemoteGet();
    result = result.map(formatBPData);//format application
    res.send(result);
  } catch (error) {
    res.status(500).send("Error making remote request");
  }
});

// GET BP's by id
app.get("/bp/:id", async (req, res) => {
  try {
    const result = await makeRemoteGet(req.params.id);
    result = formatBPData(result);//format application
    res.send(result);
  } catch (error) {
    res.status(500).send("Error making remote request");
  }
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});