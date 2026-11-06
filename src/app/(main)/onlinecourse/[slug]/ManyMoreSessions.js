import React from 'react';
import { Box, Typography, Container, Grid, Card, Stack, Button } from '@mui/material';
import { motion } from 'framer-motion';

export default function ManyMoreSessions() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <Box
                sx={{
                    py: { xs: 6, sm: 7, md: 8, lg: 9, xl: 10 },
                    px: { xs: 2, sm: 3, md: 4, lg: 5, xl: 6 },
                }}
            >
                <Container maxWidth="xl">
                    {/* Heading - Left Aligned */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Typography
                            variant="h2"
                            component="h1"
                            sx={{
                                fontWeight: 'bold',
                                mb: { xs: 2, sm: 2.5, md: 3, lg: 3.5, xl: 4 },
                                color: 'text.primary',
                                fontSize: { xs: '1.8rem', sm: '2rem', md: '2.2rem', lg: '2.5rem', xl: '3rem' },
                                textAlign: 'center'
                            }}
                        >
                            Many more sessions available
                        </Typography>
                    </motion.div>

                    {/* Description - Left Aligned */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <Typography
                            variant="body1"
                            sx={{
                                color: 'text.secondary',
                                fontSize: { xs: '1rem', sm: '1.05rem', md: '1.1rem', lg: '1.15rem', xl: '1.2rem' },
                                lineHeight: 1.7,
                                mb: { xs: 4, sm: 5, md: 6, lg: 7, xl: 8 },
                                textAlign: 'center'
                            }}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed urna elit. Ut in tincidunt lacus, at convallis risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                        </Typography>
                    </motion.div>

                    {/* CARDS GRID - 3 per row on SM and above */}
                    <Grid
                        container
                        spacing={{ xs: 2, sm: 2, md: 3, lg: 4, xl: 4 }}
                        justifyContent="flex-start" // Changed from 'center' to 'flex-start'
                        sx={{ width: '100%', mx: 'auto' }}
                    >
                        {[1, 2, 3].map((item, index) => (
                            <Grid
                                item
                                xs={12} 
                                sm={4} 
                                md={4}  
                                lg={4} 
                                xl={4}       
                                key={item}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ 
                                        duration: 0.6, 
                                        delay: index * 0.1,
                                        ease: "easeOut" 
                                    }}
                                    style={{ 
                                        width: '100%',
                                        height: '100%',
                                        display: 'flex',
                                        justifyContent: 'center'
                                    }}
                                >
                                    <Card
                                        sx={{
                                            p: { xs: 1.5, sm: 1.5, md: 1.75, lg: 2, xl: 2.25 },
                                            height: { 
                                                xs: 320, 
                                                sm: 280,
                                                md: 320, 
                                                lg: 340, 
                                                xl: 420 
                                            },
                                            width: '100%',
                                            maxWidth: {
                                                xs: '100%',
                                                sm: '100%',
                                                md: '100%',
                                                lg: '100%',
                                                xl: '100%'
                                            },
                                            borderRadius: { xs: 2, sm: 2, md: 2.5, lg: 3, xl: 3.5 },
                                            background: index % 2 === 0 
                                                ? 'linear-gradient(135deg, #5fa6e8, #b7d2ff)'
                                                : 'linear-gradient(135deg, #5fa6e8, #c2b7ffff)',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            mx: 'auto'
                                        }}
                                    >
                                        {/* Image */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                                        >
                                            <Box
                                                sx={{
                                                    height: { 
                                                        xs: 100, 
                                                        sm: 80,
                                                        md: 100, 
                                                        lg: 110, 
                                                        xl: 120 
                                                    },
                                                    background: '#fff',
                                                    borderRadius: { xs: 1.5, sm: 1.5, md: 2, lg: 2.25, xl: 2.5 },
                                                    mb: { xs: 1.5, sm: 1.25, md: 1.5, lg: 1.75, xl: 2 },
                                                }}
                                            />
                                        </motion.div>

                                        {/* Content */}
                                        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                                            {/* Title - Left Aligned */}
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.4, delay: 0.25 + index * 0.05 }}
                                            >
                                                <Typography
                                                    fontSize={{ xs: 16, sm: 14, md: 15, lg: 16, xl: 19 }}
                                                    fontWeight={600}
                                                    color="#fff"
                                                    mb={0.5}
                                                    lineHeight={1.2}
                                                    textAlign="left"
                                                >
                                                    Expand inside out
                                                </Typography>
                                            </motion.div>

                                            {/* Description - Left Aligned */}
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                                            >
                                                <Typography
                                                    fontSize={{ xs: 13, sm: 11, md: 12, lg: 13, xl: 19 }}
                                                    color="#EAF2FF"
                                                    mb={1}
                                                    lineHeight={1.4}
                                                    textAlign="left"
                                                    sx={{ flex: 1 }}
                                                >
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                </Typography>
                                            </motion.div>

                                            {/* Time - Left Aligned */}
                                            <motion.div
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.4, delay: 0.35 + index * 0.05 }}
                                            >
                                                <Typography
                                                    fontSize={{ xs: 11, sm: 9, md: 10, lg: 11, xl: 15 }}
                                                    color="#EAF2FF"
                                                    mb={0.5}
                                                    display="flex"
                                                    alignItems="center"
                                                    gap={0.5}
                                                    textAlign="left"
                                                >
                                                    🕒 21st Mar, 2025
                                                </Typography>
                                            </motion.div>

                                            {/* Mode - Left Aligned */}
                                            <motion.div
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                                            >
                                                <Typography
                                                    fontSize={{ xs: 11, sm: 9, md: 10, lg: 11, xl: 15 }}
                                                    color="#EAF2FF"
                                                    mb={1.5}
                                                    display="flex"
                                                    alignItems="center"
                                                    gap={0.5}
                                                    textAlign="left"
                                                >
                                                    📍 In person / Online
                                                </Typography>
                                            </motion.div>

                                            {/* Price - Left Aligned */}
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.4, delay: 0.45 + index * 0.05 }}
                                            >
                                                <Typography
                                                    fontSize={{ xs: 14, sm: 12, md: 13, lg: 14, xl: 19 }}
                                                    fontWeight={600}
                                                    color="#fff"
                                                    mb={1.5}
                                                    textAlign="left"
                                                >
                                                    ₹6,500
                                                    <Typography
                                                        component="span"
                                                        sx={{
                                                            fontSize: { xs: 11, sm: 9, md: 10, lg: 11, xl: 19 },
                                                            ml: 1,
                                                            color: '#EAF2FF',
                                                            textDecoration: 'line-through',
                                                        }}
                                                    >
                                                        ₹16,500
                                                    </Typography>
                                                </Typography>
                                            </motion.div>

                                            {/* BUTTONS - Left Aligned */}
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                                            >
                                                <Stack direction="row" spacing={0.75} mt="auto">
                                                    <Button
                                                        fullWidth
                                                        sx={{
                                                            textTransform: 'none',
                                                            color: '#fff',
                                                            border: '1px solid rgba(255,255,255,0.6)',
                                                            background: 'linear-gradient(135deg, #8dbdf3ff, #91caffff)',
                                                            borderRadius: { xs: 1.5, sm: 1.5, md: 1.75, lg: 2, xl: 2.25 },
                                                            fontSize: { xs: 11, sm: 9, md: 10, lg: 11, xl: 12 },
                                                            py: { xs: 0.5, sm: 0.375, md: 0.5, lg: 0.625, xl: 0.75 },
                                                            '&:hover': {
                                                                background: 'linear-gradient(135deg, #7daeff, #81baff)',
                                                            }
                                                        }}
                                                    >
                                                        Read
                                                    </Button>
                                                    <Button
                                                        fullWidth
                                                        sx={{
                                                            textTransform: 'none',
                                                            border: '1px solid rgba(255, 255, 255, 0.91)',
                                                            background: 'linear-gradient(135deg, #097cffff, #91caffff)',
                                                            color: '#fff',
                                                            borderRadius: { xs: 1.5, sm: 1.5, md: 1.75, lg: 2, xl: 2.25 },
                                                            fontSize: { xs: 11, sm: 9, md: 10, lg: 11, xl: 12 },
                                                            py: { xs: 0.5, sm: 0.375, md: 0.5, lg: 0.625, xl: 0.75 },
                                                            '&:hover': {
                                                                background: 'linear-gradient(135deg, #086ce0, #71b0ff)',
                                                            },
                                                        }}
                                                    >
                                                        Book
                                                    </Button>
                                                </Stack>
                                            </motion.div>
                                        </Box>
                                    </Card>
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </motion.div>
    );
}