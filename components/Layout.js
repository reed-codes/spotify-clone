import React, {useState} from 'react'
import Nav from './nav/Nav'
import AppBar from './nav/AppBar'
import styled from 'styled-components'
import Head from './Head'

const MainWrapper = styled.div`
height: 100vh;
width: 100%;
background:#000;
display:flex;
`

const MainContentContainer = styled.main`
height: 100%;
flex:1;
background: #101010;
overflow-y : auto;
position:relative;
transform: translate(0,0);
padding-bottom:130px;
`


const Layout = ({children}) => {
    const [appBarOpacity, setAppBarOpacity] = useState(0);

    const handleMainContentContainerScroll = (event)=>{
          let IS_INTEGER = ( event.target.scrollTop % 1 == 0 )

          if(IS_INTEGER && (event.target.scrollTop <= 100) )
              setAppBarOpacity(event.target.scrollTop/100 + 0.1)
    }
    
    return (
        <>
        <Head/>
        <MainWrapper>

            <Nav/>

            <MainContentContainer onScroll = {handleMainContentContainerScroll}
                                  className = 'main-content-container'
                                  >

                            <AppBar appBarOpacity = {appBarOpacity}/>
                            {children}

            </MainContentContainer>
            
        </MainWrapper>
        </>
    )
}

export default Layout

