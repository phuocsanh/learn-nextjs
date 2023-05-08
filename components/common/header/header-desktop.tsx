import { Box, Container, Stack, Link as MuiLink } from '@mui/material';
import React, { useState } from 'react';
import { ROUTE_LIST } from './routes';
import Link from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';

export interface IHeaderDesktopProps {}

export default function HeaderDesktop(props: IHeaderDesktopProps) {
  const router = useRouter();
  return (
    <Box display={{ xs: 'none', md: 'block' }} py={2}>
      <Container>
        <Stack direction={'row'} justifyContent={'flex-end'}>
          {ROUTE_LIST.map((item) => (
            <Link href={item.path} key={item.path} passHref legacyBehavior>
              <MuiLink
                className={clsx({ active: router.pathname === item.path })}
                sx={{
                  ml: 2,
                  fontSize: 20,
                  fontWeight: 500,
                  // color: router.pathname == item.path ? 'primary.main' : '',
                }}
              >
                {item.label}
              </MuiLink>
            </Link>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
