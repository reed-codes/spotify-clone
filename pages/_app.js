import '../styles/globals.css'
import { store } from '../state/store'
import { Provider } from 'react-redux'
import Layout from '../components/Layout'
import RouterIdicator from './RouterIdicator'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AudioPlayerContextProvider from '../state/context/AudioPlayerContext'


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function MyApp({ Component, pageProps }) {
  return (
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
  )
}

export default MyApp


