'use client';

import {
    Box,
    Typography,
    Grid,
    Card,
    Stack,
    Button,
} from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LanguageIcon from '@mui/icons-material/Language';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const getFullImageUrl = (imagePath) => {
    if (!imagePath) return '/placeholder-event.jpg';
    if (imagePath.startsWith('http')) return imagePath;
    return `${process.env.NEXT_PUBLIC_API_URL}/${imagePath}`;
};


const formatEventDate = (start, end) => {
    if (!start) return "";

    const startDate = new Date(start);
    const endDate = end ? new Date(end) : null;

    const day = startDate.getDate();
    const month = startDate.toLocaleString("en-US", { month: "short" });
    const year = startDate.getFullYear();

    const getOrdinal = (n) => {
        if (n > 3 && n < 21) return "th";
        switch (n % 10) {
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
        }
    };

    const formatTime = (date) =>
        date.toLocaleString("en-US", {
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
        }).toLowerCase();

    const startTime = formatTime(startDate);
    const endTime = endDate ? formatTime(endDate) : "";

    return `${day}${getOrdinal(day)} ${month}, ${year} @ ${startTime}${endTime ? ` – ${endTime}` : ""}`;
};

const formatLocation = (event) => {
    const parts = [
        event.city,
        event.state,
        event.country,
    ].filter(Boolean);

    return parts.join(", ");
};

