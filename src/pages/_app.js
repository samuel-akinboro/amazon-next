import React from 'react';
import dynamic from 'next/dynamic';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { AnimatePresence } from 'framer-motion';
import App from 'next/app';
import Head from 'next/head';

import { store, persistor } from '~/store';

import '~/styles/style.css';
import '~/lib/firebase';

require('slick-carousel/slick/slick.css');
require('slick-carousel/slick/slick-theme.css');

dynamic(() => import('~/config/ReactotronConfig'), { ssr: false });

class MyApp extends App {
    componentDidCatch() {
        /* Sentry capture exception here */
    }

    render() {
        const { Component, pageProps } = this.props;
        return (
            <>
                <Head>
                    <title> Amazon Next </title>
                </Head>
                <Provider store={store}>
                    <PersistGate persistor={persistor}>
                        <AnimatePresence exitBeforeEnter>
                            <Component {...pageProps} />
                        </AnimatePresence>
                    </PersistGate>
                </Provider>
            </>
        );
    }
}

export default MyApp;
