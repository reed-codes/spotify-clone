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
const LeftWideScreenNav = styled.nav`
height: 100%;
width:300px;
min-width:300px;
`

const MainContentContainer = styled.main`
height: 100%;
flex:1;
background: rgb(10,10,10);
overflow-y : auto;
position:relative;
transform: translate(0,0);
`


const BackgroundGradientEffect = styled.main`
padding:10px 24px 100px 24px;
background: rgb(10,10,10);
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 60%;
border-radius: 0.3em;
background: #555;
z-index: 2;
box-shadow: -16px -200px 100px -31px rgba(10,10,10) inset;
-webkit-box-shadow: -16px -200px 100px -31px rgba(10,10,10) inset;
-moz-box-shadow: -16px -200px 100px -31px rgba(10,10,10) inset;
filter:brightness(80%);
transition: all .2s; linear
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

            <LeftWideScreenNav>
                    <Nav/>
            </LeftWideScreenNav>

            <MainContentContainer onScroll = {handleMainContentContainerScroll}
                                  id ="main-content-container"
                             >

                            <BackgroundGradientEffect id ="background-gradient-effect"/>
                            <AppBar appBarOpacity = {appBarOpacity}/>
                            <section style = {{padding:'10px 24px 100px 24px' }}>
                                            {children}
                            </section>

            </MainContentContainer>
            
        </MainWrapper>
        </>
    )
}

export default Layout


// High Availability Architecture
// ==============================

// Elastic load balancer
// ==
// What is a load balanver
// - It is a physical or virtual device designed to help you balance the load eg network load accross multiple web servers
// - You can also use it for applications as it doesn necessarily internet facing load balancers but typically they are internet facing and are primaritly used to balance load accross web servers
// - with AWS there are 3 different types
// --Application load balancer
// --Network load balancer
// --Classic load balancer

// Application load balancer
// ==
// - are best suited for load balancing of HTTP and HTTPS traffic
// - They operate at layer 7 [the applicaion layer] and are application aware 
// --eg of you change your language to french on a website , your load balancer is can be made aware of this and go ahead and load balance accross all the franch web servers
// - The are intelligent, and you can create advanced request routing, sending specified requests to specific web servers


// Network load balancers
// ==
// - are best suited for load balancing of TCP traffic where extrem performance is required.
// - Operating at the connection level (layer 4), Network load balancers are capable of handling millions or requests per seconds, while maintaining ultra-low latencies
// - They are usued for extreme performance


// Classic load balancer
// ==
// - Are the legacy Elastic load balancers
// - You can load balance HTTO/HTTPS application and use layer-7 specific features, such as X-Forwarded and sticky session 
// - You can also use strict Layer 4 load balancing for applications that rely purely on the TCP protocol
// - Remember though that it is still not application aware it doesnt do it at layer 7