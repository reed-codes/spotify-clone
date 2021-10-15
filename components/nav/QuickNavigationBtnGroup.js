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
                       background:'rgba(0,0,0,.5)',
                       border:'none'
                   }}
                   >
        <Button  style = {{
                            color:'#fff',
                            border:'1px rgb(225, 225, 225, .08) solid'
                            }}>
             <NavigateBeforeIcon
                 className = "text-white"/>
         </Button>

        <Button  style = {{
                            color:'#fff',
                            border:'1px rgb(225, 225, 225, .08) solid'
                            }}>
             <NavigateNextIcon
                 className = "text-white"/>
         </Button>
      </ButtonGroup>
    </>
  );
}
