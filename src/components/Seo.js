import Head from 'next/head';
import NavBar from './NavBar/NavBar';

export default function Seo({ title = 'Hano' } = props) {
  return (
    <Head>
      <title>{title}'s First Next</title>
    </Head>
  );
}
