'use client';

import { useEffect, useState } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import axiosInstance from '@/lib/axios';

// Common components
import Section from '../../_components/common/Section';
import Container from '../../_components/common/Container';
import SectionHeader from '../../_components/common/SectionHeader';
import Card from '../../_components/common/Card';
import EventButton from '../../_components/buttons/EventButton';

// =====================================================
// CONSTANTS
// =====================================================
const categories = ['All', 'Category 1', 'Category 2', 'Category 3', 'Category 4'];

// 👇 Toggle this to `false` when your API returns real data
const USE_MOCK_DATA = true;

// =====================================================
// MOCK DATA (fallback when API returns nothing)
// =====================================================
const MOCK_EVENTS = [
  {
    _id: 'mock-1',
    event_name: 'Authentic Relating Foundations Workshop',
    event_description:
      'A two-day immersive workshop introducing the 5 Dimensions of Authentic Relating. Practice deep listening, honest expression, and relational presence in a supportive circle.',
    eventSlug: 'authentic-relating-foundations-workshop',
    image: null,
    start_date: '2026-03-14T10:00:00.000Z',
    end_date: '2026-03-15T17:00:00.000Z',
    city: 'Mumbai',
    state: 'Maharashtra',
    country: 'India',
    formatted_address: 'Andheri West, Mumbai, Maharashtra, India',
    mode_of_event: 'In-Person',
    timezone: 'IST (GMT +5:30)',
    minPrice: 249,
  },
  {
    _id: 'mock-2',
    event_name: 'Relational Leadership for Founders',
    event_description:
      'A half-day intensive for founders and team leads exploring vulnerability, integrity, and connection as leadership tools. Includes live practice and Q&A.',
    eventSlug: 'relational-leadership-for-founders',
    image: null,
    start_date: '2026-04-05T14:00:00.000Z',
    end_date: '2026-04-05T18:00:00.000Z',
    city: 'Bengaluru',
    state: 'Karnataka',
    country: 'India',
    formatted_address: 'Koramangala, Bengaluru, Karnataka, India',
    mode_of_event: 'Hybrid',
    timezone: 'IST (GMT +5:30)',
    minPrice: 149,
  },
  {
    _id: 'mock-3',
    event_name: 'Authentic Relating Joy Lab',
    event_description:
      'An evening of playful relational games designed to spark joy, curiosity, and genuine connection. No experience required — come as you are.',
    eventSlug: 'authentic-relating-joy-lab',
    image: null,
    start_date: '2026-04-18T18:30:00.000Z',
    end_date: '2026-04-18T21:00:00.000Z',
    city: 'Pune',
    state: 'Maharashtra',
    country: 'India',
    formatted_address: 'Koregaon Park, Pune, Maharashtra, India',
    mode_of_event: 'In-Person',
    timezone: 'IST (GMT +5:30)',
    minPrice: 49,
  },
  {
    _id: 'mock-4',
    event_name: 'Online Authentic Relating Circle',
    event_description:
      'A monthly online circle for practitioners worldwide. Deepen your practice, meet kindred spirits, and explore the 10 Principles in live conversation.',
    eventSlug: 'online-authentic-relating-circle',
    image: null,
    start_date: '2026-04-25T15:00:00.000Z',
    end_date: '2026-04-25T17:00:00.000Z',
    city: null,
    state: null,
    country: 'Global',
    formatted_address: 'Zoom (link shared after registration)',
    mode_of_event: 'Online',
    timezone: 'UTC',
    minPrice: 29,
  },
  {
    _id: 'mock-5',
    event_name: 'Conscious Communication Retreat',
    event_description:
      'A weekend retreat in the hills focused on conscious communication, empathic listening, and reconnecting with yourself and others.',
    eventSlug: 'conscious-communication-retreat',
    image: null,
    start_date: '2026-05-09T09:00:00.000Z',
    end_date: '2026-05-11T16:00:00.000Z',
    city: 'Rishikesh',
    state: 'Uttarakhand',
    country: 'India',
    formatted_address: 'Rishikesh, Uttarakhand, India',
    mode_of_event: 'In-Person',
    timezone: 'IST (GMT +5:30)',
    minPrice: 599,
  },
  {
    _id: 'mock-6',
    event_name: 'Facilitator Training Level 1',
    event_description:
      'Become a certified Authentic Relating facilitator. Learn to hold space, guide circles, and navigate relational depth with confidence.',
    eventSlug: 'facilitator-training-level-1',
    image: null,
    start_date: '2026-06-01T10:00:00.000Z',
    end_date: '2026-06-07T17:00:00.000Z',
    city: 'Goa',
    state: 'Goa',
    country: 'India',
    formatted_address: 'Assagao, Goa, India',
    mode_of_event: 'In-Person',
    timezone: 'IST (GMT +5:30)',
    minPrice: 1299,
  },
];

