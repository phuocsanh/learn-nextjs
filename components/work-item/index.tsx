import { IFeatureWork } from '@/models';
import { Box, Stack, Typography } from '@mui/material';

import * as React from 'react';
import Image from '../common/Image';

export interface IWorkItemProps {
  item: IFeatureWork;
}

export default function WorkItem({ item }: IWorkItemProps) {
  return (
    <Box>
      <Stack
        flexDirection={{ xs: 'column', md: 'row' }}
        alignItems={{ xs: 'flex-start' }}
        mt={{ xs: 2 }}
      >
        <Box
          flexShrink={0}
          sx={{ width: { xs: 150, md: 300 }, height: { xs: 150, md: 300 } }}
          alignSelf={{ xs: 'center' }}
        >
          <Image alt="image/item/work" src={item?.image} />
        </Box>
        <Box>
          <Typography>{item?.title}</Typography>
          <Typography>{item?.tagList}</Typography>
          <Typography>{item?.fullDescriptions}</Typography>
        </Box>
      </Stack>
    </Box>
  );
}
