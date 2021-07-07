import Layout from './components/Layout'
import '../styles/globals.css'
import DataContext from './DataContext'
import Dashboard from './Dashboard'

function MyApp({ Component, pageProps }) {
  return (
    <DataContext>
      <Layout />
      {/* <Dashboard /> */}
      {/* <div> */}
      <Component {...pageProps} />
      {/* </div> */}
    </DataContext>
  )
}

export default MyApp
