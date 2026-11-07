"use client";

import { Box, Card, Grid } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "@mui/material/styles";
import SiteContainer from "../../_components/common/SiteContainer";
import Section from "../../_components/common/Section";
import SectionHeader from "../../_components/common/SectionHeader";

export const RelatingCirclespage = () => {
  const theme = useTheme();
  const rc = theme.custom.relatingCircles;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <Section sx={{ pb: { xs: 2,md: 5, lg: 10 } }}>
        <SiteContainer>
          <Grid container {...rc.grid}>
            {/* TEXT */}
            <Grid item xs={12} md={6} sx={rc.textColumn}>
              <Box sx={rc.textBox}>
                <SectionHeader
                  title={
                    <>
                      Relating Circles: A Practice
                      <br />
                      of Connection, Humility,
                      <br />
                      and Trust
                    </>
                  }
                  subtitle="A relating circle is an intentional space where people gather to practice authentic relating engaging in deep listening, open-hearted communication, and presence. Rooted in ancient traditions, these circles foster trust, humility, and equality, creating a space where every voice matters."
                  align="left"
                  sx={rc.header}
                />
              </Box>
            </Grid>

            {/* IMAGE / CARD */}
            <Grid item xs={12} md={6} sx={rc.imageColumn}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={rc.imageMotionWrapper}
              >
                <Card sx={rc.card}>
                  <Box sx={rc.cardImageBox}>
                    <Image
                      src="/relatingcircles/humanityandtrust.png"
                      alt="Card Image"
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 600px) 90vw, (max-width: 900px) 85vw, 660px"
                    />
                  </Box>
                </Card>
              </motion.div>
            </Grid>
          </Grid>
        </SiteContainer>
      </Section>
    </motion.div>
  );
};

export default RelatingCirclespage;