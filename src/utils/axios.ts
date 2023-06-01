import axios, {Method} from 'axios';

const BASE_URL = 'BASE_URL';

type apisTypes = {
	checkMobileExist: string,
	verifyLogin: string;
}

export const APIS : apisTypes = {
//  Add Apis here
}

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
});

axiosInstance.interceptors.response.use(
  res => {
    return res;
  },
  async error => {
    // Code here...
    return Promise.reject(error);
  },
);

const Axios = async ({
  method,
  path,
  data,
  params,
  header,
}: {
  method: Method;
  path: keyof apisTypes;
  data?: any;
  params?: any;
  header?: any;
}) => {
  const response = await axiosInstance({
    method: method,
    url: APIS[path],
    data: data,
    params: params,
    headers: header
      ? {
          'Content-Type': 'application/x-www-form-urlencoded',
          ...header
        }
      : {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
  });
  return response;
};

export default Axios;
