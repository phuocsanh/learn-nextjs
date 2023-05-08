import { GetStaticProps, GetStaticPropsContext } from 'next';
import Link from 'next/link';
import * as React from 'react';

interface IPropsPost {
  id: string;
  title: string;
}
export interface IPostProps {
  posts: IPropsPost[];
}

export default function Post(props: IPostProps) {
  // console.log('🚀 ~ file: index.tsx:13 ~ Post ~ props:', props.posts);
  return (
    <div>
      <h1>Post list</h1>
      <ul>
        {props?.posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`} legacyBehavior>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps<IPostProps> = async (
  context: GetStaticPropsContext
) => {
  // sever side
  // build  time
  // console.log('🚀 ~ file: index.tsx:23 ~ build  time:');
  const res = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1');
  const data = await res.json();
  console.log('🚀 ~ file: index.tsx:20 ~ data:', data);
  return {
    props: {
      posts: data.data.map((data: IPropsPost) => ({
        id: data.id,
        title: data.title,
      })),
    },
  };
};
