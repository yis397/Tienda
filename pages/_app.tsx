import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { lightTheme } from '../themes';
import { ApolloProvider } from '@apollo/client';
import apollo from '../config/apollo';

function MyApp({ Component, pageProps }: AppProps) {
  
  return (
  <ThemeProvider theme={lightTheme}>
    <ApolloProvider client={apollo}>

    <CssBaseline/>
         <Component  {...pageProps}/>
    </ApolloProvider>
  </ThemeProvider>)
}

export default MyApp