export default function RelatedEvents({ events }) {
    const router = useRouter();
    if (!events || events.length === 0) return null;

    return (
        <Box sx={{ mt: { xs: 4, sm: 6, md: 8 } }}>
            {/* HEADING with animation */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <Typography
                    sx={{
                        fontSize: { xs: 24, sm: 26, md: 28, lg: 30, xl: 32 },
                        fontWeight: 700,
                        textAlign: 'center',
                        color: '#0077D1',
                        mb: 3,
                    }}
                >
                    You Might Also Like
                </Typography>
            </motion.div>

            {/* CARDS GRID */}
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
                px: { xs: 0, sm: 2, md: 3, lg: 4, xl: 5 }
            }}>
                <Grid
                    container
                    spacing={{ xs: 2, sm: 2, md: 3, lg: 4, xl: 4 }}
                    sx={{
                        maxWidth: {
                            xs: '100%',
                            sm: 600,
                            md: 900,
                            lg: 1200,
                            xl: 1400
                        },
                        justifyContent: 'center'
                    }}
                >
                    {events.map((event, index) => (
                        <Grid
                            item
                            xs={12}
                            sm={4}
                            md={4}
                            lg={4}
                            xl={4}
                            key={event._id}
                            sx={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center' }}
                            >
                                <Card
                                    sx={{
                                        p: { xs: 2, sm: 1.5, md: 2, lg: 2.5, xl: 3 },
                                        height: {
                                            xs: 480,
                                            sm: 440,
                                            md: 460,
                                            lg: 480,
                                            xl: 520
                                        },
                                        width: '100%',
                                        maxWidth: {
                                            xs: '100%',
                                            sm: 280,
                                            md: 300,
                                            lg: 340,
                                            xl: 380
                                        },
                                        borderRadius: { xs: 2, sm: 2.5, md: 3, lg: 3.5, xl: 4 },
                                        background: index % 2 === 0
                                            ? 'linear-gradient(135deg, #5fa6e8, #c2b7ffff)'
                                            : 'linear-gradient(135deg, #5fa6e8, #b7d2ff)',
                                        display: 'flex',
                                        flexDirection: 'column'
                                    }}
                                >
                                    {/* Image with animation */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: 0.1 + (index * 0.1) }}
                                    >
                                        <Box
                                            sx={{
                                                height: {
                                                    xs: 140,
                                                    sm: 100,
                                                    md: 120,
                                                    lg: 140,
                                                    xl: 160
                                                },
                                                borderRadius: { xs: 1.5, sm: 1.75, md: 2, lg: 2.25, xl: 2.5 },
                                                mb: { xs: 2, sm: 1.5, md: 2, lg: 2.5, xl: 3 },
                                                overflow: "hidden",
                                                background: "#fff"
                                            }}
                                        >
                                            <Box
                                                component="img"
                                                src={getFullImageUrl(event.main_event_image || event.image)}
                                                alt={event.event_name}
                                                onError={(e) => {
                                                    e.target.src = '/placeholder-event.jpg';
                                                }}
                                                sx={{
                                                    width: "100%",
                                                    height: "100%",
                                                    objectFit: "cover"
                                                }}
                                            />
                                        </Box>
                                    </motion.div>

                                    {/* Content */}
                                    <Box sx={{
                                        flex: 1,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        px: { xs: 0.5, sm: 0 }
                                    }}>
                                        {/* Title with animation */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 15 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: 0.2 + (index * 0.1) }}
                                        >
                                            <Typography
                                                fontSize={{
                                                    xs: 18,
                                                    sm: 14,
                                                    md: 16,
                                                    lg: 18,
                                                    xl: 20
                                                }}
                                                fontWeight={600}
                                                color="#fff"
                                                mb={0.5}
                                                lineHeight={1.3}
                                                textAlign={{ xs: 'center', sm: 'left' }}
                                                sx={{
                                                    display: '-webkit-box',
                                                    WebkitLineClamp: 2,
                                                    WebkitBoxOrient: 'vertical',
                                                    overflow: 'hidden',
                                                    minHeight: { xs: 46, sm: 38, md: 42, lg: 46, xl: 52 },
                                                }}
                                            >
                                                {event.event_name}
                                            </Typography>
                                        </motion.div>

                                        {/* Description with animation */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 15 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: 0.25 + (index * 0.1) }}
                                        >
                                            <Typography
                                                fontSize={{
                                                    xs: 14,
                                                    sm: 11,
                                                    md: 12,
                                                    lg: 13,
                                                    xl: 14
                                                }}
                                                color="#EAF2FF"
                                                mb={1}
                                                lineHeight={1.4}
                                                textAlign={{ xs: 'center', sm: 'left' }}
                                                sx={{
                                                    display: '-webkit-box',
                                                    WebkitLineClamp: 2,
                                                    WebkitBoxOrient: 'vertical',
                                                    overflow: 'hidden',
                                                    textOverflow: 'ellipsis',
                                                    minHeight: { xs: 40, sm: 32, md: 34, lg: 36, xl: 40 },
                                                }}
                                            >
                                                {event.event_description || 'No description available'}
                                            </Typography>
                                        </motion.div>

                                        {/* Time with Icon */}
                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
                                        >
                                            <Typography
                                                fontSize={{
                                                    xs: 12,
                                                    sm: 10,
                                                    md: 11,
                                                    lg: 12,
                                                    xl: 13
                                                }}
                                                color="#EAF2FF"
                                                mb={1}
                                                display="flex"
                                                alignItems="center"
                                                gap={1}
                                                textAlign="left"
                                            >
                                                <AccessTimeIcon sx={{
                                                    fontSize: {
                                                        xs: 16,
                                                        sm: 14,
                                                        md: 16,
                                                        lg: 18,
                                                        xl: 20
                                                    },
                                                    flexShrink: 0
                                                }} />
                                                <Box component="span" sx={{
                                                    display: '-webkit-box',
                                                    WebkitLineClamp: 1,
                                                    WebkitBoxOrient: 'vertical',
                                                    overflow: 'hidden',
                                                }}>
                                                    {formatEventDate(event.start_date, event.end_date)}
                                                </Box>
                                            </Typography>
                                        </motion.div>

                                        {/* Location with Icon */}
                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: 0.35 + (index * 0.1) }}
                                        >
                                            <Typography
                                                fontSize={{
                                                    xs: 12,
                                                    sm: 10,
                                                    md: 11,
                                                    lg: 12,
                                                    xl: 13
                                                }}
                                                color="#EAF2FF"
                                                mb={1}
                                                display="flex"
                                                alignItems="center"
                                                gap={1}
                                                textAlign="left"
                                            >
                                                <LocationOnIcon sx={{
                                                    fontSize: {
                                                        xs: 16,
                                                        sm: 14,
                                                        md: 16,
                                                        lg: 18,
                                                        xl: 20
                                                    },
                                                    flexShrink: 0
                                                }} />
                                                <Box component="span" sx={{
                                                    display: '-webkit-box',
                                                    WebkitLineClamp: 1,
                                                    WebkitBoxOrient: 'vertical',
                                                    overflow: 'hidden',
                                                }}>
                                                    {formatLocation(event)} {event.mode_of_event ? `• ${event.mode_of_event}` : ""}
                                                </Box>
                                            </Typography>
                                        </motion.div>

                                        {/* Time Zone with Icon */}
                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: 0.4 + (index * 0.1) }}
                                        >
                                            <Typography
                                                fontSize={{
                                                    xs: 12,
                                                    sm: 10,
                                                    md: 11,
                                                    lg: 12,
                                                    xl: 13
                                                }}
                                                color="#EAF2FF"
                                                mb={2}
                                                display="flex"
                                                alignItems="center"
                                                gap={1}
                                                textAlign="left"
                                            >
                                                <LanguageIcon sx={{
                                                    fontSize: {
                                                        xs: 16,
                                                        sm: 14,
                                                        md: 16,
                                                        lg: 18,
                                                        xl: 20
                                                    },
                                                    flexShrink: 0
                                                }} />
                                                <Box component="span">
                                                    {event.timezone || "IST (GMT +5:30)"}
                                                </Box>
                                            </Typography>
                                        </motion.div>

                                        {/* Price with animation */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 15 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: 0.45 + (index * 0.1) }}
                                        >
                                            <Typography
                                                fontSize={{
                                                    xs: 16,
                                                    sm: 13,
                                                    md: 14,
                                                    lg: 15,
                                                    xl: 16
                                                }}
                                                fontWeight={600}
                                                color="#fff"
                                                mb={2}
                                                textAlign={{ xs: 'center', sm: 'left' }}
                                            >
                                                USD $ {event.minPrice}
                                                {!event.isFree && (
                                                    <Typography
                                                        component="span"
                                                        sx={{
                                                            fontSize: {
                                                                xs: 12,
                                                                sm: 10,
                                                                md: 11,
                                                                lg: 12,
                                                                xl: 13
                                                            },
                                                            ml: 1,
                                                            color: '#EAF2FF',
                                                            textDecoration: 'line-through',
                                                        }}
                                                    >
                                                        $ 500
                                                    </Typography>
                                                )}
                                            </Typography>
                                        </motion.div>

                                        {/* BUTTONS with animation */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: 0.5 + (index * 0.1) }}
                                        >
                                            <Stack direction="row" spacing={1} mt="auto">
                                                <Button
                                                    fullWidth
                                                    component={Link}
                                                    href={`/events/${event.eventSlug}`}
                                                    sx={{
                                                        textTransform: 'none',
                                                        color: '#fff',
                                                        border: '1px solid rgba(255,255,255,0.6)',
                                                        background: 'linear-gradient(135deg, #8dbdf3ff, #91caffff)',
                                                        borderRadius: 2,
                                                        fontSize: {
                                                            xs: 12,
                                                            sm: 10,
                                                            md: 11,
                                                            lg: 12,
                                                            xl: 13
                                                        },
                                                        py: {
                                                            xs: 0.75,
                                                            sm: 0.5,
                                                            md: 0.625,
                                                            lg: 0.75,
                                                            xl: 0.875
                                                        },
                                                        minHeight: { xs: 36, sm: 32, md: 36, lg: 40, xl: 44 },
                                                        '&:hover': {
                                                            background: 'linear-gradient(135deg, #7dace3, #81baff)',
                                                        }
                                                    }}
                                                >
                                                    Read More
                                                </Button>

                                                <Button
                                                    onClick={() => router.push(`/events/payment/${event.eventSlug}`)}
                                                    fullWidth
                                                    sx={{
                                                        textTransform: 'none',
                                                        border: '1px solid rgba(255, 255, 255, 0.91)',
                                                        background: 'linear-gradient(135deg, #097cffff, #91caffff)',
                                                        color: '#fff',
                                                        borderRadius: 2,
                                                        fontSize: {
                                                            xs: 12,
                                                            sm: 10,
                                                            md: 11,
                                                            lg: 12,
                                                            xl: 13
                                                        },
                                                        py: {
                                                            xs: 0.75,
                                                            sm: 0.5,
                                                            md: 0.625,
                                                            lg: 0.75,
                                                            xl: 0.875
                                                        },
                                                        minHeight: { xs: 36, sm: 32, md: 36, lg: 40, xl: 44 },
                                                        '&:hover': {
                                                            backgroundColor: '#1572c9',
                                                        },
                                                    }}
                                                >
                                                    Book Now
                                                </Button>
                                            </Stack>
                                        </motion.div>
                                    </Box>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
}