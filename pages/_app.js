import '../styles/globals.css'
import { store } from '../state/store'
import { Provider } from 'react-redux'
import Layout from '../components/Layout'
import RouterIdicator from './RouterIdicator'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AudioPlayerContextProvider from '../state/context/AudioPlayerContext'
import Slide from '@mui/material/Slide';
import { SnackbarProvider } from 'notistack';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function MyApp({ Component, pageProps }) {
  return (

    <SnackbarProvider
      maxSnack={3}
      preventDuplicate
      autoHideDuration={4500}
      TransitionComponent={Slide}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}>
      <Provider store={store}>
        <AudioPlayerContextProvider>
          <RouterIdicator />
          <ThemeProvider theme={darkTheme}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </AudioPlayerContextProvider>
    </Provider >
    </SnackbarProvider>
  )
}

export default MyApp


