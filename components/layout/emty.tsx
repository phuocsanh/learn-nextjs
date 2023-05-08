import { ILayoutProps } from '@/models';
import Link from 'next/link';
import * as React from 'react';

export function EmtyLayout(props: ILayoutProps) {
  return <div>{props.children}</div>;
}
