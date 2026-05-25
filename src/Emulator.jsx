import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet';

import { Unavailable } from './common';

export const Emulator = ({ emulator }) => {
    const { name, component: Component = Unavailable } = emulator;

    return (
        <>
            <Helmet>
                <title>{name}</title>
            </Helmet>
            <Suspense fallback={<p>Loading</p>}>
                <Component />
            </Suspense>
        </>
    );
};
