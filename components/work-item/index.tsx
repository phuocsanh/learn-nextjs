import { IFeatureWork } from '@/models';
import { Box, Chip, Stack, Typography } from '@mui/material';

import * as React from 'react';
import Image from '../common/Image';
import { format } from 'date-fns';

export interface IWorkItemProps {
  item: IFeatureWork;
}

export default function WorkItem({ item }: IWorkItemProps) {
  console.log('🚀 ~ file: index.tsx:12 ~ WorkItem ~ item:', item);

  return (
    <Box>
      <Stack
        flexDirection={{ xs: 'column', md: 'row' }}
        alignItems={{ xs: 'flex-start' }}
        mt={{ xs: 2 }}
      >
        <Box
          flexShrink={0}
          sx={{ width: { xs: '100%', md: 350 }, height: { xs: 180, md: 300 } }}
          alignSelf={{ xs: 'center' }}
        >
          <Image alt="image/item/work" src={item?.image} />
        </Box>
        <Box sx={{ mt: { xs: 2 }, ml: { md: 2 } }}>
          <Typography fontSize={18} fontWeight={600}>
            {item?.title}
          </Typography>
          <Stack flexDirection={'row'} paddingY={2}>
            <Chip
              color="success"
              sx={{ backgroundColor: '#383735' }}
              label={format(new Date(+item?.createAt * 1000), 'yyyy')}
              size="small"
            />
            <Chip size="small" label={item?.shortDescriptions} sx={{ ml: 2 }} />
          </Stack>
          <Typography>{item?.fullDescriptions}</Typography>
        </Box>
      </Stack>
    </Box>
  );
}
