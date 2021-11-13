import '../styles/globals.css'
import { store } from '../state/store'
import { Provider } from 'react-redux'
import Layout from '../components/Layout'
import RouterIdicator from './RouterIdicator'
import { createTheme, ThemeProvider } from '@mui/material/styles';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={darkTheme}>
    <Provider store={store}>
      <RouterIdicator />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
    </ThemeProvider>
  )
}

export default MyApp


