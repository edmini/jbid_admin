import '../styles/globals.css'
import DataContext from './DataContext'
import Dashboard from './Dashboard'

function MyApp({ Component, pageProps }) {
  return (
    <DataContext>
      <Dashboard />
      <Component {...pageProps} />)
    </DataContext>
  )
}

export default MyApp
