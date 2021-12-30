import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import AuthService from '../src/services/AuthService';

const Login: NextPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const sendToken = async () => {
    const service = new AuthService();
    const response = await service.setToken({ email, password });
    console.log(response);
  };

  return (
    <div>
      <Head><title>Login</title></Head>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          placeholder="email"
          type="email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
        <input
          placeholder="password"
          type="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <button type="submit" onClick={sendToken}>Entrar</button>
      </form>
    </div>
  );
};

export default Login;
