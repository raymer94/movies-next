import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import AppContainer from '@/components/templates/AppContainer/AppContainer';


const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
  cache: new InMemoryCache()
});


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <AppContainer>
        <Component {...pageProps} />
      </AppContainer>
    </ApolloProvider>
  );
};

