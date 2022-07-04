import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import AccountCircle from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Button, Box } from '@mui/material';
import { productContext } from '../../Context/ProductContext';
import { Link } from 'react-router-dom';
import { Menu } from '@mui/icons-material';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { AiOutlineShopping, AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import Logo from "../Images/Logo/03.png.png";  
import Search from '../Search/Search';
import './Navbar.css'


export default function NavBar() {
    const { useAuth, logout, cartLength, getCartLength, getStarLength, starLength } = React.useContext(productContext)

    const currentUser = useAuth()

    async function handleLogOut(){
      try {
        await logout()
      } catch(error) {
        console.log(error);
      }
    }

    React.useEffect(() => {
      getStarLength()
  }, [])

    React.useEffect(() => {
      getCartLength()
    }, [])

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
        
      <Link  style={{textDecoration: 'none'}} to={!currentUser ? '/login' : '#' }>
        <MenuItem disabled={currentUser ? true : false}  onClick={handleMenuClose}>Login</MenuItem>
      </Link>
        
      <Link style={{textDecoration: 'none'}} to={!currentUser ? '/register' : '#'}>
        <MenuItem  disabled={currentUser ? true : false} onClick={handleMenuClose}>Register</MenuItem>
      </Link>
      {currentUser ? (
                      <Button variant='success' disabled={!currentUser} onClick={handleLogOut}>Выйти</Button>
                      ) : null
                    }
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    
    >
        <Link to='/cart' style={{color: 'white'}}>
        <IconButton sx={{color: 'black'}} color="inherit">
            <Badge badgeContent={cartLength} color="secondary">
            
            </Badge>
        </IconButton>
        </Link>

        <Link to='/favorite' style={{color: 'red'}}>
 
           <IconButton color='inherit'>
                <Badge badgeContent={starLength} color="secondary">
                    <FavoriteIcon/>
                </Badge>
            </IconButton>
        </Link>

      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  
  return (
    <div className='navbar-wrapper'>
    <Navbar style={{maxWidth: '1300px', margin: 'auto', paddingTop: '20px'}} className='navbar' expand="lg">
    <img className='img-logo' src={Logo} alt="" />
    <Container className='container-test' style={{margin: 'auto'}}>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav style={{display: 'flex', justifyContent: 'space-between'}} navbarScroll>
          <NavDropdown title={<span style={{fontWeight: '500', color: 'black', fontSize: '18px'}}>Каталог</span>} id="navbarScrollingDropdown">
            <div className='link-wrapper' style={{width: 'auto', display: 'flex', flexDirection: 'column'}}>
              <Link to="/list">Посмотреть все</Link>
              <Link to="/add">Кожа</Link>
              <Link to="/">Джинсы</Link>
              <Link to="/add">Топы и Рубашки</Link>
              <Link to="/">Юбки и Платья</Link>
              <Link to="/add">Брюки и шорты</Link>
              <Link to="/add">Деним</Link>
              <Link to="/add">Верхняя одежда</Link>
            </div>  
          </NavDropdown>
          <Link to="/">О брендe</Link>
          <Link to="/">Таблица размеров</Link>
          <Link to="/">Контакты</Link>
        </Nav>     
          {/* {renderMobileMenu} 
            {renderMenu}    */}
        </Navbar.Collapse>
      
    </Container>
    <Box className='icon-box'>
          <Search/>
          <Link to='/cart'>
            <Badge badgeContent={cartLength}>
              <AiOutlineShopping/>
            </Badge> 
          </Link>
          <Link to='/favorite'>
            <Badge badgeContent={starLength}>
              <AiOutlineHeart/>
            </Badge>
          </Link>
          <Link  to='/'>
            <AiOutlineUser/>
          </Link>
        </Box>
    </Navbar>
  </div>
  );
}