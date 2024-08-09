import axios from "axios";

const loginUser = async () => {
  axios.post(`${process.env.REMOTE_SERVER_ENDPOINT}/Login`, {
    "CompanyDB": "SBODemoUS",
    "Password": "pristine",
    "UserName": "manager"
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export default loginUser;
