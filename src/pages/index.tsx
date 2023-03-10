import Head from 'next/head';
import { Inter } from '@next/font/google';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const router = useRouter();
  useEffect(() => {router.push("/home");}, []);
  return (
    <>
      <Head>
        <title>Movie app</title>
        <meta content="movie app" name="description" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link href="/favicon.ico" rel="icon" />
      </Head>
    </>
  );
}
