import * as React from 'react';
import PropTypes from 'prop-types';
// import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styled from 'styled-components'

import RenderPlaylists from '../components/common/RenderPlaylists'
import RenderAlbums from '../components/common/RenderAlbums'
import RenderArtists from '../components/common/RenderArtists'

import {Container} from '../styles/utils'

const LikedSongsJumbotronWrapper = styled.div`
background: #181818;
border-radius: 4px;
flex: 1;
isolation: isolate;
padding: 20px;
position: relative;
transition: background-color .3s ease;
width: 100%;
color: #fff;
font-size: 16px;
height: inherit;
line-height: 24px;
background: linear-gradient(149.46deg,#450af5,#8e8ee5 99.16%);
margin-right:1.6%;
margin-bottom:20px;
cursor:pointer;
display:flex;
flex-direction:column;
justify-content:flex-end
`

const JumbotronSongsListWrapper = styled.div`
margin-bottom: 12px;
max-height: 130px;
overflow: hidden;
text-overflow: ellipsis;
white-space: normal;
width: 100%;
`

const JumbotronBottomHeaderWrapper = styled.div`
min-height: 62px;
`

const JumbotronLabelWrapper = styled.div`
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
font-size: 32px;
font-weight: 700;
letter-spacing: -.04em;
line-height: 36px;
text-transform: none;
`

const JumbotronTrackNumberWrapper = styled.div`
margin-top: 4px;
overflow: hidden;
text-overflow: ellipsis;
white-space: normal;
font-weight: 400;
letter-spacing: normal;
text-transform: none;
color: #fff;
font-size: 16px;
line-height: 24px;
text-transform: lowercase;
`

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <Container>
      <AppBar position="static" style = {{ background:'transparent', boxShadow:'none' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          style = {{
              paddingBottom:24,
              paddingTop:10,
          }}
        >
          <Tab label="Playlists"
               {...a11yProps(0)}
               style = {{
                   fontWeight:700
               }}
               />
          <Tab label="Artists"
               {...a11yProps(1)}
               style = {{
                   fontWeight:700
               }}
               />
          <Tab label="Albums"
               {...a11yProps(2)}
               style = {{
                   fontWeight:700
               }}
               />
        </Tabs>
      </AppBar>

        <TabPanel value={value} index={0} dir={theme.direction} >
                <div className = 'd-flex flex-wrap'>

                <LikedSongsJumbotronWrapper>

                        <JumbotronSongsListWrapper>
                        <div className="Vy8l4ML1F74SXYj0mvUy"><span><span className="lL8CmMTAVCz0cStJvtgQ"></span><span dir="auto">AUDREY NUNA</span><span dir="auto" className="lL8CmMTAVCz0cStJvtgQ">damn Right Pt. 2</span></span><span><span className="lL8CmMTAVCz0cStJvtgQ"> • </span><span dir="auto">AUDREY NUNA</span><span dir="auto" className="lL8CmMTAVCz0cStJvtgQ">Clocked Out!</span></span><span><span className="lL8CmMTAVCz0cStJvtgQ"> • </span><span dir="auto">BIA</span><span dir="auto" className="lL8CmMTAVCz0cStJvtgQ">WHOLE LOTTA MONEY (feat. Nicki Minaj) - Remix</span></span><span><span className="lL8CmMTAVCz0cStJvtgQ"> • </span><span dir="auto">Snow Patrol</span><span dir="auto" className="lL8CmMTAVCz0cStJvtgQ">Chasing Cars</span></span><span><span className="lL8CmMTAVCz0cStJvtgQ"> • </span><span dir="auto">Nea</span><span dir="auto" className="lL8CmMTAVCz0cStJvtgQ">Some Say</span></span><span><span className="lL8CmMTAVCz0cStJvtgQ"> • </span><span dir="auto">JS x YD</span><span dir="auto" className="lL8CmMTAVCz0cStJvtgQ">Drunk and Confused 2.0</span></span><span><span className="lL8CmMTAVCz0cStJvtgQ"> • </span><span dir="auto">Offica</span><span dir="auto" className="lL8CmMTAVCz0cStJvtgQ">Bluebird</span></span></div>
                        </JumbotronSongsListWrapper>

                        <JumbotronBottomHeaderWrapper>

                                <JumbotronLabelWrapper>
Liked Songs
                                </JumbotronLabelWrapper>

                                <JumbotronTrackNumberWrapper>
58 liked songs
                                </JumbotronTrackNumberWrapper>

                        </JumbotronBottomHeaderWrapper>


                </LikedSongsJumbotronWrapper>
                
                <RenderPlaylists/>
                </div>
        </TabPanel>

        <TabPanel value={value} index={1} dir={theme.direction} >
                <div className = 'd-flex flex-wrap'>
                <RenderArtists/>
                </div>
        </TabPanel>

        <TabPanel value={value} index={2} dir={theme.direction} >
                <div className = 'd-flex flex-wrap'>
                <RenderAlbums/>
                </div>
        </TabPanel>
        
    </Container>
  );
}
