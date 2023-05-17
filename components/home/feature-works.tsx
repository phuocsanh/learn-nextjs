import { Box, Button, Container, Stack, Typography, Link as MuiLink, Divider } from '@mui/material';
import Link from 'next/link';

import * as React from 'react';
import { IFeatureWork, IPost } from '@/models';
import WorkItem from '../work-item';

export function FeatureWorks() {
  const featureList: IFeatureWork[] = [
    {
      id: '1',
      title: 'Scott Chow',
      shortDescriptions: '',
      image:
        'https://images.unsplash.com/photo-1683526513573-1effdda48dcf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80&h=300',
      fullDescriptions:
        'My name is Scott Chow, and I am going to show you how to start blogging today. I have been building blogs and websites since 2002. In that time I have launched several of my own blogs, and helped hundreds of others do the same.',
      tagList: ['#Facebook', '#Twitter'],
      createAt: '',
      updateAt: '',
    },
    {
      id: '2',
      title: 'Adam JonhSon',
      image:
        'https://images.unsplash.com/photo-1632406293517-2dcd779e1e71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60&h=500',
      shortDescriptions: '',
      fullDescriptions:
        ' Hobbies or other interests you are passionate about are a great place to start. Cooking, travel, fashion, sports, and cars are all classic examples. But even blogs about more obscure hobbies can be successful, since the your audience is literally anyone in the world with the internet.',
      tagList: ['#Facebook', '#Twitter'],
      createAt: '',
      updateAt: '',
    },
  ];
  return (
    <Box mx="auto" component={'section'} py={4}>
      <Container>
        <Typography>Feature works</Typography>

        <Stack>
          {featureList?.map((post: IFeatureWork) => {
            return (
              <>
                <WorkItem item={post} />
                <Divider sx={{ mt: 2 }} />
              </>
            );
          })}
        </Stack>
      </Container>
    </Box>
  );
}
