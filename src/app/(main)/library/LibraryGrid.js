'use client';

import { motion } from 'framer-motion';
import {
    Box,
    Typography,
} from '@mui/material';

import LibraryCard from './LibraryCard';

export default function LibraryGrid({
    items,
    selectedTab,
}) {

    const getType = (item) => {

        if (selectedTab !== 'all')
            return selectedTab;

        if (item.document !== undefined)
            return 'books';

        if (item.course_title)
            return 'course';

        if (item.event_name)
            return 'events';

        return 'podcast';

    };

    return (

        <Box
            sx={{
                display: 'grid',

                gridTemplateColumns: {
                    xs: '1fr',
                    sm: 'repeat(2,1fr)',
                    md: 'repeat(3,1fr)',
                    lg: 'repeat(4,1fr)',
                },

                gap: {
                    xs: 2,
                    md: 2.5,
                },

                justifyItems: 'center',
            }}
        >

            {items.map((item, index) => (

                <motion.div

                    key={item._id}

                    initial={{
                        opacity: 0,
                        scale: .95,
                        y: 20,
                    }}

                    whileInView={{
                        opacity: 1,
                        scale: 1,
                        y: 0,
                    }}

                    viewport={{
                        once: true,
                    }}

                    transition={{
                        duration: .35,
                        delay: index * .05,
                    }}

                    style={{
                        width: '100%',
                    }}

                >

                    <LibraryCard

                        item={item}

                        type={getType(item)}

                    />

                </motion.div>

            ))}

        </Box>

    );

}