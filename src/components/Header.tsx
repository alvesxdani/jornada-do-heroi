import React, { useState } from 'react'
import { Montserrat } from 'next/font/google'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: '700',
})

const Header = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  }

  const handleMenuClose = () => {
    setAnchorEl(null);
  }

  return (
    <>
    <AppBar position="static" className='bg-black'>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuClick}
            className='mr-2'
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <Link href="/">
            <MenuItem onClick={handleMenuClose}>Início</MenuItem>
            </Link>
            <Link href="/batalha">
            <MenuItem onClick={handleMenuClose}>Batalha</MenuItem>
            </Link>
          </Menu>

          <Typography variant="h6" className={montserrat.className}>Get Heroes</Typography>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header
