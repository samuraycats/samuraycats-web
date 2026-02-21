import { AppBar, Toolbar, Typography, Switch, IconButton, Box } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Link as RouterLink } from 'react-router-dom';

interface NavBarProps {
  darkMode: boolean;
  onToggleTheme: () => void;
}

export default function NavBar({ darkMode, onToggleTheme }: NavBarProps) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          sx={{ flexGrow: 1, color: 'inherit', textDecoration: 'none' }}
        >
          SamurayCats
        </Typography>
        <Typography
          component={RouterLink}
          to="/catalog"
          sx={{ color: 'inherit', textDecoration: 'none', mr: 2 }}
        >
          Catálogo
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton color="inherit" onClick={onToggleTheme}>
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
          <Switch checked={darkMode} onChange={onToggleTheme} color="default" />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
