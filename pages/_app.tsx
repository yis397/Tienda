import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { lightTheme } from '../themes';
import { ApolloProvider } from '@apollo/client';
import apollo from '../config/apollo';

import {AuthProvider} from '../context/index';

function MyApp({ Component, pageProps }: AppProps) {
  
  return (
  <ThemeProvider theme={lightTheme}>
    <CssBaseline/>
    <ApolloProvider client={apollo}>
     <AuthProvider>
      
         <Component  {...pageProps}/>
      

    </AuthProvider>
    </ApolloProvider>
  </ThemeProvider>)
}

export default MyApp
