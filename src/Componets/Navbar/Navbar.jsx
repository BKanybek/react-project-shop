import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import AccountCircle from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Button, Box } from '@mui/material';
import { productContext } from '../../Context/ProductContext';
import { Link, useSearchParams } from 'react-router-dom';
import { Menu } from '@mui/icons-material';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { AiOutlineShopping, AiOutlineUser } from "react-icons/ai";
import { FaRegHeart} from "react-icons/fa";
import Logo from "../Images/Logo/Logo1.PNG"; 


export default function NavBar() {
    const { useAuth, logout, cartLength, getCartLength, getStarLength, starLength } = React.useContext(productContext)
    const [ searchParams, setSearchParams ] = useSearchParams()
    const[ searchVal, setSearchVal ] = React.useState(searchParams.get('q') ? searchParams.get('q') : '')
    const currentUser = useAuth()

    async function handleLogOut(){
      try {
        await logout()
      } catch(error) {
        console.log(error);
      }
    }

    React.useEffect(() => {
        setSearchParams({
            'q': searchVal,
            '_limit': 3,
            '_page': 1
        })
    }, [searchVal])

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
    <div>
    <Navbar style={{maxWidth: '1360px', margin: 'auto', paddingTop: '20px'}} className='navbar' expand="lg">
      <Container fluid>
      <div><img style={{width: '50px', height: '50px'}} src={Logo} alt="" /></div>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
      <Nav className="me-auto my-2 my-lg-0" navbarScroll>
        <NavDropdown title={<span style={{fontWeight: '800', color: 'black', fontSize: '18px'}}>Каталог</span>} id="navbarScrollingDropdown">
      <div style={{display: 'flex', flexDirection: 'column'}}>
          <Link style={{textDecoration: 'none', fontWeight: '400', color: 'black', padding: '0.25rem 1rem'}}  to="/">Посмотреть все</Link>
          <Link style={{textDecoration: 'none', fontWeight: '400', color: 'black', padding: '0.25rem 1rem'}}  to="/add">Кожа</Link>
          <Link style={{textDecoration: 'none', fontWeight: '400', color: 'black', padding: '0.25rem 1rem'}}  to="/">Джинсы</Link>
          <Link style={{textDecoration: 'none', fontWeight: '400', color: 'black', padding: '0.25rem 1rem'}}  to="/add">Топы и Рубашки</Link>
          <Link style={{textDecoration: 'none', fontWeight: '400', color: 'black', padding: '0.25rem 1rem'}}  to="/">Юбки и Платья</Link>
          <Link style={{textDecoration: 'none', fontWeight: '400', color: 'black', padding: '0.25rem 1rem'}}  to="/add">Брюки и шорты</Link>
          <Link style={{textDecoration: 'none', fontWeight: '400', color: 'black', padding: '0.25rem 1rem'}}  to="/add">Деним</Link>
          <Link style={{textDecoration: 'none', fontWeight: '400', color: 'black', padding: '0.25rem 1rem'}}  to="/add">Верхняя одежда</Link>
      </div>  
      </NavDropdown>
      <Link style={{display: 'flex', alignItems: 'center',textDecoration: 'none', fontWeight: '800', color: 'black', marginLeft: '2vw', fontSize: '18px'}} to="/">О брендах</Link>
      <Link style={{display: 'flex', alignItems: 'center',textDecoration: 'none', fontWeight: '800', color: 'black', marginLeft: '2vw', fontSize: '18px'}} to="/">Таблица размеров</Link>
      <Link style={{display: 'flex', alignItems: 'center',textDecoration: 'none', fontWeight: '800', color: 'black', marginLeft: '2vw', fontSize: '18px'}}  to="/">Контакты</Link>
    
      </Nav>
      <Box/> 
          <Box sx={{ display: { md: 'd-flex' } }}>
            <Link style={{marginRight: '20px'}} to='/cart'>
                      <Badge badgeContent={cartLength}>
                        <AiOutlineShopping size='1.5em' color='black' fontSize='20px'/>
                      </Badge> 
            </Link>
            <Link style={{marginRight: '20px'}} to='/favorite'>
                 <Badge badgeContent={starLength}>
                    <FaRegHeart size='1.2em' color='black' fontSize='20px'/>
                 </Badge>
            </Link>
            <Link style={{marginRight: '20px'}} to='/'>
                <AiOutlineUser size='1.2em' color='black' fontSize='20px'/>
            </Link>
            </Box>
            {/* {renderMobileMenu}   */}
            {/* {renderMenu}    */}
</Navbar.Collapse>
</Container>
</Navbar>
</div>
  );
}