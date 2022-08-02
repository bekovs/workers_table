import { Box, Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Box sx={{m: 5}} className="links">
      <Link to="/workers">
        <Button variant="contained">go to list</Button>
      </Link>
    </Box>
  );
};

export default Home;