import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Layout = () => {
  return (
    <>
      <Head>
        <title>NextAppShop</title>
        <meta name="description" content="..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={'flex min-h-screen flex-col justify-between'}>
        <header className={'px-4'}>
          <nav className={'flex h-12 justify-between items-center shadow-md'}>
            <Link href="/">
              <a className={'text-lg font-bold'}>Shop</a>
            </Link>
            <div className={'p-1'}>
              <Link href="/cart">
                <a className={'text-lg font-bold'}>Cart</a>
              </Link>
              <Link href="/login">
                <a className={'text-lg font-bold ml-10'}>Login</a>
              </Link>
            </div>
          </nav>
        </header>
        <main className={'container px-4'}>main</main>
        <footer
          className={'flex justify-center h-10 items-center shadow-inner'}>
          footer
        </footer>
      </div>
    </>
  );
};

export default Layout;
