import { Facebook, Instagram, Twitter, LinkedIn } from '@mui/icons-material';
import { Box, Typography, Stack, Icon } from '@mui/material';
import * as React from 'react';

export function Footer() {
  console.log('🚀 ~ file: header.tsx:6 ~ Header ~ Header:');
  const socialLink = [
    { icon: Facebook, url: '', color: '#213bff' },

    { icon: Twitter, url: '', color: '#05c7f2' },
    { icon: LinkedIn, url: '', color: '#119ff7' },
  ];
  return (
    <Box component="footer" sx={{ py: 2, textAlign: 'center' }}>
      <Stack flexDirection={'row'} justifyContent={'center'}>
        {socialLink.map((item, idx) => (
          <Box key={idx} component={'a'} px={2} py={2}>
            <Icon component={item.icon} sx={{ color: item?.color }} fontSize="large" />
          </Box>
        ))}
      </Stack>
      <Typography>Copyright ©{new Date().getFullYear()} All right reserved</Typography>
    </Box>
  );
}
