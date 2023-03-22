import { axiosInstance } from "../../src/axios";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const apiObject = (data) => {
  if (!data) return {};
  return {
    ip: data.ip,
    location:
      `${data.location?.region}, ${data.location?.country} ${data.location?.postalCode}`.trim(),
    timeZone: data.location?.timezone,
    isp: data.isp,
    lat: data.location.lat,
    lng: data.location.lng,
    city: data.location.city,
  };
};

const handler = async (req, res) => {
  const { query } = req;
  try {
    const resData = await axiosInstance.get(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${query.ipAddress}`
    );
    const data = await resData.data;
    res.status(200).json(apiObject(data));
  } catch (err) {
    console.log(err.mesage);
  }
};

export default handler;
