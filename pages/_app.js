import '../styles/globals.css'
import Player from '../components/player/Player'
import { store } from '../state/store'
import { Provider } from 'react-redux'
import Layout from '../components/Layout'


function MyApp({ Component, pageProps }) {
  return (
     
    <Provider store={store}>
      <Layout>
          <Component {...pageProps} />
          {/* <Player/> */}
       </Layout>
    </Provider>

  )
}

export default MyApp


