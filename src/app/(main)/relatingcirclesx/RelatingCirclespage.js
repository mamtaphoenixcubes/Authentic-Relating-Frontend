import { Box, Card, CardContent, Typography, Grid, Container } from '@mui/material';
import { motion } from 'framer-motion';

export const RelatingCirclespage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          spacing={{ xs: 4, md: 6 }}
          alignItems="center"
        >
          {/* TEXT */}
          <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
            <Box
              sx={{
                maxWidth: 620,
                mx: { xs: 'auto', md: 0 },
                textAlign: { xs: 'center', md: 'left' }
              }}
            >
              <Typography
                sx={{
                  fontFamily: 'Red Hat Display',
                  fontWeight: 700,
                  fontSize: { xs: 22, md: 34, lg: 40 },
                  lineHeight: { xs: '30px', md: '44px' },
                  mb: 2
                }}
              >
                Relating Circles: A Practice
                <br />
                of Connection, Humility,
                <br />
                and Trust
              </Typography>

              <Typography
                sx={{
                  fontFamily: 'Red Hat Display',
                  fontSize: { xs: 13, md: 15, lg: 16 },
                  color: '#444',
                  lineHeight: 1.7
                }}
              >
                A relating circle is an intentional space where people gather to practice authentic relating engaging in deep listening, open-hearted communication, and presence. Rooted in ancient traditions, these circles foster trust, humility, and equality, creating a space where every voice matters.
              </Typography>

            </Box>
          </Grid>

          {/* IMAGE / CARD */}
          <Grid
            item
            xs={12}
            md={6}
            order={{ xs: 1, md: 2 }}
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card
                sx={{
                  width: { xs: 280, sm: 430, md: 420, lg: 660 },
                  height: { xs: 180,sm: 260, md: 280, lg: 420 },
                  borderRadius: 3,
                  backgroundColor: '#6d6c6c'
                }}
              >
                <CardContent sx={{ height: '100%' }} />
              </Card>
            </motion.div>
          </Grid>

        </Grid>
      </Container>
    </motion.div>
  );
};