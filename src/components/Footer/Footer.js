import * as React from 'react';
import { Box, Typography, Container,Link,CssBaseline } from '@material-ui/core';

function Copyright() {
  return (
    <Typography variant="body2" color="inherit">
      {'Copyright © '}
      <Link color="inherit" href="https://hanii.netlify.app/">
        Hanii🔥
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function StickyFooter() {
  return (
 
      <Box
        component="footer"
        sx={{
          py: 4,
          px: 7,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1">
            Made With ❤️ By <Link color="inherit" href="https://hanii.netlify.app/">
        Hanii🔥
      </Link>{' '}
          </Typography>
          <Copyright />
        </Container>
      </Box>
  );
}


