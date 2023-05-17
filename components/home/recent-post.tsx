import { Box, Button, Container, Stack, Typography, Link as MuiLink } from '@mui/material';
import Link from 'next/link';
import { PostCard } from './post-card';

import * as React from 'react';
import { IPost } from '@/models';

export function RecenPost() {
  const postList: IPost[] = [
    {
      id: '1',
      title: 'Scott Chow',
      published: new Date().getTime().toString(),
      description:
        'My name is Scott Chow, and I am going to show you how to start blogging today. I have been building blogs and websites since 2002. In that time I have launched several of my own blogs, and helped hundreds of others do the same.',
      tagLisst: ['#Facebook', '#Twitter'],
    },
    {
      id: '2',
      title: 'Adam JonhSon',
      published: new Date().getTime().toString(),
      description:
        ' Hobbies or other interests you are passionate about are a great place to start. Cooking, travel, fashion, sports, and cars are all classic examples. But even blogs about more obscure hobbies can be successful, since the your audience is literally anyone in the world with the internet.',
      tagLisst: ['#Facebook', '#Twitter'],
    },
  ];
  return (
    <Box mx="auto" component={'section'} bgcolor={'background.default'} py={4}>
      <Container>
        <Stack flexDirection={'row'} justifyContent={'space-between'} pb={2}>
          <Typography>Recent Post</Typography>
          <Link passHref href={'/blog'} legacyBehavior>
            <MuiLink>View all</MuiLink>
          </Link>
        </Stack>
        <Stack
          flexDirection={{
            xs: 'column',
            md: 'row',
          }}
          sx={{
            '& > div': {
              width: {
                xs: '100%',
                md: '50%',
              },
            },
          }}
        >
          {postList?.map((post: IPost) => (
            <Box mr={{ md: 2 }} mt={{ xs: 2, md: 0 }}>
              <PostCard post={post} />
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
