import axios from "axios";
import https from 'https';

const agent = new https.Agent({
  rejectUnauthorized: false,
});

const loginUser = async () => {
  axios.post(`${process.env.REMOTE_SERVER_ENDPOINT}Login`, {
    "CompanyDB": "SBODemoUS",
    "Password": "pristine",
    "UserName": "manager"
  }, { httpsAgent: agent })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export default loginUser;
