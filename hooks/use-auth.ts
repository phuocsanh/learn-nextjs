import useSWR from 'swr';
import React from 'react';
import { PublicConfiguration } from 'swr/_internal';
import { authApi } from '@/api-client';

export const useAuth = (option?: Partial<PublicConfiguration>) => {
  const {
    data: profile,
    error,
    mutate,
  } = useSWR('/profile', {
    dedupingInterval: 60 * 60 * 1000,
    revalidateOnFocus: false,
    ...option,
  });
  const firstLoading = profile === undefined && error === undefined;

  async function login() {
    await authApi.login({ username: 'phuocsanh', password: '123456' });
    await mutate();
  }
  async function logout() {
    await authApi.logout();
    await mutate({}, false);
  }

  return {
    profile,
    mutate,
    login,
    logout,
    firstLoading,
  };
};
