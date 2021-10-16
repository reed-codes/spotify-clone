import React from 'react'
import styled from 'styled-components'
import EditorsPickCard from "./EditorsPickCard";

const BackgroundAccentColorGradientEffect = styled.main`
padding:10px 24px 100px 24px;
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 60%;
background: #555;
z-index: 0;
box-shadow: -16px -200px 100px -31px #101010 inset;
-webkit-box-shadow: -16px -200px 100px -31px #101010 inset;
-moz-box-shadow: -16px -200px 100px -31px #101010 inset;
transition: all 1s; linear
`

const EditorsPickGrid = () => {
    return (
      <>

      <BackgroundAccentColorGradientEffect id ="background-gradient-effect"/>
      
        <div className = "d-flex flex-wrap">
        <EditorsPickCard cover={"./cover.jpg"} />
        <EditorsPickCard cover={"./demo-img-1.jpg"} />
        <EditorsPickCard cover={"./cover-2.jpg"} />
        <EditorsPickCard cover={"./cover-3.jpg"} />
        <EditorsPickCard cover={"./cover-4.jpg"} />
        <EditorsPickCard cover={"./cover-5.jpg"} />
      </div>

      </>
    )
}

export default EditorsPickGrid
