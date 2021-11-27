import * as React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useMediaQuery } from "@mui/material";
import styled from "styled-components";
import { getMediaCardPlaceholders } from "../utils";
import { Container } from "../styles/utils";

const LikedSongsJumbotronWrapper = styled.div`
  border-radius: 4px;
  padding: 20px;
  position: relative;
  transition: background-color 0.3s ease;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "40%")};
  color: #fff;
  font-size: 16px;
  line-height: 24px;
  background: linear-gradient(149.46deg, #450af5, #8e8ee5 99.16%);
  margin-bottom: 20px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const JumbotronSongsListWrapper = styled.div`
  margin-bottom: 12px;
  font-size: 13px;
  max-height: 130px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  width: 100%;
`;

const JumbotronBottomHeaderWrapper = styled.div`
  min-height: 62px;
`;

const JumbotronLabelWrapper = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 32px;
  font-weight: 700;
  letter-spacing: -0.04em;
  line-height: 36px;
  text-transform: none;
`;

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
`;

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
          {children}
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

export default function Library() {
  const theme = useTheme();
  const maxWidth890px = useMediaQuery("(max-width: 890px)");
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container className = "content-wrapper" >
      <TabBar value={value} handleChange={handleChange} />

      <TabPanel value={value} index={0} dir={theme.direction}>
        <Box component="div" sx={{ display: "flex", flexWrap: "wrap", gap: 2, justifyContent:'space-between', alignItems:'felx-start' }}>
          <LikedSongsJumbotronWrapper fullWidth={maxWidth890px}>

            <JumbotronSongsListWrapper>
              <LikedSongJumbotronItem
                artist={"AUDREY NUNA"}
                title={"Clocked Out!"}
              />
              <LikedSongJumbotronItem
                artist={"BIA"}
                title={"WHOLE LOTTA MONEY (feat. Nicki Minaj) - Remix"}
              />
              <LikedSongJumbotronItem
                artist={"Snow Patrol"}
                title={"Chasing Cars"}
              />
              <LikedSongJumbotronItem
                artist={"AUDREY NUNA"}
                title={"Clocked Out!"}
              />
              <LikedSongJumbotronItem
                artist={"BIA"}
                title={"WHOLE LOTTA MONEY (feat. Nicki Minaj) - Remix"}
              />
              <LikedSongJumbotronItem
                artist={"Snow Patrol"}
                title={"Chasing Cars"}
              />
            </JumbotronSongsListWrapper>

            <JumbotronBottomHeaderWrapper>
              <JumbotronLabelWrapper>Liked Songs</JumbotronLabelWrapper>

              <JumbotronTrackNumberWrapper>
                58 liked songs
              </JumbotronTrackNumberWrapper>
            </JumbotronBottomHeaderWrapper>
          </LikedSongsJumbotronWrapper>

         {getMediaCardPlaceholders(20)}

        </Box>
      </TabPanel>

      <TabPanel value={value} index={1} dir={theme.direction}>
         <Box
              component="div"
              sx={{ display: 'flex', flexWrap:'wrap', gap: 2 , justifyContent:'space-between'}}
            > 
          {getMediaCardPlaceholders(20)}

        </Box>
      </TabPanel>

      <TabPanel value={value} index={2} dir={theme.direction}>
          <Box
              component="div"
              sx={{ display: 'flex', flexWrap:'wrap', gap: 2, justifyContent:'space-between' }}
            > 
          {getMediaCardPlaceholders(20)}

        </Box>
      </TabPanel>
    </Container>
  );
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export const TabBar = (props) => {
  return (
    <AppBar
      position="static"
      style={{ background: "transparent", boxShadow: "none" }}
    >
      <Tabs
        value={props.value}
        onChange={props.handleChange}
        indicatorColor="secondary"
        textColor="inherit"
        style={{
          paddingBottom: 24,
          paddingTop: 10,
        }}
      >
        <Tab
          label="Playlists"
          {...a11yProps(0)}
          style={{
            fontWeight: 700,
            color:'#fff'
          }}
        />
        <Tab
          label="Artists"
          {...a11yProps(1)}
          style={{
            fontWeight: 700,
            color:'#fff'
          }}
        />
        <Tab
          label="Albums"
          {...a11yProps(2)}
          style={{
            fontWeight: 700,
            color:'#fff'
          }}
        />
      </Tabs>
    </AppBar>
  );
};

export const LikedSongJumbotronItem = ({ artist, title }) => {
  return (
    <span>
      <span className="me-1"> {artist} </span>
      <span className="secondary-text me-1"> {title} </span>
      <span className="me-1"> &bull; </span>
    </span>
  );
};
