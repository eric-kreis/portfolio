import axios, { AxiosInstance } from 'axios';

// const { API_URL } = process.env;

class UserService {
  private http: AxiosInstance;

  private url: string;

  private path: '/users';

  constructor() {
    this.url = 'http://localhost:3001';
    this.path = '/users';

    this.http = axios.create({
      baseURL: this.url,
      timeout: 30000,
      withCredentials: true,
    });
  }
}

export default UserService;
