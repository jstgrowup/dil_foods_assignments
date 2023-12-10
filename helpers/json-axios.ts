import axios from "axios";
interface Options {
  url: string;
  method: string;
}
export const jsonAxiosForProducts= async (options: Options) => {
  return axios(options)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      if (error.code && error.error) {
        throw error;
      } else if (error && error.response && error.response.data) {
        throw error.response.data.responseCode;
      } else {
        let port = error && error.port;
        let err = {
          message: "unable to reach service",
        };
        throw Object.assign({ code: 503, error: err, port: port });
      }
    });
};
