import axios from "axios";
import https from 'https';

const agent = new https.Agent({
  rejectUnauthorized: false,
});

const loginData = {
  "CompanyDB": process.env.COMP_DB,
  "Password": process.env.DB_PASS,
  "UserName": process.env.DB_USERNAME
};

const loginUser = async () => {
  axios.post(`${process.env.REMOTE_SERVER_ENDPOINT}Login`, loginData, {
    httpsAgent: agent,
    headers: {
      'Content-Type': 'application/json',
      // Incluye otros headers necesarios si los hay
    }
  })
    .then(response => {
      console.log('Login successful:', response.data);
      return response.data;
      // Puedes almacenar el SessionId para futuras solicitudes
    })
    .catch(error => {
      console.error('Login failed:', error.response ? error.response.data : error.message);
    });
};

export default loginUser;

