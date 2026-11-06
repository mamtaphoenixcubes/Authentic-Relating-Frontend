'use client';

import {
  Box,
  Typography,
  Container,
  Button,
  Grid,
  Card,
  CardContent,
  Stack
} from '@mui/material';
import { motion } from 'framer-motion';

const modules = [
  { label: 'Trauma-informed facilitation', color: '#FF6B6B' },
  { label: 'Corporate culture & leadership', color: '#FFA94D' },
  { label: 'Embodied relational dynamics', color: '#339AF0' },
  { label: 'Conflict transformation & repair', color: '#3EC1C1' },
];

export default function AdvancedTrainingSection() {
  return (

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >

      <Container maxWidth="xl">

        <Grid
          container
          spacing={{ xs: 4, md: 8 }}
          alignItems="center"
        >

          {/* TEXT LEFT */}
          <Grid item xs={12} md={6}>

            <Box
              sx={{
                textAlign: { xs: "center", md: "left" },
                maxWidth: 520,
                mx: { xs: "auto", md: 0 }
              }}
            >

              <Typography
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  fontSize: { xs: '22px', md: '28px', lg: '32px' },
                }}
              >
                Already Facilitating?
              </Typography>

              <Typography
                sx={{
                  mb: 3,
                  color: '#555',
                  fontSize: { xs: '14px', md: '16px' },
                }}
              >
                We offer advanced training modules in:
              </Typography>

              <Stack spacing={1.5}>

                {modules.map((mod, idx) => (

                  <Box
                    key={idx}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: { xs: 'center', md: 'flex-start' }
                    }}
                  >

                    <Box
                      sx={{
                        width: 12,
                        height: 12,
                        borderRadius: '50%',
                        backgroundColor: mod.color,
                        mr: 1.5,
                      }}
                    />

                    <Typography sx={{ fontSize: { xs: '14px', md: '16px' } }}>
                      {mod.label}
                    </Typography>

                  </Box>

                ))}

              </Stack>

              <Button
                variant="contained"
                sx={{
                  mt: 4,
                  backgroundColor: '#000',
                  color: '#fff',
                  textTransform: 'none',
                  px: 4,
                  py: 1.2,
                  borderRadius: '8px',
                  fontWeight: 600,
                  '&:hover': { backgroundColor: '#333' },
                }}
              >
                Request Advanced Training Info
              </Button>

            </Box>

          </Grid>


          {/* CARD RIGHT */}
          <Grid item xs={12} md={6}>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 40 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >

              <Card
                sx={{
                  width: "100%",
                  height: { xs: 260, md: 320, lg: 460 },
                  borderRadius: "12px",
                  backgroundColor: "#6d6c6c",
                }}
              >
                <CardContent sx={{ height: "100%" }} />
              </Card>

            </motion.div>

          </Grid>

        </Grid>

      </Container>

    </motion.div>
  );
}