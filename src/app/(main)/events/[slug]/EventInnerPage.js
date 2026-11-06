'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
    Box,
    Typography,
    Button,
    Container,
    Grid,
    Paper,
    Chip,
    Divider,
    Stack,
    Avatar,
    Card,
    CardContent,
    IconButton,
    Breadcrumbs,
    Link as MuiLink,
    Alert,
    Skeleton,
    Tabs,
    Tab,
} from '@mui/material';
import {
    LocationOn,
    Language,
    CalendarToday,
    Person,
    Share,
    Favorite,
    FavoriteBorder,
    ArrowBack,
    EventAvailable,
    Group,
    Info,
    AttachMoney,
    CheckCircle,
    LocalOffer,
    AccessTime,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import axiosInstance from '@/lib/axios';
import Link from 'next/link';
import RelatedEvents from './RelatedEvents';

// Blue gradient definitions at the top of the component
const blueGradients = {
    primary: 'linear-gradient(149deg, #478dffff, #76e8ffff, #669ef7ff, #77a8f8ff, #c7c3ffff)',
    dark: 'linear-gradient(135deg, #3a7bd5, #2d5f9e)',
    light: 'linear-gradient(135deg, #6ab0ff, #3d8cff)',
    card: 'linear-gradient(135deg, #5fa6e8, #3d8cff)',
    accent: 'linear-gradient(135deg, #478dff, #3d8cff)',
    hover: 'linear-gradient(135deg, #3d8cff, #2d5f9e)',
    button: 'linear-gradient(135deg, #478dff, #3d8cff, #2d5f9e)',
};

// Tab Panel Component
function TabPanel({ children, value, index, ...other }) {
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`event-tabpanel-${index}`}
            aria-labelledby={`event-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ py: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

export default function EventInnerPage({ slug }) {
    const router = useRouter();
    const [eventData, setEventData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isLiked, setIsLiked] = useState(false);
    const [tabValue, setTabValue] = useState(0);
    const [relatedEvents, setRelatedEvents] = useState([]);

    useEffect(() => {
        if (slug) {
            fetchEventDetails();
        }
    }, [slug]);

    const fetchEventDetails = async () => {
        try {
            setLoading(true);
            setError(null);

            console.log('Fetching event with slug:', slug);

            const response = await axiosInstance.get(`/frontendApis/geteventbyslug/${slug}`);

            console.log('API Response:', response);

            // Check if response.data has the event directly or in data property
            const event = response.data.data || response.data.event || response.data;

            if (response.data.status === 1 && event) {
                setEventData(event);
                fetchRelatedEvents(event);
            } else {
                setError(response.data.message || 'Event not found');
            }
        } catch (error) {
            console.error('Error fetching event details:', error);
            if (error.response) {
                console.error('Error response data:', error.response.data);
                console.error('Error response status:', error.response.status);
                setError(`Server error: ${error.response.status} - ${error.response.data?.message || 'Unknown error'}`);
            } else if (error.request) {
                setError('No response from server. Please check your connection.');
            } else {
                setError(`Error: ${error.message}`);
            }
        } finally {
            setLoading(false);
        }
    };

    const fetchRelatedEvents = async (currentEvent) => {
        try {
            const response = await axiosInstance.get('/frontendApis/getAllEvents', {
                params: {
                    limit: 10, // Increased to ensure we get enough events
                }
            });

            if (response.data.status === 1 && response.data.data) {
                const related = response.data.data
                    .filter(event => event._id !== currentEvent._id)
                    .slice(0, 3);
                setRelatedEvents(related);
            }
        } catch (error) {
            console.error('Error fetching related events:', error);
        }
    };

    const formatEventDate = (start, end) => {
        if (!start) return "";

        const startDate = new Date(start);
        const endDate = end ? new Date(end) : null;

        if (endDate) {
            return `${startDate.toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            })} • ${startDate.toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: true
            })} - ${endDate.toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: true
            })}`;
        }

        return startDate.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
            timeZoneName: 'short'
        });
    };

    const formatLocation = (event) => {
        if (!event) return "";

        // Check if it's an online event
        if (event.event_type === 'online' || event.location_type === 'online') {
            return event.online_event_url || 'Online Event';
        }

        const parts = [
            event.venue_name,
            event.address_line_1,
            event.address_line_2,
            event.city,
            event.state,
            event.country,
            event.postal_code
        ].filter(Boolean);

        return parts.join(', ') || 'Location to be announced';
    };

    const getFullImageUrl = (imagePath) => {
        if (!imagePath) return '/placeholder-event.jpg';
        if (imagePath.startsWith('http')) return imagePath;
        return `${process.env.NEXT_PUBLIC_API_URL}/${imagePath}`;
    };

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: eventData?.event_name,
                text: eventData?.event_description,
                url: window.location.href,
            });
        } else {
            navigator.clipboard.writeText(window.location.href);
            alert('Link copied to clipboard!');
        }
    };

    const handleBack = () => {
        router.back();
    };

    // Get ticket status color
    const getTicketStatusColor = (status) => {
        switch (status) {
            case 'available': return '#4CAF50';
            case 'going_fast': return '#f44336';
            case 'sold_out': return '#9e9e9e';
            default: return '#4CAF50';
        }
    };

    if (loading) {
        return (
            <Container maxWidth="lg" sx={{ py: { xs: 4, sm: 6, md: 8 } }}>
                <Skeleton variant="text" width={200} height={40} />
                <Skeleton variant="rectangular" height={400} sx={{ my: 2, borderRadius: 2 }} />
                <Skeleton variant="text" width="60%" height={60} />
                <Skeleton variant="text" width="80%" height={30} />
                <Skeleton variant="text" width="40%" height={30} />
            </Container>
        );
    }

    if (error || !eventData) {
        return (
            <Container maxWidth="lg" sx={{ py: { xs: 4, sm: 6, md: 8 } }}>
                <Alert
                    severity="error"
                    action={
                        <Button color="inherit" size="small" onClick={handleBack}>
                            Go Back
                        </Button>
                    }
                >
                    {error || 'Event not found'}
                </Alert>
            </Container>
        );
    }

    console.log(eventData,"event")

    return (
        <Box sx={{
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #f5f7fa 0%, #ffffff 100%)',
            pt: { xs: 2, sm: 3, md: 4, lg: 16 }
        }}>
            <Container maxWidth="lg" sx={{ py: { xs: 2, sm: 3, md: 4 } }}>
                {/* Breadcrumb Navigation */}
                {/* <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Breadcrumbs sx={{ mb: 3 }}>
                        <MuiLink
                            component={Link}
                            href="/"
                            color="inherit"
                            sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                        >
                            Home
                        </MuiLink>
                        <MuiLink
                            component={Link}
                            href="/events"
                            color="inherit"
                            sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                        >
                            Events
                        </MuiLink>
                        <Typography color="text.primary">{eventData.event_name}</Typography>
                    </Breadcrumbs>
                </motion.div> */}

                {/* Back Button (Mobile) */}
                <IconButton
                    onClick={handleBack}
                    sx={{
                        display: { xs: 'inline-flex', sm: 'none' },
                        mb: 2,
                        bgcolor: 'rgba(0,0,0,0.05)'
                    }}
                >
                    <ArrowBack />
                </IconButton>

                <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
                    {/* Left Column - Image and Details */}
                    <Grid item xs={12} md={8}>
                        {/* Main Image */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <Paper
                                elevation={0}
                                sx={{
                                    position: 'relative',
                                    width: '100%',
                                    height: { xs: 250, sm: 350, md: 450 },
                                    borderRadius: { xs: 2, sm: 3, md: 4 },
                                    overflow: 'hidden',
                                    mb: 3,
                                    boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
                                }}
                            >
                                <img
                                    src={`${process.env.NEXT_PUBLIC_API_URL}/${eventData.image}`}
                                    alt={eventData.event_name}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />

                                {/* Event Badges */}
                                <Box sx={{
                                    position: 'absolute',
                                    top: 16,
                                    left: 16,
                                    display: 'flex',
                                    gap: 1,
                                    flexWrap: 'wrap'
                                }}>
                                    {eventData.guaranteed && (
                                        <Chip
                                            label="Guaranteed"
                                            size="small"
                                            sx={{
                                                bgcolor: '#4CAF50',
                                                color: 'white',
                                                fontWeight: 500
                                            }}
                                        />
                                    )}
                                    {eventData.isPromoted && (
                                        <Chip
                                            label="Promoted"
                                            size="small"
                                            sx={{
                                                bgcolor: '#FF9800',
                                                color: 'white',
                                                fontWeight: 500
                                            }}
                                        />
                                    )}
                                    {eventData.ticketStatus === 'going_fast' && (
                                        <Chip
                                            label="Going Fast"
                                            size="small"
                                            sx={{
                                                bgcolor: '#f44336',
                                                color: 'white',
                                                fontWeight: 500
                                            }}
                                        />
                                    )}
                                    {eventData.eventStatus === 'upcoming' && (
                                        <Chip
                                            label="Upcoming"
                                            size="small"
                                            sx={{
                                                bgcolor: '#2196F3',
                                                color: 'white',
                                                fontWeight: 500
                                            }}
                                        />
                                    )}
                                </Box>

                                {/* Share & Like Buttons */}
                                <Box sx={{
                                    position: 'absolute',
                                    top: 16,
                                    right: 16,
                                    display: 'flex',
                                    gap: 1
                                }}>
                                    <IconButton
                                        onClick={handleShare}
                                        sx={{
                                            bgcolor: 'rgba(255,255,255,0.9)',
                                            '&:hover': { bgcolor: 'white' }
                                        }}
                                    >
                                        <Share />
                                    </IconButton>
                                    <IconButton
                                        onClick={() => setIsLiked(!isLiked)}
                                        sx={{
                                            bgcolor: 'rgba(255,255,255,0.9)',
                                            '&:hover': { bgcolor: 'white' }
                                        }}
                                    >
                                        {isLiked ? <Favorite color="error" /> : <FavoriteBorder />}
                                    </IconButton>
                                </Box>
                            </Paper>
                        </motion.div>

                        {/* Event Title & Organizer */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <Box sx={{ mb: 3 }}>
                                <Typography
                                    variant="h4"
                                    sx={{
                                        fontSize: { xs: 24, sm: 28, md: 32, lg: 36 },
                                        fontWeight: 700,
                                        color: '#1a1a1a',
                                        mb: 1
                                    }}
                                >
                                    {eventData.event_title || eventData.event_name}
                                </Typography>

                                <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap">
                                    <Avatar sx={{ width: 32, height: 32, background: blueGradients.accent }}>
                                        <Person sx={{ fontSize: 18, color: 'white' }} />
                                    </Avatar>
                                    <Typography sx={{ color: '#666' }}>
                                        Organized by <strong>{eventData.event_Organizer || eventData.organizer?.name || 'Event Organizer'}</strong>
                                    </Typography>
                                    {eventData.verifybadgeEVent && (
                                        <Chip
                                            label="Verified"
                                            size="small"
                                            sx={{
                                                bgcolor: '#4CAF50',
                                                color: 'white',
                                                fontSize: '10px',
                                                height: 20
                                            }}
                                        />
                                    )}
                                </Stack>
                            </Box>
                        </motion.div>

                        {/* Tabs Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <Tabs
                                    value={tabValue}
                                    onChange={handleTabChange}
                                    variant="scrollable"
                                    scrollButtons="auto"
                                    sx={{
                                        '& .MuiTab-root': {
                                            fontSize: { xs: 14, sm: 16 },
                                            textTransform: 'none',
                                            fontWeight: 500
                                        },
                                        '& .Mui-selected': {
                                            color: '#3d8cff !important',
                                            fontWeight: 600
                                        },
                                        '& .MuiTabs-indicator': {
                                            background: blueGradients.accent
                                        }
                                    }}
                                >
                                    <Tab label="About" icon={<Info sx={{ color: tabValue === 0 ? '#3d8cff' : 'inherit' }} />} iconPosition="start" />
                                    <Tab label="Details" icon={<EventAvailable sx={{ color: tabValue === 1 ? '#3d8cff' : 'inherit' }} />} iconPosition="start" />
                                    <Tab label="Tickets" icon={<LocalOffer sx={{ color: tabValue === 2 ? '#3d8cff' : 'inherit' }} />} iconPosition="start" />
                                </Tabs>
                            </Box>

                            {/* About Tab */}
                            <TabPanel value={tabValue} index={0}>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontSize: { xs: 14, sm: 16 },
                                        lineHeight: 1.8,
                                        color: '#444',
                                        mb: 3
                                    }}
                                >
                                    {eventData.event_description}
                                </Typography>

                                {eventData.summary && (
                                    <Box sx={{
                                        background: 'linear-gradient(135deg, #f0f7ff, #e6f0ff)',
                                        p: 3,
                                        borderRadius: 2,
                                        border: '1px solid #d4e4ff'
                                    }}>
                                        <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: '#1a4f8c' }}>
                                            Summary
                                        </Typography>
                                        <Typography sx={{ color: '#2d5f9e' }}>
                                            {eventData.summary}
                                        </Typography>
                                    </Box>
                                )}

                                {/* Highlights */}
                                {eventData.highlights && eventData.highlights.length > 0 && (
                                    <Box sx={{ mt: 3 }}>
                                        <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: '#1a4f8c' }}>
                                            Highlights
                                        </Typography>
                                        <Box component="ul" sx={{ pl: 2 }}>
                                            {eventData.highlights.map((highlight, idx) => (
                                                <Typography component="li" key={idx} sx={{ mb: 1, color: '#2d5f9e' }}>
                                                    {highlight}
                                                </Typography>
                                            ))}
                                        </Box>
                                    </Box>
                                )}

                                {/* FAQs */}
                                {eventData.faqs && eventData.faqs.length > 0 && (
                                    <Box sx={{ mt: 3 }}>
                                        <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: '#1a4f8c' }}>
                                            Frequently Asked Questions
                                        </Typography>
                                        {eventData.faqs.map((faq, idx) => (
                                            <Box key={idx} sx={{ mb: 2, p: 2, bgcolor: '#f8fbff', borderRadius: 1 }}>
                                                <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#1a4f8c' }}>
                                                    Q: {faq.question}
                                                </Typography>
                                                <Typography variant="body2" sx={{ color: '#2d5f9e', mt: 0.5 }}>
                                                    A: {faq.answer}
                                                </Typography>
                                            </Box>
                                        ))}
                                    </Box>
                                )}
                            </TabPanel>

                            {/* Details Tab */}
                            <TabPanel value={tabValue} index={1}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <Card elevation={0} sx={{
                                            background: 'linear-gradient(135deg, #f8fbff, #f0f7ff)',
                                            p: 2,
                                            borderRadius: 2,
                                            border: '1px solid #d4e4ff'
                                        }}>
                                            <Stack spacing={2}>
                                                <Box display="flex" alignItems="center" gap={1}>
                                                    <CalendarToday sx={{ color: '#3d8cff' }} />
                                                    <Box>
                                                        <Typography variant="caption" color="text.secondary">
                                                            Date & Time
                                                        </Typography>
                                                        <Typography variant="body2" fontWeight={500} sx={{ color: '#1a4f8c' }}>
                                                            {formatEventDate(eventData.start_date, eventData.end_date)}
                                                        </Typography>
                                                    </Box>
                                                </Box>

                                                <Box display="flex" alignItems="center" gap={1}>
                                                    <LocationOn sx={{ color: '#3d8cff' }} />
                                                    <Box>
                                                        <Typography variant="caption" color="text.secondary">
                                                            Location
                                                        </Typography>
                                                        <Typography variant="body2" fontWeight={500} sx={{ color: '#1a4f8c' }}>
                                                            {formatLocation(eventData)}
                                                        </Typography>
                                                    </Box>
                                                </Box>

                                                <Box display="flex" alignItems="center" gap={1}>
                                                    <Language sx={{ color: '#3d8cff' }} />
                                                    <Box>
                                                        <Typography variant="caption" color="text.secondary">
                                                            Timezone
                                                        </Typography>
                                                        <Typography variant="body2" fontWeight={500} sx={{ color: '#1a4f8c' }}>
                                                            {eventData.timezone || 'IST (GMT +5:30)'}
                                                        </Typography>
                                                    </Box>
                                                </Box>

                                                {eventData.display_format && (
                                                    <Box display="flex" alignItems="center" gap={1}>
                                                        <AccessTime sx={{ color: '#3d8cff' }} />
                                                        <Box>
                                                            <Typography variant="caption" color="text.secondary">
                                                                Display Format
                                                            </Typography>
                                                            <Typography variant="body2" fontWeight={500} sx={{ color: '#1a4f8c' }}>
                                                                {eventData.display_format}
                                                            </Typography>
                                                        </Box>
                                                    </Box>
                                                )}
                                            </Stack>
                                        </Card>
                                    </Grid>

                                    <Grid item xs={12} sm={6}>
                                        <Card elevation={0} sx={{
                                            background: 'linear-gradient(135deg, #f8fbff, #f0f7ff)',
                                            p: 2,
                                            borderRadius: 2,
                                            border: '1px solid #d4e4ff'
                                        }}>
                                            <Stack spacing={2}>
                                                <Box display="flex" alignItems="center" gap={1}>
                                                    <Group sx={{ color: '#3d8cff' }} />
                                                    <Box>
                                                        <Typography variant="caption" color="text.secondary">
                                                            Capacity
                                                        </Typography>
                                                        <Typography variant="body2" fontWeight={500} sx={{ color: '#1a4f8c' }}>
                                                            {eventData.totalCapacity || eventData.event_capacity || 'Unlimited'} attendees
                                                        </Typography>
                                                    </Box>
                                                </Box>

                                                <Box display="flex" alignItems="center" gap={1}>
                                                    <CheckCircle sx={{ color: '#3d8cff' }} />
                                                    <Box>
                                                        <Typography variant="caption" color="text.secondary">
                                                            Availability
                                                        </Typography>
                                                        <Typography variant="body2" fontWeight={500} sx={{ color: '#1a4f8c' }}>
                                                            {eventData.availableTickets || 0} of {eventData.totalCapacity || 0} tickets left
                                                        </Typography>
                                                        {eventData.ticketStatus && (
                                                            <Chip
                                                                label={eventData.ticketStatus.replace('_', ' ').toUpperCase()}
                                                                size="small"
                                                                sx={{
                                                                    mt: 0.5,
                                                                    bgcolor: getTicketStatusColor(eventData.ticketStatus),
                                                                    color: 'white',
                                                                    fontSize: '10px',
                                                                    height: 20
                                                                }}
                                                            />
                                                        )}
                                                    </Box>
                                                </Box>

                                                <Box display="flex" alignItems="center" gap={1}>
                                                    <AttachMoney sx={{ color: '#3d8cff' }} />
                                                    <Box>
                                                        <Typography variant="caption" color="text.secondary">
                                                            Price Range
                                                        </Typography>
                                                        <Typography variant="body2" fontWeight={500} sx={{ color: '#1a4f8c' }}>
                                                            {eventData.isFree ? 'Free' : `$${eventData.minPrice || 0} - $${eventData.maxPrice || eventData.minPrice || 0}`}
                                                        </Typography>
                                                        <Typography variant="caption" color="text.secondary">
                                                            Currency: {eventData.currency || 'USD'}
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                            </Stack>
                                        </Card>
                                    </Grid>
                                </Grid>

                                {/* Tags */}
                                {eventData.tags && eventData.tags.length > 0 && (
                                    <Box sx={{ mt: 3 }}>
                                        <Typography variant="subtitle2" sx={{ mb: 1, color: '#1a4f8c' }}>
                                            Tags
                                        </Typography>
                                        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                                            {eventData.tags.map((tag, idx) => (
                                                <Chip
                                                    key={idx}
                                                    label={tag}
                                                    size="small"
                                                    sx={{
                                                        bgcolor: '#e6f0ff',
                                                        color: '#1a4f8c',
                                                        border: '1px solid #b8d4ff'
                                                    }}
                                                />
                                            ))}
                                        </Stack>
                                    </Box>
                                )}
                            </TabPanel>

                            {/* Tickets Tab */}
                            <TabPanel value={tabValue} index={2}>
                                {eventData.ticket_sections?.map((section, index) => (
                                    <Card
                                        key={index}
                                        sx={{
                                            mb: 2,
                                            borderRadius: 2,
                                            border: '1px solid #d4e4ff',
                                            background: 'white',
                                            '&:hover': {
                                                boxShadow: '0 4px 12px rgba(61, 140, 255, 0.15)',
                                                border: '1px solid #3d8cff'
                                            }
                                        }}
                                    >
                                        <CardContent>
                                            <Typography variant="h6" sx={{
                                                fontWeight: 600,
                                                mb: 1,
                                                background: blueGradients.accent,
                                                WebkitBackgroundClip: 'text',
                                                WebkitTextFillColor: 'transparent',
                                                display: 'inline-block'
                                            }}>
                                                {section.section_name}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                                {section.section_description}
                                            </Typography>
                                            <Divider sx={{ my: 2 }} />

                                            {/* Check for ticket_types array */}
                                            {section.ticket_types?.map((ticket, idx) => (
                                                <Box
                                                    key={idx}
                                                    sx={{
                                                        display: 'flex',
                                                        justifyContent: 'space-between',
                                                        alignItems: 'center',
                                                        py: 1,
                                                        borderBottom: idx < section.ticket_types.length - 1 ? '1px dashed #d4e4ff' : 'none'
                                                    }}
                                                >
                                                    <Box>
                                                        <Typography variant="body1" fontWeight={500} sx={{ color: '#1a4f8c' }}>
                                                            {ticket.name}
                                                        </Typography>
                                                        <Typography variant="caption" color="text.secondary">
                                                            {ticket.quantity || 'Unlimited'} available
                                                        </Typography>
                                                    </Box>
                                                    <Box textAlign="right">
                                                        <Typography variant="h6" sx={{
                                                            fontWeight: 600,
                                                            background: blueGradients.accent,
                                                            WebkitBackgroundClip: 'text',
                                                            WebkitTextFillColor: 'transparent'
                                                        }}>
                                                            ${ticket.price}
                                                        </Typography>
                                                        {ticket.original_price && ticket.original_price > ticket.price && (
                                                            <Typography variant="caption" sx={{ textDecoration: 'line-through', color: '#999' }}>
                                                                ${ticket.original_price}
                                                            </Typography>
                                                        )}
                                                    </Box>
                                                </Box>
                                            ))}

                                            {/* Alternative: Check for ticketTypes array (different naming) */}
                                            {!section.ticket_types && section.ticketTypes?.map((ticket, idx) => (
                                                <Box
                                                    key={idx}
                                                    sx={{
                                                        display: 'flex',
                                                        justifyContent: 'space-between',
                                                        alignItems: 'center',
                                                        py: 1,
                                                        borderBottom: idx < section.ticketTypes.length - 1 ? '1px dashed #d4e4ff' : 'none'
                                                    }}
                                                >
                                                    <Box>
                                                        <Typography variant="body1" fontWeight={500} sx={{ color: '#1a4f8c' }}>
                                                            {ticket.name}
                                                        </Typography>
                                                        <Typography variant="caption" color="text.secondary">
                                                            {ticket.quantity || 'Unlimited'} available
                                                        </Typography>
                                                    </Box>
                                                    <Typography variant="h6" sx={{
                                                        fontWeight: 600,
                                                        background: blueGradients.accent,
                                                        WebkitBackgroundClip: 'text',
                                                        WebkitTextFillColor: 'transparent'
                                                    }}>
                                                        ${ticket.price}
                                                    </Typography>
                                                </Box>
                                            ))}
                                        </CardContent>
                                    </Card>
                                ))}

                                {/* Alternative ticket structure */}
                                {!eventData.ticket_sections && eventData.ticketTypes && (
                                    <Card sx={{
                                        borderRadius: 2,
                                        border: '1px solid #d4e4ff',
                                        '&:hover': {
                                            boxShadow: '0 4px 12px rgba(61, 140, 255, 0.15)',
                                            border: '1px solid #3d8cff'
                                        }
                                    }}>
                                        <CardContent>
                                            <Typography variant="h6" sx={{
                                                fontWeight: 600,
                                                mb: 2,
                                                background: blueGradients.accent,
                                                WebkitBackgroundClip: 'text',
                                                WebkitTextFillColor: 'transparent'
                                            }}>
                                                Tickets
                                            </Typography>
                                            {eventData.ticketTypes.map((ticket, idx) => (
                                                <Box
                                                    key={idx}
                                                    sx={{
                                                        display: 'flex',
                                                        justifyContent: 'space-between',
                                                        alignItems: 'center',
                                                        py: 1,
                                                        borderBottom: idx < eventData.ticketTypes.length - 1 ? '1px dashed #d4e4ff' : 'none'
                                                    }}
                                                >
                                                    <Box>
                                                        <Typography variant="body1" fontWeight={500} sx={{ color: '#1a4f8c' }}>
                                                            {ticket.name}
                                                        </Typography>
                                                        <Typography variant="caption" color="text.secondary">
                                                            {ticket.quantity || 'Unlimited'} available
                                                        </Typography>
                                                    </Box>
                                                    <Typography variant="h6" sx={{
                                                        fontWeight: 600,
                                                        background: blueGradients.accent,
                                                        WebkitBackgroundClip: 'text',
                                                        WebkitTextFillColor: 'transparent'
                                                    }}>
                                                        ${ticket.price}
                                                    </Typography>
                                                </Box>
                                            ))}
                                        </CardContent>
                                    </Card>
                                )}

                                {(!eventData.ticket_sections && !eventData.ticketTypes) && (
                                    <Alert severity="info" sx={{ bgcolor: '#e6f0ff', color: '#1a4f8c' }}>
                                        Ticket information will be available soon.
                                    </Alert>
                                )}

                                {/* Refund Policy */}
                                {eventData.refund_policy && (
                                    <Box sx={{ mt: 3, p: 2, bgcolor: '#f8fbff', borderRadius: 1 }}>
                                        <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1, color: '#1a4f8c' }}>
                                            Refund Policy
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: '#2d5f9e' }}>
                                            {eventData.refund_policy.policy_type === 'no_refunds' && 'No refunds available'}
                                            {eventData.refund_policy.policy_type === 'custom' && eventData.refund_policy.description}
                                            {eventData.refund_policy.allow_refunds && `Refunds allowed within ${eventData.refund_policy.refund_deadline} days`}
                                        </Typography>
                                    </Box>
                                )}
                            </TabPanel>
                        </motion.div>
                    </Grid>

                    {/* Right Column - Booking Card */}
                    {/* <Grid item xs={12} md={4}>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <Paper
                                elevation={0}
                                sx={{
                                    p: { xs: 2, sm: 3 },
                                    borderRadius: { xs: 2, sm: 3 },
                                    background: blueGradients.primary,
                                    boxShadow: '0 10px 40px rgba(61, 140, 255, 0.2)',
                                    position: 'sticky',
                                    top: 24
                                }}
                            >
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: 'white' }}>
                                    {eventData.isFree ? 'Free' : `$${eventData.minPrice || 0}`}
                                    {!eventData.isFree && eventData.maxPrice && eventData.maxPrice > eventData.minPrice && (
                                        <Typography component="span" sx={{ fontSize: 16, color: 'rgba(255,255,255,0.9)', ml: 1 }}>
                                            - ${eventData.maxPrice}
                                        </Typography>
                                    )}
                                </Typography>

                                <Divider sx={{ my: 2, borderColor: 'rgba(255,255,255,0.3)' }} />

                                <Stack spacing={2} sx={{ mb: 3 }}>
                                    <Box display="flex" justifyContent="space-between">
                                        <Typography sx={{ color: 'rgba(255,255,255,0.9)' }}>Date</Typography>
                                        <Typography fontWeight={500} sx={{ color: 'white' }}>
                                            {new Date(eventData.start_date).toLocaleDateString('en-US', {
                                                month: 'short',
                                                day: 'numeric',
                                                year: 'numeric'
                                            })}
                                        </Typography>
                                    </Box>
                                    <Box display="flex" justifyContent="space-between">
                                        <Typography sx={{ color: 'rgba(255,255,255,0.9)' }}>Time</Typography>
                                        <Typography fontWeight={500} sx={{ color: 'white' }}>
                                            {new Date(eventData.start_date).toLocaleTimeString('en-US', {
                                                hour: '2-digit',
                                                minute: '2-digit',
                                                hour12: true
                                            })}
                                        </Typography>
                                    </Box>
                                    <Box display="flex" justifyContent="space-between">
                                        <Typography sx={{ color: 'rgba(255,255,255,0.9)' }}>Location</Typography>
                                        <Typography fontWeight={500} sx={{ color: 'white' }} textAlign="right">
                                            {eventData.location_type === 'online' ? 'Online' : 'In Person'}
                                        </Typography>
                                    </Box>
                                    <Box display="flex" justifyContent="space-between">
                                        <Typography sx={{ color: 'rgba(255,255,255,0.9)' }}>Availability</Typography>
                                        <Typography 
                                            fontWeight={500} 
                                            sx={{ 
                                                color: eventData.availableTickets > 10 ? '#a5d6a5' : '#ffcdd2'
                                            }}
                                        >
                                            {eventData.availableTickets || 0} spots left
                                        </Typography>
                                    </Box>
                                </Stack>

                                <Button
                                    onClick={() => router.push(`/events/payment/${eventData._id}`)}
                                    fullWidth
                                    variant="contained"
                                    size="large"
                                    sx={{
                                        py: 1.5,
                                        borderRadius: 2,
                                        background: 'white',
                                        color: '#3d8cff',
                                        textTransform: 'none',
                                        fontSize: { xs: 16, sm: 18 },
                                        fontWeight: 600,
                                        mb: 1,
                                        '&:hover': {
                                            background: '#f5f5f5',
                                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                                        }
                                    }}
                                >
                                    Book Now
                                </Button>

                                <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.9)' }} align="center" display="block">
                                    {eventData.refund_policy?.allow_refunds
                                        ? `Free cancellation up to ${eventData.refund_policy.refund_deadline} days`
                                        : 'Secure your spot'}
                                </Typography>
                            </Paper>
                        </motion.div>
                    </Grid> */}
                    <Grid item xs={12} md={4}>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <Paper
                                elevation={0}
                                sx={{
                                    p: { xs: 2, sm: 3 },
                                    borderRadius: { xs: 2, sm: 3 },
                                    background: 'linear-gradient(135deg, #95C4FF 0%, #087EDF 100%)',
                                    boxShadow: '0 10px 40px rgba(8, 126, 223, 0.3)',
                                    position: 'sticky',
                                    top: 24
                                }}
                            >
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: 'white' }}>
                                    {eventData.isFree ? 'Free' : `$${eventData.minPrice || 0}`}
                                    {!eventData.isFree && eventData.maxPrice && eventData.maxPrice > eventData.minPrice && (
                                        <Typography component="span" sx={{ fontSize: 16, color: 'rgba(255,255,255,0.9)', ml: 1 }}>
                                            - ${eventData.maxPrice}
                                        </Typography>
                                    )}
                                </Typography>

                                <Divider sx={{ my: 2, borderColor: 'rgba(255,255,255,0.3)' }} />

                                <Stack spacing={2} sx={{ mb: 3 }}>
                                    <Box display="flex" justifyContent="space-between">
                                        <Typography sx={{ color: 'rgba(255,255,255,0.9)' }}>Date</Typography>
                                        <Typography fontWeight={500} sx={{ color: 'white' }}>
                                            {new Date(eventData.start_date).toLocaleDateString('en-US', {
                                                month: 'short',
                                                day: 'numeric',
                                                year: 'numeric'
                                            })}
                                        </Typography>
                                    </Box>
                                    <Box display="flex" justifyContent="space-between">
                                        <Typography sx={{ color: 'rgba(255,255,255,0.9)' }}>Time</Typography>
                                        <Typography fontWeight={500} sx={{ color: 'white' }}>
                                            {new Date(eventData.start_date).toLocaleTimeString('en-US', {
                                                hour: '2-digit',
                                                minute: '2-digit',
                                                hour12: true
                                            })}
                                        </Typography>
                                    </Box>
                                    <Box display="flex" justifyContent="space-between">
                                        <Typography sx={{ color: 'rgba(255,255,255,0.9)' }}>Location</Typography>
                                        <Typography fontWeight={500} sx={{ color: 'white' }} textAlign="right">
                                            {eventData.location_type === 'online' ? 'Online' : 'In Person'}
                                        </Typography>
                                    </Box>
                                    <Box display="flex" justifyContent="space-between">
                                        <Typography sx={{ color: 'rgba(255,255,255,0.9)' }}>Availability</Typography>
                                        <Typography
                                            fontWeight={500}
                                            sx={{
                                                color: eventData.availableTickets > 10 ? '#a5d6a5' : '#ffcdd2'
                                            }}
                                        >
                                            {eventData.availableTickets || 0} spots left
                                        </Typography>
                                    </Box>
                                </Stack>

                                <Button
                                    onClick={() => router.push(`/events/payment/${eventData.eventSlug}`)}
                                    fullWidth
                                    variant="contained"
                                    size="large"
                                    sx={{
                                        py: 1.5,
                                        borderRadius: 2,
                                        // Glass morphism base
                                        background: 'rgba(255, 255, 255, 0.18)',
                                        backdropFilter: 'blur(12px)',
                                        WebkitBackdropFilter: 'blur(12px)',
                                        border: '1px solid rgba(255, 255, 255, 0.45)',
                                        boxShadow: '0 4px 16px rgba(8, 126, 223, 0.2), inset 0 1px 0 rgba(255,255,255,0.4)',
                                        color: 'white',
                                        textTransform: 'none',
                                        // Red Hat Display specs
                                        fontFamily: '"Red Hat Display", sans-serif',
                                        fontSize: '18px',
                                        fontWeight: 600,
                                        lineHeight: '100%',
                                        letterSpacing: '-0.01em',
                                        verticalAlign: 'middle',
                                        mb: 1,
                                        transition: 'all 0.25s ease',
                                        '&:hover': {
                                            background: 'rgba(255, 255, 255, 0.32)',
                                            backdropFilter: 'blur(20px)',
                                            WebkitBackdropFilter: 'blur(20px)',
                                            border: '1px solid rgba(255, 255, 255, 0.65)',
                                            boxShadow: '0 8px 28px rgba(8, 126, 223, 0.35), inset 0 1px 0 rgba(255,255,255,0.6)',
                                            transform: 'translateY(-1px)',
                                        },
                                        '&:active': {
                                            transform: 'translateY(0px)',
                                            background: 'rgba(255, 255, 255, 0.22)',
                                            boxShadow: '0 2px 8px rgba(8, 126, 223, 0.2), inset 0 1px 0 rgba(255,255,255,0.3)',
                                        }
                                    }}
                                >
                                    Book Now
                                </Button>

                                <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.9)' }} align="center" display="block">
                                    {eventData.refund_policy?.allow_refunds
                                        ? `Free cancellation up to ${eventData.refund_policy.refund_deadline} days`
                                        : 'Secure your spot'}
                                </Typography>
                            </Paper>
                        </motion.div>
                    </Grid>
                </Grid>

                {/* Related Events Section */}
                {relatedEvents.length > 0 && (
                    <RelatedEvents events={relatedEvents} />
                )}
            </Container>
        </Box>
    );
}