import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

import Footer from './Footer';
import Header from './Header';
import LateralMenu from './LateralMenu';

export default function Layout({ children, className, style }) {
    return (
        <div className="layout-menu overflow-x-hidden">
            <LateralMenu />
            <motion.div
                className={`h-full lg:w-layout w-full flex flex-col justify-start lg:px-8 px-2 py-5 ${className}`}
                style={style}
                exit={{ opacity: 0 }}
                initial="initial"
                animate="animate"
            >
                <Header />

                {children}
                <Footer />
            </motion.div>
        </div>
    );
}

Layout.defaultProps = {
    className: null,
    style: null,
};

Layout.propTypes = {
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
        .isRequired,
    className: PropTypes.string,
    style: PropTypes.shape(),
};
