import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import QuickNavigationBtnGroup from './QuickNavigationBtnGroup'
import styled from 'styled-components'

const AppBarWrapper = styled.div`
position: sticky ;
height:66px;
width: 100%;
top: 0;
left: 0;
right: 0;
z-index:100;
transition: all .5s;
`

export default function ButtonAppBar({appBarOpacity}) {
  return (
      <AppBarWrapper opacity = {appBarOpacity} className = "backdrop-blur">
        <Box sx={{ flexGrow: 1 }}>

        <AppBar position="static"
                style = {{background:'none'}}
                >

            <Toolbar>

                        <Typography variant="h6" 
                                    component="div"
                                    sx={{ flexGrow: 1 }}
                                    className = "d-flex"
                                    >
                            <QuickNavigationBtnGroup/>
                        </Typography>

                        <Button color="inherit">Login</Button>
                        
            </Toolbar>
            
        </AppBar>
        </Box>
    </AppBarWrapper>
  );
}
