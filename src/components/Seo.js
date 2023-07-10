import Head from 'next/head';

export default function Seo({ title = 'Hano' } = props) {
  return (
    <Head>
      <title>{title}'s First Next</title>
    </Head>
  );
}
