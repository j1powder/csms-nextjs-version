import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import SSRProvider from 'react-bootstrap/SSRProvider';
import Menu from '../components/layout/Menu';
import Footer from '../components/layout/Footer';
import {AuthProvider} from '../hooks/AuthContext';

//theme
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";     
    
//core
import "primereact/resources/primereact.min.css"; 

export default function App({ Component, pageProps }) {
  return <>
  
  <SSRProvider>
  <AuthProvider>
    <Menu/>
    <Component {...pageProps} />
    <Footer/>
    </AuthProvider>
    </SSRProvider>
    </>
}
