import {useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useRouter } from 'next/router'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box';


const QUICK_NAV_BTN_STYLES = {
    color:'#fff',
    border:'1px rgb(225, 225, 225, .07) solid',
    borderRadius:'50%',
    background:'rgba(0,0,0,.5)',
    height:'32px',
    width:'32px',
    marginRight:"16px"
}

export default function QuickNavigationBtnGroup() {
  const [requestingNextPage, setRequestingNextPage] = useState(false)
  const router = useRouter()
  
  const handlePrevPageClick = ()=> router.back()
  const handleNextPageClick = ()=> setRequestingNextPage(true)

  useEffect(()=>{
        if(requestingNextPage)
        {
             window.history.forward();
             setRequestingNextPage(false)
        }
  },[requestingNextPage])

  return (
    <>
      {/* <ButtonGroup aria-label="medium button group"
                   size="small"
                   style = {{
                       color:'#fff',
                       background:'rgba(0,0,0,.5)',
                       border:'none'
                   }}
                   > */}
                   <Box >
        <IconButton  style = {QUICK_NAV_BTN_STYLES}
                 onClick = {handlePrevPageClick}
                 >
             <NavigateBeforeIcon
                 className = "text-white"/>
         </IconButton>

        <IconButton  style = {QUICK_NAV_BTN_STYLES}
                  onClick = {handleNextPageClick}
                  >
             <NavigateNextIcon
                 className = "text-white"/>
         </IconButton>
      </Box>
    </>
  );
}
