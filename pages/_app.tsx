import '../styles/globals.css'
import '../components/molecules/ContentView.scss'
import type { AppProps } from 'next/app'
import { withGlobalServices } from '../lib/hoc/withGlobalServices';
import { withGlobalContext } from '../lib/hoc/withGlobalContext';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

const AppWithServices = withGlobalServices(MyApp);
const AppWithGlobalContext = withGlobalContext(AppWithServices);

export default AppWithGlobalContext;
