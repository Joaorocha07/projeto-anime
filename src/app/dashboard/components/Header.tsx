import React, { useState } from 'react'

import {
  Box,
  Menu,
  List,
  AppBar,
  Button,
  Dialog,
  Avatar,
  Drawer,
  Divider,
  Toolbar,
  useTheme,
  ListItem,
  MenuItem,
  InputBase,
  IconButton,
  Typography,
  DialogTitle,
  ListItemIcon,
  ListItemText,
  DialogActions,
  useMediaQuery
} from '@mui/material'

import { useRouter } from 'next/navigation'

import Image from 'next/image'
import Cookies from 'js-cookie'
import ProfileModal from './ProfileModal'
import MenuIcon from '@mui/icons-material/Menu'
import HomeIcon from '@mui/icons-material/Home'
import MovieIcon from '@mui/icons-material/Movie'
import SearchIcon from '@mui/icons-material/Search'
import CreateIcon from '@mui/icons-material/Create'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import Logo from '../../../../public/images/logo-branco.webp'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

const navItems = [
  { label: 'Home', icon: <HomeIcon />, id: 'home' },
  { label: 'Animes', icon: <MovieIcon />, id: 'animes' }
]

export default function Header (): JSX.Element {
  const theme = useTheme()
  const router = useRouter()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const [drawerOpen, setDrawerOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [openLogoutModal, setOpenLogoutModal] = useState(false)
  const [profileModalOpen, setProfileModalOpen] = useState(false)
  const [avatarMenuAnchor, setAvatarMenuAnchor] = useState<null | HTMLElement>(null)

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open)
  }

  const handleSearchToggle = (): void => {
    setSearchOpen((prev) => !prev)
  }

  const handleAvatarClick = (event: React.MouseEvent<HTMLElement>): void => {
    setAvatarMenuAnchor(event.currentTarget)
  }

  const handleCloseAvatarMenu = (): void => {
    setAvatarMenuAnchor(null)
  }

  const handleOpenProfileModal = (): void => {
    setProfileModalOpen(true)
    handleCloseAvatarMenu()
  }

  const handleCloseProfileModal = (): void => {
    setProfileModalOpen(false)
  }

  const handleOpenLogoutModal = (): void => {
    setOpenLogoutModal(true)
  }

  const handleCloseLogoutModal = (): void => {
    setOpenLogoutModal(false)
  }

  const handleLogout = (): void => {
    router.push('/login')
    Cookies.remove('jwt')
    handleCloseLogoutModal()
    handleCloseAvatarMenu()
  }

  return (
    <AppBar position="static" sx={{ backgroundColor: '#0d0d0d', display: 'flex' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Image
            src={Logo}
            style={{ maxWidth: '100%', width: '200px', height: 'auto', marginRight: 40, marginTop: 8 }}
            alt="logo"
          />

          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 3 }}>
              {navItems.map((item) => (
                <Box
                  key={item.id}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    cursor: 'pointer',
                    color: '#fff',
                    '&:hover': {
                      color: '#9b59b6'
                    }
                  }}
                >
                  <IconButton color="inherit">
                    {item.icon}
                  </IconButton>
                  <Typography variant="body1">{item.label}</Typography>
                </Box>
              ))}
            </Box>
          )}
        </Box>

        {isMobile ? (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton color="inherit" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          </Box>
        ) : (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: searchOpen ? 'transparent' : 'inherit',
                border: searchOpen ? '1px solid #fff' : 'none',
                borderRadius: '4px',
                transition: 'width 0.3s ease, background-color 0.3s ease',
                width: searchOpen ? '300px' : 'auto',
                overflow: 'hidden',
                padding: searchOpen ? '4px 8px' : 0
              }}
            >
              <IconButton color="inherit" onClick={handleSearchToggle} sx={{ padding: searchOpen ? 0 : '8px' }}>
                <SearchIcon />
              </IconButton>
              {searchOpen && (
                <InputBase
                  placeholder="Pesquise seus animes favoritos"
                  sx={{
                    ml: 1,
                    color: '#fff',
                    backgroundColor: 'transparent',
                    width: '100%',
                    height: '10px'
                  }}
                />
              )}
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Avatar
                alt="User Profile"
                src="/path/to/profile.jpg"
                sx={{
                  ml: 2,
                  cursor: 'pointer',
                  width: 40,
                  height: 40,
                  borderRadius: '8px'
                }}
                onClick={handleAvatarClick}
              />
              <IconButton onClick={handleAvatarClick} sx={{ p: 0 }}>
                <ArrowDropDownIcon sx={{ color: '#fff' }} />
              </IconButton>
              <Menu
                anchorEl={avatarMenuAnchor}
                open={Boolean(avatarMenuAnchor)}
                onClose={handleCloseAvatarMenu}
                PaperProps={{
                  sx: {
                    backgroundColor: '#fff',
                    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.2)'
                  }
                }}
              >
                <MenuItem onClick={handleOpenProfileModal}>
                  <ListItemIcon>
                    <CreateIcon sx={{ color: 'black' }} />
                  </ListItemIcon>
                  <ListItemText primary="Ver meu perfil" />
                </MenuItem>
                <MenuItem onClick={handleOpenLogoutModal} sx={{ borderTop: '1px solid #e0e0e0' }}>
                  <ListItemIcon>
                    <ExitToAppIcon sx={{ color: 'primary.main' }} />
                  </ListItemIcon>
                  <ListItemText primary="Sair" />
                </MenuItem>
              </Menu>
            </Box>
          </Box>
        )}
      </Toolbar>

      <Dialog open={openLogoutModal} onClose={handleCloseLogoutModal}>
        <DialogTitle>Tem certeza que deseja sair?</DialogTitle>
        <DialogActions>
          <Button onClick={handleCloseLogoutModal} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleLogout} color="primary">
            Sair
          </Button>
        </DialogActions>
      </Dialog>

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 250,
            height: '100%',
            backgroundColor: '#0d0d0d',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: '20px'
          }}
          role="presentation"
          onClick={toggleDrawer(false)}
        >

          <Avatar alt="User Profile" src="/path/to/profile.jpg" sx={{ width: 100, height: 100, mb: 2 }} />
          <Divider sx={{ width: '80%', backgroundColor: '#fff', mb: 2 }} />
          <List sx={{ width: '100%' }}>
            {navItems.map((item) => (
              <ListItem button key={item.id}>
                <ListItemIcon sx={{ color: '#FFF' }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.label} primaryTypographyProps={{ color: '#FFF' }} />
              </ListItem>
            ))}
          </List>
          <Button
            variant="contained"
            color="primary"
            startIcon={<ExitToAppIcon />}
            sx={{ marginTop: 'auto', mb: 2, width: '90%' }}
            onClick={handleOpenLogoutModal}
          >
            Sair
          </Button>
        </Box>
      </Drawer>
      <ProfileModal open={profileModalOpen} onClose={handleCloseProfileModal} />
    </AppBar>
  )
}
