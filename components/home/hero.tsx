import { Box, Button, Container, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import minayoung from '../../images/minayoung.jpeg';
export interface IHeroSectionProps {}

export const HeroSection = (props: IHeroSectionProps) => {
  return (
    <Box component={'section'} pt={{ xs: 4, md: 10 }} pb={{ xs: 6, md: 8 }}>
      <Container>
        <Stack
          direction={{ xs: 'column-reverse', md: 'row' }}
          alignItems={{ xs: 'center', md: 'flex-start' }}
          textAlign={{ xs: 'center', md: 'left' }}
          spacing={5}
        >
          <Box flex={3}>
            <Typography component="h1" variant="h3" fontWeight="bold">
              Hi You, <br /> Welcome to my page
            </Typography>
            <Typography pt={4} pb={3}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi impedit vero, nam
              possimus quasi dolor sapiente assumenda! Numquam possimus pariatur omnis officiis,
              voluptatibus tempora quam saepe assumenda, facere sunt quia.
            </Typography>
            <Button sx={{ mt: 2, ':hover': { color: 'white' } }} variant="contained">
              Download Resume
            </Button>
          </Box>
          <Box
            ml={2}
            mr={2}
            width={{ xs: 200, md: 300 }}
            height={{ xs: 200, md: 300 }}
            sx={{
              boxShadow: {
                xs: '-2px 8px',
                md: '-5px 10px',
              },
              color: '#e7fbff',
              borderRadius: '50%',
              dislay: 'inline-block',
              overflow: 'hidden',
            }}
          >
            <div style={{ width: '100%', height: '100%', position: 'relative' }}>
              <Image
                alt="Mountains"
                src="https://images.unsplash.com/photo-1485199692108-c3b5069de6a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmVhdXRpZnVsbCUyMGdpcmx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                fill
                style={{
                  objectFit: 'cover',
                }}
              />
            </div>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};
