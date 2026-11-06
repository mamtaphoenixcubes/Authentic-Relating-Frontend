<motion.div variants={mainCardVariants}>
  <Box
    sx={{
      position: "relative",
      borderRadius: "28px",
      overflow: "hidden",
      px: { xs: 3, sm: 4, md: 6 },
      py: { xs: 4, sm: 5, md: 6 },
      background: `
  linear-gradient(135deg, rgba(255,130,90,0.85), rgba(230,90,50,0.85)),
  url('/Pasted.png')
`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    {/* Background image overlay - FIXED: using whileInView instead of animate */}
    <motion.div
      variants={backgroundVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/group-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
        }}
      />
    </motion.div>

    {/* Content */}
    <Box
      sx={{
        position: "relative",
        zIndex: 1,
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr", // Stack on mobile
          sm: "0.8fr 1.2fr", // Side by side on sm (adjusted ratio)
          md: "0.6fr 1.4fr", // Original for md and up
        },
        gap: { xs: 3, sm: 4, md: 6 }, // Slightly reduced gap on sm
        alignItems: "center",
      }}
    >
      {/* LEFT IMAGE */}
      <motion.div variants={imageCircleVariants}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: { xs: "100%", sm: "auto" },
            ml: {
              xs: 1.5,
              sm: 0, // Remove left margin on sm
              md: 2,
              lg: 22,
              xl: 4
            },
          }}
        >
          {/* IMAGE WRAPPER */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Box
              sx={{
                width: {
                  xs: 180,
                  sm: 150, // Slightly smaller on sm
                  md: 220,
                  lg: 300,
                  xl: 300,
                },
                height: {
                  xs: 180,
                  sm: 150, // Slightly smaller on sm
                  md: 220,
                  lg: 300,
                  xl: 300,
                },
                background: "#fff",
                borderRadius: "50%",
                boxShadow: "0px 0px 50px 0px #00497F4D",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: { xs: 1.5, sm: 1, md: 2, lg: 2, xl: 3 }, // Reduced margin on sm
                mt: { xs: 0, sm: 0, md: 2 },
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* IMAGE CONTAINER */}
              <Box
                sx={{
                  position: "relative",
                  width: "95%",
                  height: "90%",
                  borderRadius: "50%",
                  overflow: "hidden",
                  marginTop: {
                    xs: "13px",
                    sm: "12px",
                    md: "18px",
                    lg: "25px",
                    xl: "38.8px",
                  },
                  display: { xs: "none", sm: "block" },
                }}
              >
                <Image
                  src="/Amitabhabhatia.png"
                  alt="Amitabha Bhatia"
                  fill
                  style={{
                    objectFit: "contain",
                    objectPosition: "center",
                  }}
                  sizes="(max-width: 900px) 180px, (max-width: 1200px) 220px, 300px"
                />
              </Box>

              {/* PHONE VERSION */}
              <Box
                sx={{
                  position: "relative",
                  width: "990%",
                  height: "950%",
                  borderRadius: "50%",
                  overflow: "hidden",
                  marginTop: "140px",
                  marginLeft: "-30px",
                  marginRight: "-20px",
                  display: { xs: "block", sm: "none" },
                }}
              >
                <Image
                  src="/Amitabhabhatia.png"
                  alt="Amitabha Bhatia"
                  fill
                  style={{
                    objectFit: "contain",
                    objectPosition: "center",
                  }}
                  sizes="190px"
                />
              </Box>
            </Box>
          </motion.div>

          {/* 👇 TEXT BELOW IMAGE */}
          <motion.div variants={nameVariants}>
            <Typography
              sx={{
                mt: { xs: 0.5, sm: 0.5, md: 1, lg: 1.5, xl: 2 },
                fontWeight: 600,
                textAlign: "center",
                fontSize: {
                  xs: "1rem",
                  sm: "0.9rem", // Slightly smaller on sm
                  md: "1.2rem",
                  lg: "1.3rem",
                  xl: "1.4rem",
                },
                color: "#fff",
              }}
            >
              Amitabha Bhatia
            </Typography>
          </motion.div>

          <motion.div variants={subtitleVariants}>
            <Typography
              sx={{
                opacity: 0.9,
                textAlign: "center",
                fontSize: {
                  xs: "0.75rem",
                  sm: "0.7rem", // Slightly smaller on sm
                  md: "0.9rem",
                  lg: "1rem",
                  xl: "1.1rem",
                },
                mt: { xs: 0.25, sm: 0.25, md: 0.5 },
                color: "#fff",
              }}
            >
              Founder of AuthenticRelating.org
            </Typography>
          </motion.div>
        </Box>
      </motion.div>

      {/* RIGHT TEXT */}
      <motion.div variants={rightContainerVariants}>
        <Box>
          <motion.div variants={titleVariants}>
            <Typography
              sx={{
                color: "#fff",
                fontWeight: 700,
                fontSize: {
                  xs: 22,
                  sm: 18, // Smaller on sm
                  md: 26,
                  lg: 30
                },
                lineHeight: {
                  xs: 1.3,
                  sm: 1.2, // Tighter on sm
                  md: 1.3
                },
                mb: { xs: 1.5, sm: 1, md: 1.5 }, // Reduced margin on sm
              }}
            >
              A Life-Changing Framework for
              <br />
              Deeper Human Connection
            </Typography>
          </motion.div>

          <motion.div variants={subtitleVariants}>
            <Typography
              sx={{
                color: "#FFE6DC",
                fontSize: { xs: 13, sm: 11, md: 13 }, // Smaller on sm
                mb: { xs: 2, sm: 1, md: 2 }, // Reduced margin on sm
              }}
            >
              By Amitabha Bhatia, Founder of AuthenticRelating.com
            </Typography>
          </motion.div>

          <motion.div variants={paragraph1Variants}>
            <Typography
              sx={{
                color: "#fff",
                fontSize: { xs: 14, sm: 12, md: 15 }, // Smaller on sm
                lineHeight: { xs: 1.7, sm: 1.5, md: 1.7 }, // Tighter on sm
                mb: { xs: 2, sm: 1, md: 2 }, // Reduced margin on sm
              }}
            >
              We all crave connection that feels real—where we can be fully seen,
              safely held, and deeply understood. But most of us were never taught
              how to truly relate. That's where the Five Dimensions of Authentic
              Relating come in.
            </Typography>
          </motion.div>

          <motion.div variants={paragraph2Variants}>
            <Typography
              sx={{
                color: "#fff",
                fontSize: { xs: 14, sm: 12, md: 15 }, // Smaller on sm
                lineHeight: { xs: 1.7, sm: 1.5, md: 1.7 }, // Tighter on sm
                opacity: 0.95,
              }}
            >
              Rooted in years of practice, facilitation, and relational psychology,
              this powerful framework brings together 45 core practices across five
              transformative realms of human connection.
            </Typography>
          </motion.div>
        </Box>
      </motion.div>
    </Box>
  </Box>
</motion.div>