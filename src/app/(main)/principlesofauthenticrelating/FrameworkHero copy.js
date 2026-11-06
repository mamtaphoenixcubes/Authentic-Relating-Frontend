import { Box, Container, Grid } from '@mui/material';

export const FrameworkHero = () => {
    return (
        <Box
            sx={{
                background: '#D6D6D6',
                py: { xs: 6, md: 10 },
                mb: { xs: 6, md: 8 },
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4} alignItems="center">
                    {/* IMAGE */}
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                width: '100%',
                                height: { xs: 220, md: 300 },
                                borderRadius: 4,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                boxShadow: '0px 10px 30px rgba(0,0,0,0.15)',
                            }}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};