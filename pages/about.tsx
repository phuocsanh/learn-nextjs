// import Header from '@/components/common/header';
import { AdminLayout, MainLayout } from '@/components/layout';
import { useAuth } from '@/hooks/use-auth';
import { NextPageWithLayout } from '@/models';
import { theme } from '@/utils';
import { Box, Typography } from '@mui/material';
import { GetStaticProps, GetStaticPropsContext } from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
const Header = dynamic(() => import('@/components/common/header'), { ssr: false }); // dùng khi không muốn component render bên phía sever
export interface IAboutProps {}

const About: NextPageWithLayout = (props: IAboutProps) => {
  const router = useRouter();
  const { profile, login, logout } = useAuth({
    revalidateOnMount: false,
  });
  const [posts, setPosts] = useState([]);
  // console.log('🚀 ~ file: about.tsx:11 ~ About ~ posts:', posts);
  // console.log('🚀 ~ file: about.tsx:8 ~ About ~ router:', router.query);
  const page = router?.query?.page;
  useEffect(() => {
    if (!page) return;
    (async () => {
      const res = await fetch(`https://js-post-api.herokuapp.com/api/posts?_page=${page}`);
      const data = await res.json();
      setPosts(data.data);
    })();
    // return () => {};
  }, [page]);
  const handleClick = () => {
    router.push(
      { pathname: '/about', query: { page: Number(router?.query?.page || 1) + 1 } },
      undefined,
      { shallow: true }
    );
  };
  const handleClickLogout = async () => {
    try {
      await logout();
      router.push('/login');
    } catch (error) {
      console.log('🚀 ~ file: login.tsx:11 ~ handleLogin ~ error:', error);
    }
  };
  return (
    <Box>
      <p>About</p>
      <Typography component={'h1'} variant="h3" color={'primary.main'}>
        ABOUT PAGE
      </Typography>
      <Header />
      <ul>
        {posts.map((post: any) => (
          <li key={post.title}>{post.title}</li>
        ))}
      </ul>
      <button onClick={handleClick}>Click next page</button>
      <button onClick={handleClickLogout}>Logout</button>
    </Box>
  );
};
About.Layout = AdminLayout;
export default About;
export const getStaticProps: GetStaticProps<{}> = async (context: GetStaticPropsContext) => {
  // sever side
  // build  time

  console.log('🚀 ~ file: index.tsx:20 ~ getStaticProps:');
  return {
    props: {},
  };
};