// =====================================================
// HELPERS
// =====================================================
const formatEventDate = (start, end) => {
  if (!start) return '';

  const startDate = new Date(start);
  const endDate = end ? new Date(end) : null;

  const day = startDate.getDate();
  const month = startDate.toLocaleString('en-US', { month: 'short' });
  const year = startDate.getFullYear();

  const getOrdinal = (n) => {
    if (n > 3 && n < 21) return 'th';
    switch (n % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  };

  const formatTime = (date) =>
    date
      .toLocaleString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      })
      .toLowerCase();

  const startTime = formatTime(startDate);
  const endTime = endDate ? formatTime(endDate) : '';

  return `${day}${getOrdinal(day)} ${month}, ${year} @ ${startTime}${
    endTime ? ` – ${endTime}` : ''
  }`;
};

const formatLocation = (event) => {
  if (event?.formatted_address) return event.formatted_address;
  const parts = [event?.city, event?.state, event?.country].filter(Boolean);
  return parts.join(', ');
};

// =====================================================
// COMPONENT
// =====================================================
export default function UpcomingEvents() {
  const theme = useTheme();
  const styles = theme.custom.upcomingEvents;

  const [eventsData, setEventsData] = useState([]);
  const [page, setPage] = useState(0);
  const [limit] = useState(6);
  const [totalPages, setTotalPages] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    if (USE_MOCK_DATA) {
      setEventsData(MOCK_EVENTS);
      setTotalPages(1);
      setTotalCount(MOCK_EVENTS.length);
      return;
    }
    fetchEvents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const fetchEvents = async () => {
    try {
      setLoading(true);
      const res = await axiosInstance.get('/frontendApis/getAllEvents', {
        params: { page: page + 1, limit },
      });

      if (res.data.status === 1) {
        const apiEvents = res.data.data || [];

        if (apiEvents.length === 0) {
          setEventsData(MOCK_EVENTS);
          setTotalPages(1);
          setTotalCount(MOCK_EVENTS.length);
        } else {
          setEventsData(apiEvents);
          setTotalPages(res.data.pagination?.totalPages || 0);
          setTotalCount(res.data.pagination?.totalItems || 0);
        }
      } else {
        setEventsData(MOCK_EVENTS);
        setTotalPages(1);
        setTotalCount(MOCK_EVENTS.length);
      }
    } catch (error) {
      console.error('API error:', error);
      setEventsData(MOCK_EVENTS);
      setTotalPages(1);
      setTotalCount(MOCK_EVENTS.length);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section sx={styles.section}>
      <Container>
        {/* ============================== */}
        {/* HEADER                          */}
        {/* ============================== */}
        <SectionHeader
          title="Upcoming Events"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed urna elit. Ut in tincidunt lacus, at convallis risus. Orci varius natoque penatibus et magnis dis parturient montes."
          align="center"
          sx={styles.header}
        />

        {loading && <Box sx={styles.loading}>Loading events...</Box>}

        {/* ============================== */}
        {/* CARDS GRID                      */}
        {/* ============================== */}
        <Box
          sx={{
            ...styles.grid,
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',                       // Mobile: 1 per row
              sm: 'repeat(3, minmax(0, 1fr))', // Tablet: 3 per row
              md: 'repeat(3, minmax(0, 1fr))', // Desktop: 3 per row
              lg: 'repeat(3, minmax(0, 1fr))', // Large: 3 per row
            },
            gap: { xs: 2, sm: 2.5, md: 3, lg: 3 },
            alignItems: 'stretch',
          }}
        >
          {eventsData.map((item, index) => {
            const imageUrl = item.image
              ? `${process.env.NEXT_PUBLIC_API_URL}/${item.image}`
              : '/placeholder.png';

            return (
              <motion.div
                key={item._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ height: '100%', display: 'flex', width: '100%' }}
              >
                {/* 
                  👇 CARD DIMENSIONS & ALIGNMENT 
                  - height: '100%' makes all cards match height in a row.
                  - minHeight: '520px' gives it a fixed base height.
                  - display: flex, column allows pushing buttons to bottom.
                */}
                <Card
                  sx={{
                    ...styles.card,
                    width: '100%',
                    height: '100%',
                    minHeight: '520px', 
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  {/* IMAGE */}
                  <Box sx={styles.imageWrapper}>
                    <Box
                      component="img"
                      src={imageUrl}
                      alt={item.event_name}
                      sx={styles.image}
                    />
                  </Box>

                  {/* TITLE */}
                  <Typography sx={styles.cardTitle}>
                    {item.event_name}
                  </Typography>

                  {/* DESCRIPTION */}
                  <Typography sx={styles.cardDescription}>
                    {item.event_description}
                  </Typography>

                  {/* DATE / TIME */}
                  <Box sx={styles.metaRow}>
                    <Box component="span" sx={styles.metaIcon}>
                      🕐
                    </Box>
                    <Typography sx={styles.metaText}>
                      {formatEventDate(item.start_date, item.end_date)}
                    </Typography>
                  </Box>

                  {/* LOCATION */}
                  <Box sx={styles.metaRow}>
                    <Box component="span" sx={styles.metaIcon}>
                      📍
                    </Box>
                    <Typography sx={styles.metaText}>
                      {formatLocation(item)}
                      {item.mode_of_event && ` • ${item.mode_of_event}`}
                    </Typography>
                  </Box>

                  {/* TIMEZONE */}
                  <Box sx={{ ...styles.metaRow, mb: 2 }}>
                    <Box component="span" sx={styles.metaIcon}>
                      🌐
                    </Box>
                    <Typography sx={styles.metaText}>
                      {item.timezone || 'IST (GMT +5:30)'}
                    </Typography>
                  </Box>

                  {/* PRICE */}
                  <Box sx={styles.priceRow}>
                    <Typography sx={styles.price}>
                      USD ${item.minPrice}
                    </Typography>
                    <Typography sx={styles.originalPrice}>$ 500</Typography>
                  </Box>

                  {/* 
                    BUTTONS 
                    👇 mt: 'auto' pushes this container to the absolute bottom 
                    so all cards line up perfectly regardless of description length.
                  */}
                  <Box sx={{ ...styles.buttonsContainer, mt: 'auto' }}>
                    <Box sx={styles.buttonRow}>
                      <EventButton
                        {...styles.readMoreButton}
                        onClick={() =>
                          (window.location.href = `/events/${item.eventSlug}`)
                        }
                      >
                        Read More
                      </EventButton>

                      <EventButton
                        {...styles.bookNowButton}
                        onClick={() =>
                          (window.location.href = `/events/payment/${item.eventSlug}`)
                        }
                      >
                        Book Now
                      </EventButton>
                    </Box>
                  </Box>
                </Card>
              </motion.div>
            );
          })}
        </Box>

        {/* ============================== */}
        {/* PAGINATION                      */}
        {/* ============================== */}
        {totalPages > 1 && (
          <Box sx={styles.pagination.container}>
            <EventButton
              {...styles.pagination.prevButton(page === 0)}
              onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
              disabled={page === 0}
            >
              ← Prev
            </EventButton>

            <Box sx={styles.pagination.pageNumbers}>
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  {...styles.pagination.pageButton(page === i)}
                >
                  {i + 1}
                </button>
              ))}
            </Box>

            <EventButton
              {...styles.pagination.nextButton(page === totalPages - 1)}
              onClick={() =>
                setPage((prev) => Math.min(prev + 1, totalPages - 1))
              }
              disabled={page === totalPages - 1}
            >
              Next →
            </EventButton>
          </Box>
        )}
      </Container>
    </Section>
  );
}