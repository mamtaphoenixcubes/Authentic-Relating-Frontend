<Box
          sx={{
            display: {
              xs: 'block',
              md: 'none',
            },
          }}
        >
          {[
            {
              title: 'Home',
              items: ['Blogs', 'Events', 'Contact Us'],
            },

            {
              title: 'Authentic Relating',
              items: [
                'Our Founder',
                'Mission & Vision',
                'Authentic Relating Intention',
                'Five Dimensions',
                'Ten Principles',
                'FAQs',
                'Community',
                'Facilitation',
                'Leadership',
                'Quotes',
              ],
            },

            {
              title: 'Offerings',
              items: [
                'Signature Offerings',
                'Books',
                'Courses',
                'Podcast',
                'Relating Circles',
                'Authentic Relating Work',
                'Authentic Relating Joy Lab',
                'Authentic Relating Coaching',
                'Gifts For You',
                'Speaking & Media',
              ],
            },
          ].map((section, index) => {
            const isOpen = expanded === index;

            return (
              <Accordion
                key={index}
                expanded={isOpen}
                onChange={() =>
                  setExpanded(isOpen ? false : index)
                }
                disableGutters
                sx={{
                  background: 'transparent',
                  color: '#fff',
                  boxShadow: 'none',
                  borderBottom:
                    '1px solid rgba(255,255,255,0.15)',

                  '&:before': {
                    display: 'none',
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <Typography
                      sx={{
                        color: '#fff',
                        fontSize: '28px',
                        fontWeight: 300,
                        lineHeight: 1,
                      }}
                    >
                      {isOpen ? '−' : '+'}
                    </Typography>
                  }
                >
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: '18px',
                      fontFamily: 'var(--font-redhat)',
                    }}
                  >
                    {section.title}
                  </Typography>
                </AccordionSummary>

                <AccordionDetails>
                  <Stack spacing={1.5}>
                    {section.items.map((item, i) => (
                      // <FooterLink key={i} text={item} />
                      <FooterLink
                        key={i}
                        text={item.label}
                        path={item.path}
                        onNavigate={handleNavigation}
                      />
                    ))}
                  </Stack>
                </AccordionDetails>
              </Accordion>
            );
          })}

          {/* SOCIAL ICONS */}

          <Stack
            direction="row"
            spacing={1.5}
            mt={4}
            mb={3}
            justifyContent="center"
          >
            {[
              '/svg/footer/insta.svg',
              '/svg/footer/twitter.svg',
              '/svg/footer/facebook.svg',
              '/svg/footer/github.svg',
            ].map((item, index) => (
              <SocialCircle key={index} item={item} />
            ))}
          </Stack>

          {/* EMAIL SECTION */}

          <Stack spacing={1.5}>
            <TextField
              fullWidth
              placeholder="Your email address here"
              size="small"
              sx={{
                '& .MuiOutlinedInput-root': {
                  height: 48,
                  borderRadius: '8px',

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
              fullWidth
              variant="contained"
              sx={{
                height: 48,

                background: '#fff',
                color: '#6D8E1F',

                borderRadius: '8px',

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

          <Typography
            sx={{
              color: 'rgba(255,255,255,0.9)',
              fontSize: '12px',
              mt: 3,
              lineHeight: 1.7,
              textAlign: 'center',
            }}
          >
            Copyright @ 2025 Authentic Relating,
            All rights reserved.
          </Typography>
        </Box>