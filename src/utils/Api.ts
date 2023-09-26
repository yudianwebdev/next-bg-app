import Axios from "axios";
import Cookies from "js-cookie";
import { setGlobal } from "reactn";
import { HOSTNAME } from "../services/environments";

interface IApi {
  post: (url: string, body?: object, config?: object) => any;
  get: (url: string, body?: object, config?: object) => any;
}

const APINew: IApi = {
  post: (url, body = {}, config = { headers: {} }) => {
    return Call(url, body, config, "POST");
  },
  get: (url, body = {}, config = { headers: {} }) => {
    return Call(url, body, config, "GET");
  },
};

const Call = (url, body, config, method) => {
  const url1 = `${process.env.NEXT_PUBLIC_HOST}${url}`;
  // const [Err, setErr] = useGlobal("Err");
  const token = Cookies.get("token");
  config.headers = {
    Authorization: `Bearer ${token}`,
  };
  setGlobal({
    Err: null,
    addOne: null,
    dataErr: null,
    Username: null,
    // tes,
  });

  return Axios({
    method,
    withCredentials: false,
    data: method == "GET" ? {} : body,
    params: method == "GET" ? body : {},
    baseURL: url1,
    headers: config.headers,
  })
    .then(async (res) => {
      let { data, headers } = res;
      console.info(`response ${method}:${url1}`, data);

      return data;
    })
    .catch((err) => {
      if (err.response !== undefined) err = err.response.data;
      console.info(`response`, ` ${method}:${url1}`, err);
      // console.log("tes global state", stateGlobal);
      if (err.code == 401) {
        console.log("Error", err.message);
        setGlobal({
          Err: err.message,
        });

        // setErr(err.message);
        // setErrors(e.data);
      }
      if (err.code == 422) {
        setGlobal({ dataErr: err.data });
        // setGlobal({ Username: err.data.email[0] });
        console.log("Error", err.data);
      }
      if (err?.code == 403) {
        console.log("Error", err.message);
        // setErr(err.data);
      }
      throw err;
    });
};
export default APINew;
