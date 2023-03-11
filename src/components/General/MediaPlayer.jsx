import React from 'react';
import ReactPlayer from 'react-player';

import { Box } from '@mui/material';

function MediaPlayer({url}) {
  
  return (
    <Box minHeight="50vh" className="shadow-2">
        <ReactPlayer
          url={url}
          controls={true}
          width='100%'
          style={{ height: '100%' }}
        />
    </Box>
  );
}

export default MediaPlayer;
