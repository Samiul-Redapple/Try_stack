import React from 'react';
import { Box, Typography, Button, Card, CardContent, useTheme } from '@mui/material';

const ThemeTest = () => {
  const theme = useTheme();

  return (
    <Box p={3}>
      <Typography variant="h3" gutterBottom>
        Theme Color Test
      </Typography>
      
      <Box display="flex" gap={2} flexWrap="wrap" mb={3}>
        <Card sx={{ minWidth: 200 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Primary Colors
            </Typography>
            <Box 
              sx={{ 
                width: 50, 
                height: 50, 
                backgroundColor: theme.palette.primary.main,
                mb: 1,
                border: '1px solid #ccc'
              }} 
            />
            <Typography variant="body2">
              Main: {theme.palette.primary.main}
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ minWidth: 200 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Secondary Colors
            </Typography>
            <Box 
              sx={{ 
                width: 50, 
                height: 50, 
                backgroundColor: theme.palette.secondary.main,
                mb: 1,
                border: '1px solid #ccc'
              }} 
            />
            <Typography variant="body2">
              Main: {theme.palette.secondary.main}
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ minWidth: 200 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Accent Colors
            </Typography>
            <Box 
              sx={{ 
                width: 50, 
                height: 50, 
                backgroundColor: theme.palette.accent?.main || '#8CCDEB',
                mb: 1,
                border: '1px solid #ccc'
              }} 
            />
            <Typography variant="body2">
              Main: {theme.palette.accent?.main || '#8CCDEB'}
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ minWidth: 200 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Highlight Colors
            </Typography>
            <Box 
              sx={{ 
                width: 50, 
                height: 50, 
                backgroundColor: theme.palette.highlight?.main || '#FFE3A9',
                mb: 1,
                border: '1px solid #ccc'
              }} 
            />
            <Typography variant="body2">
              Main: {theme.palette.highlight?.main || '#FFE3A9'}
            </Typography>
          </CardContent>
        </Card>
      </Box>

      <Box display="flex" gap={2} mb={3}>
        <Button variant="contained" color="primary">
          Primary Button
        </Button>
        <Button variant="contained" color="secondary">
          Secondary Button
        </Button>
        <Button 
          variant="contained" 
          sx={{ 
            backgroundColor: theme.palette.accent?.main,
            '&:hover': {
              backgroundColor: theme.palette.accent?.[600]
            }
          }}
        >
          Accent Button
        </Button>
      </Box>

      <Typography variant="body1" gutterBottom>
        Current theme mode: {theme.palette.mode}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        This is secondary text to test readability
      </Typography>
    </Box>
  );
};

export default ThemeTest;