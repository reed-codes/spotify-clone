import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default function QuickNavigationBtnGroup() {
  return (
    <>
      <ButtonGroup aria-label="medium button group"
                   size="small"
                   style = {{
                       color:'#fff',
                       background:'rgba(0,0,0,.5)'
                   }}
                   >
         <Button>
             <NavigateBeforeIcon className = "text-white"/>
         </Button>

         <Button>
             <NavigateNextIcon className = "text-white"/>
         </Button>
      </ButtonGroup>
    </>
  );
}
