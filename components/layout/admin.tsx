import { ILayoutProps } from '@/models';
import Link from 'next/link';
import * as React from 'react';
import Auth from '../common/auth';

export function AdminLayout(props: ILayoutProps) {
  return (
    <Auth>
      <p>Admin Layout</p>
      <p>Side Bar</p>
      <Link href={'/'} legacyBehavior>
        <a>Home</a>
      </Link>
      <Link href={'/about'} legacyBehavior>
        <a>About</a>
      </Link>
      <div>{props.children}</div>
    </Auth>
  );
}
