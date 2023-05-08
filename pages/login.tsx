import { authApi } from '@/api-client/auth-client';
import { useAuth } from '@/hooks/use-auth';
import { useRouter } from 'next/router';
import React from 'react';

interface Props {}

const LoginPage = (props: Props) => {
  const router = useRouter();
  const { profile, login, logout } = useAuth({
    revalidateOnMount: false,
  });
  async function handleLogin() {
    try {
      await login();
      router.push('/about');
    } catch (error) {
      console.log('🚀 ~ file: login.tsx:11 ~ handleLogin ~ error:', error);
    }
  }
  async function handleLogout() {
    try {
      await logout();
    } catch (error) {
      console.log('🚀 ~ file: login.tsx:11 ~ handleLogin ~ error:', error);
    }
  }
  async function handleGetProfile() {
    try {
      await authApi.getProfile();
    } catch (error) {
      console.log('🚀 ~ file: login.tsx:11 ~ handleLogin ~ error:', error);
    }
  }
  return (
    <div>
      <h1>Login Page</h1>
      <h3>{`Profile: ${JSON.stringify(profile)}`}</h3>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleGetProfile} style={{ marginLeft: 10, marginRight: 10 }}>
        {' '}
        GetProfile{' '}
      </button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default LoginPage;
