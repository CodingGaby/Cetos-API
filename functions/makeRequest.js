import axios from "axios";

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

export default makeRemoteGet;
