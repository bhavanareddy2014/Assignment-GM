import logo from './logo.svg';
import './App.css';
import Dashboard from './Components/Dashboard';
import { AppBar, Toolbar, Typography } from '@mui/material';

function App() {
  return (
    <>
    <AppBar position="static" sx={{ bgcolor: 'white', color: 'black', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
    <Toolbar>
      <Typography variant="h6" component="div">
       <b>1 acre.in</b>
      </Typography>
    </Toolbar>
  </AppBar>
  <Dashboard />
    </>
  );
}

export default App;
