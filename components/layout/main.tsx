import { ILayoutProps } from '@/models';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { Footer, Header } from '../common';
import { Box, Container, Stack } from '@mui/material';

export function MainLayout(props: ILayoutProps) {
  return (
    <Stack sx={{ minHeight: '100vh' }}>
      <Header />

      <Box component={'main'} flexGrow={1}>
        {props.children}
      </Box>

      <Footer />
    </Stack>
  );
}
