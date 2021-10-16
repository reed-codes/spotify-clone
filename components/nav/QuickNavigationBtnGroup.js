import {useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useRouter } from 'next/router'

const QUICK_NAV_BTN_STYLES = {
    color:'#fff',
    border:'1px rgb(225, 225, 225, .08) solid'
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
      <ButtonGroup aria-label="medium button group"
                   size="small"
                   style = {{
                       color:'#fff',
                       background:'rgba(0,0,0,.5)',
                       border:'none'
                   }}
                   >
        <Button  style = {QUICK_NAV_BTN_STYLES}
                 onClick = {handlePrevPageClick}
                 >
             <NavigateBeforeIcon
                 className = "text-white"/>
         </Button>

        <Button  style = {QUICK_NAV_BTN_STYLES}
                  onClick = {handleNextPageClick}
                  >
             <NavigateNextIcon
                 className = "text-white"/>
         </Button>
      </ButtonGroup>
    </>
  );
}
