import React from 'react';
import {
  Card,
  CardContent,
  Container,
  Divider,
  Typography,
  Link as MuiLink,
  Stack,
} from '@mui/material';
import { IPost } from '@/models';
import { format } from 'date-fns';

interface IPostCard {
  post: IPost;
}

export function PostCard(props: IPostCard) {
  return (
    <Card sx={{ minHeight: '100%' }}>
      <CardContent>
        <Typography variant="h5" fontWeight={'bold'}>
          {props?.post?.title}
        </Typography>
        <Stack flexDirection={'row'}>
          <Typography sx={{ display: 'flex', alignItems: 'center' }}>
            {format(Number(props?.post?.published), 'dd MMM yyyy')}
          </Typography>
          <Divider orientation="vertical" sx={{ mx: 2 }} flexItem />
          <Typography sx={{ display: 'flex', alignItems: 'center' }}>
            {props?.post?.tagLisst?.join(', ')}
          </Typography>
        </Stack>

        <Typography>{props?.post?.description}</Typography>
      </CardContent>
    </Card>
  );
}
