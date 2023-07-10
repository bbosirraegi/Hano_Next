import Layout from '@/components/Layout';
import NavBar from '@/components/NavBar/NavBar';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <h1>Test</h1>
    </Layout>
  );
}
