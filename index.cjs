const express = require("express");
const dotenv = require("dotenv");
const axios = require("axios");

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON to JSObject
app.use(express.json());

// function to make remote GET request
const makeRemoteGet = async (param) => {
  if (!param) {
    try {
      const response = await axios.get(process.env.MOCK_ENDPOINT);
      return response.data;
    } catch (error) {
      console.error("Error getting BP:", error);
      throw error;
    }
  }

  const res = await axios.get(`${process.env.MOCK_ENDPOINT + param}`);
  return res.data;
};

// Test Route
// GET all BP's 
app.get("/", async (req, res) => {
  try {
    const result = await makeRemoteGet();
    res.send(result);
  } catch (error) {
    res.status(500).send("Error making remote request");
  }
});

// GET BP's by id
app.get("/bp/:id", async (req, res) => {
  try {
    const result = await makeRemoteGet(req.params.id);
    res.send(result);
  } catch (error) {
    res.status(500).send("Error making remote request");
  }
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
