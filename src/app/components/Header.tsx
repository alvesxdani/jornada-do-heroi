import React from 'react'
import { AppBar } from '@mui/material'
import Container from '@mui/material/Container'
import { Montserrat } from 'next/font/google'
import { Typography } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: '700'
})

const Header = () => {
  return (
  <AppBar className='bg-black p-2' elevation={1}>
    <Container maxWidth="lg">
    <Toolbar disableGutters>
      <Typography variant='h5' fontWeight={700}>
        Get Heroes
      </Typography>
      </Toolbar>
    </Container>
  </AppBar>
  )
}

export default Header
