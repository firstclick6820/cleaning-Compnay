import React from 'react'
import {
    Box,
    Button
}
from '@mui/material'
import { styled } from '@mui/material/styles';


const StyledButton = ({children,handleClick}) => {
  return (
    <WrapperContainer>
        <DesignedButton onClick={handleClick}>
            {children}
        </DesignedButton>
    </WrapperContainer>
  )
}

export default StyledButton




const WrapperContainer = styled(Box)({
    display: 'flex',
    justifyContent: "center",
    alignItems: 'center',
})

const DesignedButton = styled(Button)({
    '&:before': {
        content: "''",
        position: 'absolute',
        top: 0,
        left: '-100%',
        width: '100%',
        height: '100%',
        background: 'linear-gradient(120deg,transparent,rgba(146, 148, 248, 0.4),transparent)',
        transition: 'all 650ms',
    },
    '&:hover:before': {
        left:' 100%',
    },
    textDecoration: 'none',
    border: '1px solid rgb(146, 148, 248)',
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '1rem',
    fontSize: '1rem',
    padding: '0.5rem 2rem',
    color: '#f4f4f4',
    textTransform:'uppercase',
    '&:hover': {
        boxShadow: '1px 1px 25px 10px rgba(146, 148, 248, 0.4)',
    }

})

