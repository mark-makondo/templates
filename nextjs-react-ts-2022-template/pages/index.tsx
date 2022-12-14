import type { NextPage } from 'next';
import { useContext } from 'react';
import Head from 'next/head';
import homeStyle from '../styles/pages/home.module.scss';
import context from '../context/Context';

// components
import Layout from '../components/Layout';

const Home: NextPage = () => {
    const ctx = useContext(context);

    console.info({ ctx });

    return (
        <Layout>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={homeStyle.base}>
                <header className={homeStyle.base__header}>I am header</header>
                <main className={homeStyle.base__main}>I am main</main>
                <footer className={homeStyle.base__footer}>I am footer</footer>
            </div>
        </Layout>
    );
};

export default Home;
