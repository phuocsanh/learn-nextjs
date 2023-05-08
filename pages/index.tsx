import Image from 'next/image';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { MainLayout } from '@/components/layout';
import { NextPageWithLayout } from '@/models';
import { Box } from '@mui/material';

const Home: NextPageWithLayout = () => {
  const router = useRouter();
  return <Box>Home Page</Box>;
};
Home.Layout = MainLayout;
export default Home;
