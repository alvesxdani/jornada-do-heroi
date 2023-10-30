import React from 'react'
import Typography from '@mui/material/Typography'

import { ITitle } from '../interfaces/interfaces'
import { Lato } from 'next/font/google'

const lato = Lato({
  weight: '700',
  subsets: ['latin'],
})

const Title = ({ type, children }: ITitle) => {
  if (type === 'h1')
    return (
      <Typography variant="h1" className={`text-4xl ${lato.className}`}>
        {children}
      </Typography>
    )
  else if (type === 'h2') return <h2>{children}</h2>
  else if (type === 'h3') return <h3>{children}</h3>
}

export default Title
