import { useAuth } from '@/hooks/use-auth';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

type IAuthProps = {
  children: any;
};

export const Auth = ({ children }: IAuthProps) => {
  const router = useRouter();
  const { profile, firstLoading } = useAuth();
  useEffect(() => {
    if (!firstLoading && !profile?.username) {
      router.push('/login');
    }
    return () => {};
  }, [router, , firstLoading, profile]);

  if (!profile?.username) return <p>Loading...</p>;

  return <div>{children}</div>;
};
