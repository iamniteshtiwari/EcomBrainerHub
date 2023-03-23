import React from 'react'

import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import { AppBar, Toolbar, IconButton, Typography } from '@material-ui';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useNavigate } from 'react-router-dom';

function Header(props) {
    
    const navigate = useNavigate();
   
  return (
    <AppBar position="static">
    <Toolbar>
      <IconButton edge="start" color="inherit"
      >
        <ShoppingCartIcon  onClick={()=>navigate("/cart")}
        
        
        />
        <Typography>({props.cartLength})</Typography>
      </IconButton>
      <Typography variant="h6" style={{ flexGrow: 1 }}>
        shop
      </Typography>
      <IconButton color="inherit" >
        <div onClick={()=>navigate("/")}>
        
      <ExitToAppIcon  />
      <Typography variant="h6" style={{ flexGrow: 2 }}>
        Logout
      </Typography>
      </div>
      </IconButton>
    </Toolbar>
  </AppBar>
  )
}

export default Header