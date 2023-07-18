import Head from 'next/head';

export default function Seo({ title = 'Hano' } = props) {
  const output = title + "'s First Next Project";

  return (
    <Head>
      <title>{output}</title>
    </Head>
  );
}
