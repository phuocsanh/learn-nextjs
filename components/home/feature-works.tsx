import { Box, Button, Container, Stack, Typography, Link as MuiLink, Divider } from '@mui/material';
import Link from 'next/link';

import * as React from 'react';
import { IFeatureWork, IPost } from '@/models';
import WorkItem from '../work-item';

export function FeatureWorks() {
  const featureList: IFeatureWork[] = [
    {
      id: '1',
      title: 'Designing Dashboard',
      shortDescriptions: 'Dashboard',
      image:
        'https://images.unsplash.com/photo-1683526513573-1effdda48dcf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80&h=300',
      fullDescriptions:
        'My name is Scott Chow, and I am going to show you how to start blogging today. I have been building blogs and websites since 2002. In that time I have launched several of my own blogs, and helped hundreds of others do the same.',
      tagList: ['#Facebook', '#Twitter'],
      createAt: '1684847248',
      updateAt: '',
    },
    {
      id: '2',
      title: 'Vibrand Portraits of 2023',
      image:
        'https://images.unsplash.com/photo-1632406293517-2dcd779e1e71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60&h=500',
      shortDescriptions: 'ILustration',
      fullDescriptions:
        'Hobbies or other interests you are passionate about are a great place to start. Cooking, travel, fashion, sports, and cars are all classic examples. But even blogs about more obscure hobbies can be successful, since the your audience is literally anyone in the world with the internet.',
      tagList: ['#Facebook', '#Twitter'],
      createAt: '1684847248',
      updateAt: '',
    },
    {
      id: '3',
      title: '36 Days of Mayalayalam type',
      image:
        'https://images.unsplash.com/photo-1684662863663-d25e39fc4c10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80&h=400',
      shortDescriptions: 'Typography',
      fullDescriptions:
        'I know that starting a blog can seem overwhelming and intimidating. This free guide is all about blogging for beginners, and will teach you how to become a blogger with just the most basic computer skills. So whether you’re 8 or 88, you can create your own blog in 20 minutes.',
      tagList: ['#Facebook', '#Twitter'],
      createAt: '1684847248',
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
