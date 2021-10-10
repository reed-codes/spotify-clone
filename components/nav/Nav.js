import React from 'react'
import styled from 'styled-components'
import {Button} from '@material-ui/core';
import HomeIcon from '@mui/icons-material/Home';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import HistoryIcon from '@mui/icons-material/History';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';

import TextField from '@mui/material/TextField';

import Link from 'next/link'


const NavHeader = styled.div`
padding:10px;
width:100%;
background:#111
`

const LogoContainer = styled.div`
height:70px;
width:100%;
background:deeppink;
`

const SeachInputAndIconContainer = styled.div`
width:100%;
height:56px;
background:blue;
display:flex;
`

const SeachInputContainer = styled.div`
flex:1;
height:100%;
background:cyan;
`

const SeachIconContainer = styled.div`
min-width:60px;
width:60px;
height:100%;
background:red;
display:flex;
justify-content:center;
align-items:center
`

const WideScreenRoutesContainer = styled.div`
background:green
`

const MENU_BTN_STYLE = {
        width:'100%', 
        justifyContent:'flex-start', 
        paddingTop:10, 
        paddingBottom:10, 
        borderRadius:0, 
        color: '#fff'
    }

const NAV_ROUTE_BTN_STYLE = {
    width:'100%', 
    justifyContent:'flex-start', 
    paddingTop:10, 
    paddingBottom:10, 
    color: '#fff'
}

const Nav = () => {
    return (
        <>

<NavHeader>
        <LogoContainer>
        </LogoContainer>

        <Button variant="outlined" 
                startIcon={<MenuIcon />} 
               style = {MENU_BTN_STYLE}>
        </Button>

        <SeachInputAndIconContainer>
                <SeachInputContainer>
                    <TextField id="filled-basic" label="Filled" variant="filled" />
                </SeachInputContainer>

                 <SeachIconContainer>

                     <Button style = {{ 
                                        height:'100%',
                                        width:'100%',
                                        minWidth:'unset',
                                        background:'lime',
                                        borderRadius:0
                                        }}>
                        <SearchIcon />
                    </Button>

                </SeachIconContainer>

        </SeachInputAndIconContainer>




        <WideScreenRoutesContainer>

            <Link href = "/">
                    <Button variant="outlined" startIcon={<HomeIcon />}  
                            style = {NAV_ROUTE_BTN_STYLE}>
                            Home
                    </Button>
            </Link>

            <Link href = "/">
                    <Button variant="outlined" startIcon={<HistoryIcon />}  
                            style = {NAV_ROUTE_BTN_STYLE}>
                            Recent plays
                    </Button>
            </Link>

            <Link href = "/">
                    <Button variant="outlined" startIcon={<EqualizerIcon />}  
                            style = {NAV_ROUTE_BTN_STYLE}>
                            Now playing
                    </Button>
            </Link>

            <Link href = "/">
                    <Button variant="outlined" startIcon={<LibraryMusicIcon />}  
                            style = {NAV_ROUTE_BTN_STYLE}>
                            Your library
                    </Button>
            </Link>

        </WideScreenRoutesContainer>
</NavHeader>

        </>
    )
}

export default Nav
