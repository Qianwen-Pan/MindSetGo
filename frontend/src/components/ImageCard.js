import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Box } from '@mui/system';

export default function ImageCard() {
  return (
    <Box sx={{ maxWidth: 400 }}>
      <Card elevation={0}>
        <CardMedia
          component="img"
          height="400"
          image="/logo.jpg"
          alt="logo"
          
        />
      </Card>
    </Box>
  );
}