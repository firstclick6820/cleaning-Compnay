import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/system';


  
  
  import { styled } from '@mui/material/styles';
  


const pages = ['Booking', 'Account']

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);



  // Handle opening the navbar menu
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  // handle closing the nav bar menu
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };





  return (
    <WrapperContainer>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            sx={{display: { xs: 'none', md: 'block',mr: 2,
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',}}}>
            <Link to="/"
                  style={{
                    textDecoration: 'none',
                    color: 'inherit', }}>
                    CleaningCompany.AE
            </Link>
          </Typography>

          {/* Small Devices */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }}}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'center',
                horizontal: 'left',}}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left'}}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }}}>
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link style={{textDecoration: "none", color: "white"}} to={(page === "Home") ? "/" : page}>{page}</Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

            {/* Large Devices */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent:"end"}}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}>
                <Link
                    to={(page === "Home") ? "/": page} 
                    style={{ my: 2, color: 'white', display: 'block', textDecoration: 'none' }}>{page}</Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </WrapperContainer>
  );
}
export default ResponsiveAppBar;




const WrapperContainer = styled(Stack)({
  backgroundImage: 'linear-gradient(to top, #870000, #190a05)',
  paddingBottom: '1rem',
  paddingTop:'1rem',
  color: 'white',
})