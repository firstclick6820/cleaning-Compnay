import React from 'react'
import {
Card,
CardHeader,
CardContent,
Rating,
Typography,
Avatar

} from '@mui/material'


const ReviewCard = ({review, index}) => {
  const {avatar, name, date, rating, comment} = review
  return (
    
    <Card sx={{ mx: 2 }}>
        <CardHeader
        avatar={
            <Avatar src={review.avatar} alt={review.name} />
        }
        title={review.name}
        subheader={review.date}
        action={
            <Rating name={`rating-${index}`} value={review.rating} precision={0.5} readOnly />
        }
        />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        {review.comment}
      </Typography>
    </CardContent>
  </Card>
  )
}

export default ReviewCard