import React from 'react'

import { 
    Card, 
    CardContent, 
    Typography,
    Box
} from '@mui/material';

import { styled } from '@mui/material/styles';
  
const CompanyCard = () => {
  return (
    <WrapperContainer>
        <ContentWrapper>
            <TopCard>
                <Typography variant='h6'>CleaningCompany.AE</Typography>
                <Typography variant="body6" sx={{color: 'white'}}>One Stop For Your All Cleaning Needs</Typography>
            </TopCard>

            <BottomCard>
                <BottomLeftCard>
                    <Typography >📨 wecare@cleaningcompany.ae</Typography>
                    <Typography >📞 056 466 0472</Typography>
                    <Typography >🌐 cleaningcompany.ae</Typography>
                </BottomLeftCard>

                <BottomRightCard>
                    <Typography >🏠Abu Saif business center, Dubai.</Typography>
                </BottomRightCard>
            </BottomCard>

        </ContentWrapper>
    </WrapperContainer>
  )
}

export default CompanyCard

const WrapperContainer =styled(Box)({
    display: 'flex',
    overflow: 'hidden',
	position: 'relative',
	lineHeight: 1,
	fontSize: '1vmin',
	minWidth: '50vmin',
	minHeight: '30vmin',
	padding: '3vmin',
	borderRadius: '1em',
	boxShadow: '0 5px 15px -5px rgba(0, 0, 0, 0.4)',
    transition: 'all 0.3s ease-in-out',
    cursor: 'pointer',
    '&:hover': {
        scale:'1.02'
    }
})

const ContentWrapper = styled(Box)({
    width: '100%',
    zIndex: 2,
    display: 'flex',
    flexDirection: 'column',
    justifyContent:'space-between',
	color: '#EF9A9A',
})


const TopCard = styled(Box)({
    textAlign: 'right',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end'
})

const BottomCard = styled(Box)({
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',

})



const BottomRightCard = styled(Box)({
})


const BottomLeftCard = styled(Box)({
    fontWeight: 500,
    fontSize:' 0.5em',
})


