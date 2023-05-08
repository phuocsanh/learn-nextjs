import { ILayoutProps } from '@/models';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { Footer, Header } from '../common';
import { Box, Container, Stack } from '@mui/material';

export function MainLayout(props: ILayoutProps) {
  return (
    <Stack sx={{ minHeight: '100vh' }}>
      <Header />
      <Container maxWidth="sm" sx={{ backgroundColor: 'primary.main' }}>
        SM container
      </Container>
      <Container sx={{ backgroundColor: 'secondary.main' }}>MD container</Container>
      <p>Main Layout</p>
      <Link href={'/'} legacyBehavior style={{ marginRight: 10 }}>
        <a>Home</a>
      </Link>
      <Link href={'/blog'} legacyBehavior>
        <a>Blog</a>
      </Link>
      <Link href={'/works'} legacyBehavior>
        <a>Works</a>
      </Link>
      <Box component={'main'} flexGrow={1}>
        {props.children}
      </Box>

      <Footer />
    </Stack>
  );
}
