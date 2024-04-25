import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import AppBarMenu from '@/components/AppBarMenu';

const MyAppBar = () =>
<Box sx={{ flexGrow: 1 }}>
  <AppBar position="static">
    <Toolbar>
      <AppBarMenu />
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Simple webapp w/ basic social
      </Typography>
      <Button color="inherit">Login</Button>
    </Toolbar>
  </AppBar>
</Box>

export default MyAppBar;