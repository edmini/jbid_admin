import Layout from './components/Layout'
import '../styles/globals.css'
import DataContext from './DataContext'
import Dashboard from './Dashboard'

function MyApp({ Component, pageProps }) {
  return (
    <DataContext>
      <Layout />
      {/* <Dashboard /> */}
      <Component {...pageProps} />
    </DataContext>
  )
}

export default MyApp
