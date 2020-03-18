import axios from "axios";

const headerName = process.env.REACT_APP_TOKEN_HEADER_NAME as string;

class Auth {
  public get isAuth(): boolean {
    return this._token.length > 0;
  }

  constructor() {
    this._token = "";
    this._interceptor = 0;
  }

  public async auth({ login, password }: {login: string; password: string;}) {
    const res = await axios.post<string>(`${process.env.REACT_APP_BASE_URL_API}/connection`, undefined, {
      params: {
        login,
        password,
      },
    });
    if (res.status >= 400) {
      throw new Error(res.statusText);
    }
    this._token = res.data;
    this._interceptor = axios.interceptors.request.use((config) => {
      config.headers[headerName] = this._token;
      return config;
    });
  }

  protected _token: string;
  protected _interceptor: number;
}

const auth = new Auth();

export default auth;
