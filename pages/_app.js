import '../styles/globals.css'
import Player from '../components/player/Player'
import { store } from '../state/store'
import { Provider } from 'react-redux'


function MyApp({ Component, pageProps }) {
  return (
     
    <Provider store={store}>
       <Component {...pageProps} />
       <Player/>
    </Provider>

  )
}

export default MyApp


