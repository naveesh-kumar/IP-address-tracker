import { axiosInstance } from "../axios";

export const handleGeoReq = async (ipAddress) => {
  const res = await axiosInstance.get("/api/geoLocation", {
    params: { ipAddress },
  });
  const data = await res.data;
  return data;
};

export const isValidIP = (ipAddress) => {
  let regExp = new RegExp("^(?:[0-9]{1,3}.){3}[0-9]{1,3}$");
  return regExp.test(ipAddress);
};

export const debounceClick = (handlerFunc, timer) => {
  if (timer.current) clearTimeout(timer.current);
  timer.current = setTimeout(handlerFunc, 1000);
};
