import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import * as React from 'react';

interface IPostDetail {
  id: string;
  title: string;
}
export interface IPostDetailProps {
  posts: any;
}

export default function PostDetail(props: IPostDetailProps) {
  const router = useRouter();
  if (!props.posts) {
    return null;
  }
  return (
    <div>
      <p>{props.posts.title}</p>
      <p>{props.posts.author}</p>
      <p>{props.posts.description}</p>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  // console.log('🚀 ~ file: index.tsx:23 ~ build  time:');
  const res = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1');
  const data = await res.json();
  return {
    paths: data?.data?.map((data: { id: string }) => ({ params: { postId: data.id } })),
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps<IPostDetailProps> = async (
  context: GetStaticPropsContext
) => {
  console.log('🚀 ~ file: [postId].tsx:44 ~ getStaticProps:', context?.params?.postId);
  const postId = context.params?.postId;
  // sever side
  // build  time
  // console.log('🚀 ~ file: index.tsx:23 ~ build  time:');
  const res = await fetch(`https://js-post-api.herokuapp.com/api/posts/${postId}`);
  const data = await res.json();
  // console.log('🚀 ~ file: index.tsx:20 ~ data:', data);
  return {
    props: {
      posts: data,
    },
  };
};
