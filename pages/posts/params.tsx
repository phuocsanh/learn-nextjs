import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import * as React from 'react';

export interface IParamsProps {}

export default function Params(props: IParamsProps) {
  const router = useRouter();
  return <div>{JSON.stringify(router.query)}</div>;
}

export const getServerSideProps: GetServerSideProps = async () => {
  await new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });
  console.log(
    '🚀 ~ file: prams.tsx:13 ~ constgetServerSideProps:GetServerSideProps= ~ getServerSideProps:'
  );
  // console.log('🚀 ~ file: index.tsx:23 ~ build  time:');
  // const res = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1');
  // const data = await res.json();
  return {
    props: {},
  };
};
