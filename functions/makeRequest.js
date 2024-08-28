import axios from "axios";
import https from "https";

const httpsAgent = new https.Agent({
  rejectUnauthorized: false  // Omitir verificación de certificado
});

export const getMockBPS = async (param) => {
  if (!param) {
    try {
      const response = await axios.get(process.env.MOCK_ENDPOINT + "bp", { httpsAgent });
      return response.data;
    } catch (error) {
      console.error("Error getting BP:", error);
      throw error;
    }
  }

  return "Dont use params to get MOCK BP's"
};

export const getBussinessPartnerByID = async (bussinessPartnerID) => {
  try {
    const res = await axios.get(`${process.env.REMOTE_SERVER_ENDPOINT}BusinessPartners('${bussinessPartnerID}')`, { httpsAgent });
    return res.data;
  } catch (error) {
    console.error(`Error getting Business Partner (${bussinessPartnerID}):`, error);
    throw error;
  }
}

export const getSaleOrderByID = async (saleOrderID) => {
  try {
    const res = await axios.get(`${process.env.REMOTE_SERVER_ENDPOINT}SaleOrder('${saleOrderID}')`, { httpsAgent });
    return res.data;
  } catch (error) {
    console.error(`Error getting Sale Order (${saleOrderID}):`, error);
    throw error;
  }
}

export const getMockSO = async () => {
  try {
    const response = await axios.get(`${process.env.MOCK_ENDPOINT}so/`, { httpsAgent });
    return response.data;
  } catch (error) {
    console.error("Error getting Mock SO:", error);
    throw error;
  }

};

