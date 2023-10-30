import React from 'react'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { ICardHeroes } from '../interfaces/interfaces'

const CardHeroes = ({ title, subtitle, url, description }: ICardHeroes) => {
  return (
    <Card>
      <CardMedia component="img" alt={title} image={url} className='h-[50%]' />
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography color="textSecondary">
          <strong>Poder total:</strong> {subtitle}
        </Typography>
        <div className='m-2'>
          {description}
        </div>
      </CardContent>
    </Card>
  )
}

export default CardHeroes
