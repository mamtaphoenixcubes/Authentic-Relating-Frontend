"use client";

import { Box, Typography, Grid, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";

import SiteContainer from "@/app/_components/common/SiteContainer";
import Section from "@/app/_components/common/Section";
import SectionHeader from "@/app/_components/common/SectionHeader";

export default function FacilitationHeader() {
  const theme = useTheme();
  const fh = theme.custom.facilitationHeader;

  return (
    <Section sx={fh.section}>
      <SiteContainer>
        <Box sx={{ overflow: "hidden" }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <Grid
              container
              {...fh.grid.container}
            >
              {/* IMAGE */}
              <Grid item xs={12} sm={6} md={6}>
                <Box sx={fh.imageBox}>
                  <Image
                    src="/facilitation/facilitaioncard.png"
                    alt="Facilitation"
                    fill
                    style={fh.image}
                    sizes="(max-width: 600px) 100vw, 50vw"
                    priority
                  />
                </Box>
              </Grid>

              {/* TEXT */}
              <Grid item xs={12} sm={6} md={6}>
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  <Box sx={fh.textBox}>
                    <SectionHeader
                      title="What is Facilitation?"
                      align="left"
                      sx={fh.sectionHeaderSx}
                    />

                    <Typography sx={fh.body}>
                      Facilitation is the art of guiding a group or individual
                      through a process with intention, presence, and
                      skill—without directing or dominating the outcome. It's
                      about holding space, navigating dynamics, and creating
                      conditions where insight, connection, and transformation
                      naturally unfold. A facilitator doesn't just lead—they
                      listen, sense, and respond in real time to the needs of
                      the room.
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            </Grid>
          </motion.div>
        </Box>
      </SiteContainer>
    </Section>
  );
}