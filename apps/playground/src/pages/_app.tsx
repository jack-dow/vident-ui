import type { AppProps } from 'next/app';
import { VidentProvider } from '@vident-ui/styles';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <VidentProvider>
      <Component {...pageProps} />
    </VidentProvider>
  );
}

export default MyApp;
