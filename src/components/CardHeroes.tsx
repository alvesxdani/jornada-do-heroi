import React from 'react'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { ICardHeroes } from '../interfaces/interfaces'

const CardHeroes = ({ title, subtitle, url }: ICardHeroes) => {
  return (
    <Card>
      <CardMedia component="img" alt={title} height="140" image={url} />
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography color="textSecondary">
          <strong>Poder total:</strong> {subtitle}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CardHeroes
