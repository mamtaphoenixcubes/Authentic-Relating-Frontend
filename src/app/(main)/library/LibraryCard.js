'use client';

import { useRouter } from 'next/navigation';
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    Box,
    Chip,
} from '@mui/material';

export default function LibraryCard({
    item,
    type,
}) {

    const router = useRouter();

    const triggerDownload = async (filePath, title) => {

        if (!filePath) return;

        const baseURL =
            process.env.NEXT_PUBLIC_API_URL ||
            'http://192.168.1.17:8000';

        const fileUrl = filePath.startsWith('http')
            ? filePath
            : `${baseURL}/${filePath.replace(/^\/+/, '')}`;

        try {

            const response = await fetch(fileUrl);

            const blob = await response.blob();

            const blobUrl = window.URL.createObjectURL(blob);

            const link = document.createElement('a');

            link.href = blobUrl;

            link.download =
                filePath.split('/').pop() ||
                `${title}.pdf`;

            document.body.appendChild(link);

            link.click();

            document.body.removeChild(link);

            window.URL.revokeObjectURL(blobUrl);

        } catch {

            window.open(fileUrl, '_blank');

        }

    };

    const handleCardClick = () => {

        switch (type) {

            case 'books':

                if (item.allowDownload) {

                    triggerDownload(
                        item.document,
                        item.title
                    );

                } else {

                    router.push(
                        `/mybooks/read/${item._id}`
                    );

                }

                break;

            case 'course':

                router.push(
                    `/onlinecourse/${item._id}`
                );

                break;

            case 'events':

                router.push(
                    `/events/${item._id}`
                );

                break;

            case 'podcast':

                router.push(
                    `/podcast/${item._id}`
                );

                break;

            default:

                break;

        }

    };

    const getTitle = () => {

        switch (type) {

            case 'books':
                return item.title;

            case 'course':
                return item.course_title;

            case 'events':
                return item.event_name;

            case 'podcast':
                return item.title;

            default:
                return '';

        }

    };

    const getImage = () => {

        if (type === 'books') {

            return item.image
                ? `${process.env.NEXT_PUBLIC_API_URL}/${item.image}`
                : '/Book.png';

        }

        return '/placeholder.jpg';

    };

    const getBadge = () => {

        switch (type) {

            case 'books':
                return item.allowDownload
                    ? 'Downloadable'
                    : 'Readable';

            case 'course':
                return 'Course';

            case 'events':
                return 'Event';

            case 'podcast':
                return 'Podcast';

            default:
                return '';

        }

    };

    return (

        <Card

            onClick={handleCardClick}

            className="card"

            sx={{

                width: '100%',

                maxWidth: {

                    xs: 280,

                    sm: 320,

                    md: 420,

                    lg: 520,

                },

                minHeight: {

                    xs: 320,

                    sm: 340,

                    md: 360,

                    lg: 380,

                },

                borderRadius: 3,

                overflow: 'hidden',

                cursor: 'pointer',

                boxShadow:
                    '0 8px 24px rgba(0,0,0,.08)',

                transition: '.35s',

                '&:hover': {

                    transform: 'translateY(-8px)',

                    boxShadow:
                        '0 22px 40px rgba(0,0,0,.14)',

                },

                '&:hover .card-image': {

                    transform: 'scale(1.08)',

                },

            }}

        >

            <Box

                sx={{

                    height: {

                        xs: 180,

                        md: 260,

                    },

                    overflow: 'hidden',

                }}

            >

                <CardMedia

                    component="img"

                    image={getImage()}

                    className="card-image"

                    sx={{

                        width: '100%',

                        height: '100%',

                        objectFit: 'cover',

                        transition:
                            'transform .45s',

                    }}

                />

            </Box>

            <CardContent

                sx={{

                    p: 2.5,

                    display: 'flex',

                    flexDirection: 'column',

                    height: '100%',

                }}

            >

                <Box

                    display="flex"

                    justifyContent="space-between"

                    alignItems="center"

                    mb={2}

                >

                    <Chip

                        label="✔ Purchased"

                        size="small"

                        sx={{

                            bgcolor: '#E6FDF9',

                            color: '#0A847E',

                            fontWeight: 700,

                        }}

                    />

                    <Chip

                        label={getBadge()}

                        size="small"

                        sx={{

                            bgcolor: '#EFF6FF',

                            color: '#087EDF',

                            fontWeight: 600,

                        }}

                    />

                </Box>

                <Typography

                    fontWeight={700}

                    color="#1E293B"

                    fontSize={20}

                    mb={1}

                >

                    {getTitle()}

                </Typography>
                <Typography
                    sx={{
                        color: "#64748B",
                        fontSize: 14,
                        lineHeight: 1.7,
                        mb: 3,
                        flexGrow: 1,
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                    }}
                >
                    {type === "books" &&
                        (item.allowDownload
                            ? "This book is available for download. Click anywhere on the card to download your copy."
                            : "Continue reading this book from your personal library.")}

                    {type === "course" &&
                        "Continue learning from where you left off."}

                    {type === "events" &&
                        "View your event details and upcoming schedule."}

                    {type === "podcast" &&
                        "Listen to your purchased podcast anytime."}
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: 2,
                    }}
                >
                    <Typography
                        fontSize={13}
                        color="#94A3B8"
                    >
                        {type === "books" && "📖 Digital Book"}

                        {type === "course" && "🎓 Online Course"}

                        {type === "events" && "📅 Event"}

                        {type === "podcast" && "🎧 Podcast"}
                    </Typography>


                </Box>

                <Box
                    sx={{
                        mt: "auto",
                        pt: 2,
                        borderTop: "1px solid #EEF2F7",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <Typography
                        sx={{
                            color: "#087EDF",
                            fontWeight: 600,
                            fontSize: 14,
                        }}
                    >
                        {/* {type === "books"
                            ? item.allowDownload
                                ? "Download"
                                : "Read Now"
                            : type === "course"
                                ? "Continue Course"
                                : type === "events"
                                    ? "View Event"
                                    : "Listen Now"} */}
                    </Typography>

                    <Box
                        sx={{
                            width: 34,
                            height: 34,
                            borderRadius: "50%",
                            background:
                                "linear-gradient(98.48deg,#95C4FF 0%,#087EDF 100%)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#fff",
                            fontSize: 18,
                            transition: ".3s",

                            ".card:hover &": {
                                transform: "translateX(4px)",
                            },
                        }}
                    >
                        →
                    </Box>
                </Box>

            </CardContent>

        </Card>

    );

}