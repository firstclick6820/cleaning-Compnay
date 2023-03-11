
import React from 'react'
import { 
Box,
CardContent,
Typography
} from '@mui/material'

import { styled } from '@mui/material/styles';



const ShowCaseCard = ({title, description}) => {
  return (
    <Box>
        <Box alignItem="center" textAlign="center">
 
            <Text variant="h4"><strong>{title}</strong></Text>
            <CardContent>
                <Description variant='body'>{description}</Description>
            </CardContent>
        </Box>
    </Box>
  )
}

export default ShowCaseCard



const Text = styled(Typography)({
  fontWeight: 600,
  backgroundImage: 
  'linear-gradient(to bottom, #ffefba, #ffffff)',
  color: 'transparent',
  backgroundClip: 'text',
})


const Description = styled(Typography)({
  fontSize: '1em',
  lineHeight: '1.5em', 
  textAlign: 'center', 
  textShadow: '0 1px ', 
  paddingTop: '1em', 
  color: 'white'
})