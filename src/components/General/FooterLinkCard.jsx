import React from 'react';
import {
  MDBCol,
} from 'mdb-react-ui-kit';


import { 
    Container,
    Typography,
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
} from '@mui/material';
    
    
import { styled } from '@mui/material/styles';
    
  
import { Link } from 'react-router-dom';


export default function FooterLinkCard({title, links}) {
  return (
        <LinksWrapperBox>
            <Title>{title}</Title>

            <LinksList>
                {links && (
                    links.map((link, index) => (
                        <ListItem disablePadding key={index} sx={{width: '55%'}}>
                            <CustomListItemButton>
                                <ListItemText primary={link.title} />
                            </CustomListItemButton>
                    </ListItem>
                    ))
                )}
            </LinksList>
        </LinksWrapperBox>
  );
}


const LinksWrapperBox = styled(Box)({
    
})

const LinksList = styled(List)({
    
})

const CustomListItemButton = styled(ListItemButton)({
    color: '#EF9A9A',
    padding:'0.1em 0.1em 0.1em 0.5em',
    borderRadius: '0 2rem 2rem 0',
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
        backgroundImage: 'linear-gradient(to left, #870000, #190a05)',
        color: 'white',
    }

})

const Title = styled(Typography)({
    fontSize: '1rem',
    textAlign: 'left',
    fontWeight: 900,
    textTransform: 'uppercase',
    color: 'white'
})
