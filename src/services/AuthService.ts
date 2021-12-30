import axios, { AxiosInstance } from 'axios';

// const { API_URL } = process.env;

class AuthService {
  private http: AxiosInstance;

  private url: string;

  constructor() {
    this.url = 'http://localhost:3001';

    this.http = axios.create({
      baseURL: this.url,
      timeout: 30000,
      withCredentials: true,
    });
  }

  public async setToken({ email, password }: { email: string, password: string }) {
    return this.http.post<string>('/login', { email, password });
  }
}

export default AuthService;
