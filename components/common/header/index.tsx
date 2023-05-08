import { Box } from '@mui/material';
import * as React from 'react';
import HeaderDesktop from './header-desktop';
import HeaderMobile from './header-mobile';

export interface IHeaderProps {}

export function Header(props: IHeaderProps) {
  console.log('🚀 ~ file: header.tsx:6 ~ Header ~ Header:');
  return (
    <>
      <HeaderDesktop />
      <HeaderMobile />
    </>
  );
}
