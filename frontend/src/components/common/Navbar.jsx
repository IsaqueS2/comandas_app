import { AppBar, Toolbar, Typography, Button, Box, IconButton, Tooltip, Avatar, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, Menu, MenuItem } from '@mui/material';
import { Dashboard, People, Group, RestaurantMenu, Receipt, PointOfSale, Logout, AccountCircle, Menu as MenuIcon, Badge as BadgeIcon, Fingerprint as FingerprintIcon, Settings as SettingsIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../context/AuthContext";
import { useState } from 'react';

const Navbar = () => {
  // useNavigate é um hook do React Router que permite programaticamente navegar entre rotas
  const navigate = useNavigate();
  // useAuth é um hook personalizado que fornece acesso ao contexto de autenticação
  // logout é uma função que realiza o logout do usuário
  // isAuthenticated é um booleano que indica se o usuário está autenticado ou não
  const { isAuthenticated, logout, user } = useAuth();
  // Estado para controlar a abertura do drawer mobile
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  // Estado para o menu do usuário
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const formatCPF = (cpf) => {
    if (!cpf) return 'N/A';
    const cleaned = ('' + cpf).replace(/\D/g, '');
    if (cleaned.length !== 11) return cpf;
    return cleaned.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  };

  const handleLogout = () => {
    logout();
  };

  const handleDrawerToggle = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  // Itens do menu com ícones e rotas
  const menuItems = [
    { label: 'Dashboard', icon: <Dashboard />, path: '/home' },
    { label: 'Funcionários', icon: <People />, path: '/funcionarios' },
    { label: 'Clientes', icon: <Group />, path: '/clientes' },
    { label: 'Produtos', icon: <RestaurantMenu />, path: '/produtos' },
    { label: 'Comandas', icon: <Receipt />, path: '/comandas' },
    { label: 'Caixa', icon: <PointOfSale />, path: '/caixa' },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'left', width: 250 }}>
      <Box sx={{ p: 2, borderBottom: '1px solid rgba(255,255,255,0.12)' }}>
        <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 600 }}>
          Menu
        </Typography>
      </Box>
      <List>
        {menuItems.map((item) => (
          <ListItem
            key={item.path}
            onClick={() => navigate(item.path)}
            sx={{ '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.08)' } }}
          >
            <ListItemIcon sx={{ color: 'inherit' }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem
          onClick={handleLogout}
          sx={{ '&:hover': { backgroundColor: 'rgba(239, 68, 68, 0.08)' } }}
        >
          <ListItemIcon sx={{ color: 'error.main' }}>
            <Logout />
          </ListItemIcon>
          <ListItemText primary="Sair" sx={{ color: 'error.main' }} />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar position="sticky" elevation={2}>
      <Toolbar sx={{ minHeight: 64, px: { xs: 1, sm: 2 } }}>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <Typography
            variant="h5"
            component="div"
            sx={{
              fontWeight: 700,
              background: 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              fontSize: { xs: '1.2rem', sm: '1.5rem' },
            }}
          >
            <Box component="span" sx={{ display: { xs: 'none', sm: 'inline' } }}>
              Comandas do Zé
            </Box>
            <Box component="span" sx={{ display: { xs: 'inline', sm: 'none' } }}>
              Zé
            </Box>
          </Typography>
        </Box>

        {isAuthenticated && (
          <>
            <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center', gap: 1 }}>
              {menuItems.map((item) => (
                <Tooltip key={item.path} title={item.label} arrow>
                  <Button
                    color="inherit"
                    onClick={() => navigate(item.path)}
                    sx={{
                      minWidth: 'auto',
                      px: 1.5,
                      py: 1,
                      borderRadius: 2,
                      alignItems: 'center',
                      gap: 0.5,
                      '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' },
                    }}
                  >
                    {item.icon}
                    <Typography variant="body2" sx={{ ml: 0.5 }}>
                      {item.label}
                    </Typography>
                  </Button>
                </Tooltip>
              ))}

              <Tooltip title="Perfil" arrow>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, ml: 1 }}>
                  {user?.nome ? (
                    <Avatar sx={{ width: 36, height: 36, bgcolor: 'primary.dark', color: 'white', fontWeight: 'bold' }}>
                      {user.nome.charAt(0).toUpperCase()}
                    </Avatar>
                  ) : (
                    <Avatar sx={{ width: 36, height: 36, bgcolor: 'primary.dark' }}>
                      <AccountCircle />
                    </Avatar>
                  )}
                </IconButton>
              </Tooltip>

              <Tooltip title="Sair" arrow>
                <IconButton
                  color="inherit"
                  onClick={handleLogout}
                  sx={{ '&:hover': { backgroundColor: 'rgba(239, 68, 68, 0.1)' } }}
                >
                  <Logout />
                </IconButton>
              </Tooltip>
            </Box>

            <Box sx={{ display: { xs: 'flex', sm: 'none' }, alignItems: 'center', gap: 1 }}>
              <Tooltip title="Perfil" arrow>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, mr: 1 }}>
                  {user?.nome ? (
                    <Avatar sx={{ width: 36, height: 36, bgcolor: 'primary.dark', color: 'white', fontWeight: 'bold' }}>
                      {user.nome.charAt(0).toUpperCase()}
                    </Avatar>
                  ) : (
                    <Avatar sx={{ width: 36, height: 36, bgcolor: 'primary.dark' }}>
                      <AccountCircle />
                    </Avatar>
                  )}
                </IconButton>
              </Tooltip>

              <IconButton
                color="inherit"
                onClick={handleDrawerToggle}
                sx={{ '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' } }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </>
        )}
      </Toolbar>

      <Drawer
        variant="temporary"
        open={mobileDrawerOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 },
        }}
      >
        {drawer}
      </Drawer>

      <Menu
        sx={{ 
          mt: '45px', 
          '& .MuiPaper-root': { 
            borderRadius: 2, 
            minWidth: 260, 
            boxShadow: '0px 4px 20px rgba(0,0,0,0.1)', 
          } 
        }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <Box sx={{ px: 3, py: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            <Avatar sx={{ width: 50, height: 50, bgcolor: 'primary.main', fontSize: '1.5rem', fontWeight: 'bold' }}>
              {user?.nome ? user.nome.charAt(0).toUpperCase() : '?'}
            </Avatar>
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, lineHeight: 1.2 }}>
                {user?.nome || 'Usuário'}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ textTransform: 'capitalize', mt: 0.5 }}>
                {user?.cargo || 'Funcionário'}
              </Typography>
            </Box>
          </Box>
          
          <Divider sx={{ my: 1.5 }} />
          
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <BadgeIcon sx={{ color: 'action.active', mr: 1.5, fontSize: 20 }} />
              <Box>
                <Typography variant="caption" color="text.secondary" sx={{ display: 'block', lineHeight: 1.2 }}>Matrícula</Typography>
                <Typography variant="body2" sx={{ fontWeight: 500 }}>{user?.matricula || 'N/A'}</Typography>
              </Box>
            </Box>
            
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <FingerprintIcon sx={{ color: 'action.active', mr: 1.5, fontSize: 20 }} />
              <Box>
                <Typography variant="caption" color="text.secondary" sx={{ display: 'block', lineHeight: 1.2 }}>CPF</Typography>
                <Typography variant="body2" sx={{ fontWeight: 500 }}>{formatCPF(user?.cpf)}</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
