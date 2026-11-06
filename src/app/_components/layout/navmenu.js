const NAV_ITEMS = [
 {
   label: "Authentic Relating",
   submenu: [
     { label: "Relating Circles", href: "/relatingcircles" },
     { label: "Authentic Relating Joy Lab", href: "/authenticrelatingjoylab" },
     { label: "Authentic Relating Founder", href: "/authenticrelatingfounder" },
     { label: "Authentic Relating Coaching", href: "/authenticrelatingcoaching" },
     { label: "Authentic Relating @Work", href: "/authenticrelatingwork" },
     { label: "Five Dimensions", href: "/fivedimensionsofauthenticrelating" },
     { label: "10 Principles", href: "/principlesofauthenticrelating" },
   ],
 },
 {
   label: "Events & Workshops",
   submenu: [
     { label: "Online Course", href: "/onlinecourse" },
     { label: "My Books", href: "/mybooks" },
     { label: "Our Offerings", href: "/ourofferings" },
     { label: "Events", href: "/events" },
     { label: "Podcast", href: "/podcasts" },
     { label: "Blog", href: "/blogpage" },
   ],
 },
 {
   label: "About Us",
   submenu: [
     { label: "About", href: "/aboutus" },
     { label: "FAQs", href: "/FAQs" },
     { label: "Cancellation Policy", href: "/cancellationpolicy" },
     { label: "Scholarship Opportunities", href: "/scholarshipOpportunities" },
     { label: "Authentic Relating Blog", href: "/authenticrelatingblog" },
     { label: "Website Disclaimer", href: "/websitedisclaimer" },
     { label: "Mission & Vision", href: "/missingvision" },
     { label: "Terms & Conditions", href: "/termsandconditions" },
     { label: "Privacy Policy", href: "/privacypolicy" },
   ],
 },
 {
   label: "Speaking & Media Kit",
   submenu: [
     { label: "Quotes", href: "/quotes" },
     { label: "Free Stuff", href: "/freestuff" },
     { label: "Community", href: "/communities" },
     { label: "Facilitation", href: "/facilitationpage" },
     { label: "Leadership", href: "/leadershipPage" },
     { label: "Media Kit", href: "/speakingmediaKit" },
   ],
 },
 { label: "Contact Us", href: "/contactus" },
];


<Box
        sx={{
          position: 'relative',
          zIndex: 5,

          /* GLASS + GREEN GRADIENT */
          background:
            'linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(120,150,20,0.92) 55%, rgba(88,125,18,1) 100%)',

          backdropFilter: 'blur(18px)',

          borderTopLeftRadius: '10px',
          borderTopRightRadius: '10px',

          px: { xs: 3, md: 8 },
          pt: { xs: 6, md: 7 },
          pb: { xs: 5, md: 6 },
        }}
      >
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: '1fr 1.4fr 1.4fr 1.2fr',
            },
            gap: { xs: 5, md: 6 },
          }}
        >
          {/* ========================================================= */}
          {/* COLUMN 1 */}
          {/* ========================================================= */}

          <Box>
            <FooterHeading text="Home" />

            <Stack spacing={1.5}>
              <FooterLink text="Blogs" />
              <FooterLink text="Events" />
              <FooterLink text="Contact Us" />
            </Stack>
          </Box>

          {/* ========================================================= */}
          {/* COLUMN 2 */}
          {/* ========================================================= */}

          <Box>
            <FooterHeading text="Authentic Relating" />

            <Stack spacing={1.5}>
              <FooterLink text="Our Founder" />
              <FooterLink text="Mission & Vision" />
              <FooterLink text="Authentic Relating Intention" />
              <FooterLink text="Five Dimensions" />
              <FooterLink text="Ten Principles" />
              <FooterLink text="FAQs" />
              <FooterLink text="Community" />
              <FooterLink text="Facilitation" />
              <FooterLink text="Leadership" />
              <FooterLink text="Quotes" />
            </Stack>
          </Box>

          {/* ========================================================= */}
          {/* COLUMN 3 */}
          {/* ========================================================= */}

          <Box>
            <FooterHeading text="Offerings" />

            <Stack spacing={1.5}>
              <FooterLink text="Signature Offerings" />
              <FooterLink text="Books" />
              <FooterLink text="Courses" />
              <FooterLink text="Podcast" />
              <FooterLink text="Relating Circles" />
              <FooterLink text="Authentic Relating Work" />
              <FooterLink text="Authentic Relating Joy Lab" />
              <FooterLink text="Authentic Relating Coaching" />
              <FooterLink text="Gifts For You" />
              <FooterLink text="Speaking & Media" />
            </Stack>
          </Box>

          {/* ========================================================= */}
          {/* COLUMN 4 */}
          {/* ========================================================= */}

          <Box>
            {/* SOCIAL ICONS */}

            <Stack direction="row" spacing={1.5} mb={4}>
              {[
                '/svg/footer/insta.svg',
                '/svg/footer/twitter.svg',
                '/svg/footer/facebook.svg',
                '/svg/footer/github.svg',
              ].map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    width: 46,
                    height: 46,
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.9)',

                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',

                    cursor: 'pointer',
                    transition: '0.3s',

                    '&:hover': {
                      transform: 'translateY(-4px)',
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={item}
                    alt="social"
                    sx={{
                      width: 18,
                      height: 18,
                      objectFit: 'contain',
                    }}
                  />
                </Box>
              ))}
            </Stack>

            {/* EMAIL FIELD */}

            <Stack
              direction="row"
              spacing={1}
              sx={{
                alignItems: 'center',
              }}
            >
              <TextField
                fullWidth
                placeholder="Your email address here"
                size="small"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    height: 42,
                    borderRadius: '6px',

                    background: 'rgba(255,255,255,0.08)',

                    '& fieldset': {
                      borderColor: 'rgba(255,255,255,0.7)',
                    },

                    '& input': {
                      color: '#fff',
                      fontSize: '14px',
                    },
                  },
                }}
              />

              <Button
                variant="contained"
                sx={{
                  height: 42,
                  minWidth: '110px',

                  background: '#fff',
                  color: '#6D8E1F',

                  borderRadius: '6px',

                  fontWeight: 700,
                  textTransform: 'none',

                  boxShadow: 'none',

                  '&:hover': {
                    background: '#f5f5f5',
                    boxShadow: 'none',
                  },
                }}
              >
                Submit
              </Button>
            </Stack>

            {/* COPYRIGHT */}

            <Typography
              sx={{
                color: 'rgba(255,255,255,0.9)',
                fontSize: '12px',
                mt: 3,
                lineHeight: 1.7,
              }}
            >
              **Copyright @ 2025 Authentic Relating,
              All rights reserved All rights reserved.
            </Typography>
          </Box>
        </Box>
      </Box>