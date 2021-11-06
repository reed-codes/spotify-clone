import '../styles/globals.css'
import { store } from '../state/store'
import { Provider } from 'react-redux'
import Layout from '../components/Layout'
import RouterIdicator from './RouterIdicator'


function MyApp({ Component, pageProps }) {
  return (
     
    <Provider store={store}>
          <RouterIdicator/>
      <Layout>
          <Component {...pageProps} />
       </Layout>
    </Provider>

  )
}

export default MyApp


