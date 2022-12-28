import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Copyright from "./components/copyright/Copyright";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <>
    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
      <Box
        container
        sx={{ height: "100vh", backgroundColor: "rgb(26, 32, 39)", display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column' }}
      >
        <Paper elevation={6} sx={{width:'80vw',height:'80vh',backgroundColor:'rgb(18, 18, 18)',display:'flex',flexDirection:'column'}}>
          <Box component="header" sx={{display:'flex',justifyContent:'center',alignItems:'center',height:'2.5rem',width:'100%',margin:'1rem'}}>
            <Header />
          </Box>
          <Box component="main" sx={{width:'100%'}}>
            <Main />
          </Box>
          
        </Paper>
        <Box component="footer" sx={{display:'flex',justifyContent:'center',width:'100%',alignItems:'center'}}>
          <Copyright />
        </Box>
      </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
