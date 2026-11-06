'use client';




import {
 Box,
 Typography,
 Container,
 Button,
 Stack,
 useTheme,
 useMediaQuery,
} from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axiosInstance from "@/lib/axios";
import { useRef } from 'react';
import PauseIcon from '@mui/icons-material/Pause';
import CategoryDropdown from './CategoryDropdown';




export default function LatestEpisodes() {
 const theme = useTheme();
 const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
 const [showAll, setShowAll] = useState(false);
 const [currentTime, setCurrentTime] = useState({});
 const [duration, setDuration] = useState({});
 const [volume, setVolume] = useState({});
 const [showControls, setShowControls] = useState({});
 const [searchQuery, setSearchQuery] = useState('');


 const [categories, setCategories] = useState([]);
 const [selectedCategory, setSelectedCategory] = useState('');




 const [allPodcasts, setAllPodcasts] = useState([]);
 const [selectedPodcast, setSelectedPodcast] = useState(null);
 const [playingId, setPlayingId] = useState(null);
 const audioRefs = useRef({});




 useEffect(() => {
   const fetchEpisodes = async () => {
     try {
       const res = await axiosInstance.get('/frontendApis/getpodcasts', {
         params: { size: 100, page: 0, search: '' },
       });
       console.log(res, "episodesres");




       // ✅ Store podcasts directly, don't flatten
       const podcasts = (res?.data?.data?.podcasts || []).sort(
         (a, b) => a.index_position - b.index_position
       );
       setAllPodcasts(podcasts);


       const uniqueCats = [];
       const seen = new Set();
       podcasts.forEach(p => {
         const cat = p.category_id;
         if (cat?._id && !seen.has(cat._id)) {
           seen.add(cat._id);
           uniqueCats.push(cat);
         }
       });
       setCategories(uniqueCats);
     } catch (error) {
       console.error('API error:', error);
     }
   };
   fetchEpisodes();
 }, []);




 // Displayed podcasts (for the podcast grid view)
 // const displayedPodcasts = showAll ? allPodcasts : allPodcasts.slice(0, 4);


 const filteredPodcasts = allPodcasts.filter(p => {
   const matchesSearch = p.title?.toLowerCase().includes(searchQuery.toLowerCase());
   const matchesCategory = !selectedCategory ||
     (p.category_id?._id || p.category_id) === selectedCategory;
   return matchesSearch && matchesCategory;
 });
 const displayedPodcasts = showAll ? filteredPodcasts : filteredPodcasts.slice(0, 4);




 // Helper to build audio key for episode list view
 const episodeKey = (podcastId, index) => `${podcastId}_ep_${index}`;




 return (
   <Container maxWidth="xl" sx={{ py: 6 }}>
     {/* GRADIENT CONTAINER */}
     <motion.div
       initial={{ opacity: 0, y: 50 }}
       whileInView={{ opacity: 1, y: 0 }}
       viewport={{ once: true, amount: 0.1 }}
       transition={{ duration: 0.8 }}
     >
       <Box
         sx={{
           background: 'linear-gradient(135deg, #FF7A6B, #FFB87A)',
           borderRadius: 4,
           p: { xs: 3, md: 5 },
           mb: 6,
         }}
       >
         {/* HEADER */}
         <Stack
           direction={{ xs: 'column', sm: 'row' }}
           alignItems="center"
           spacing={2}
           mb={4}
         >
           {/* LEFT: TITLE */}
           <Box sx={{ flex: 1 }}>
             <motion.div
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, amount: 0.1 }}
               transition={{ duration: 0.5, delay: 0.1 }}
             >
               {/* Show back button + podcast name when inside a podcast */}
               {selectedPodcast ? (
                 <Stack direction="row" alignItems="center" spacing={1}>
                   <Box
                     onClick={() => {
                       setSelectedPodcast(null);
                       setShowControls({});
                       setPlayingId(null);
                       Object.values(audioRefs.current).forEach(a => a?.pause());
                       audioRefs.current = {};
                     }}
                     sx={{
                       cursor: 'pointer',
                       display: 'flex',
                       alignItems: 'center',
                       justifyContent: 'center',
                       width: 32,
                       height: 32,
                       borderRadius: '50%',
                       background: 'rgba(255,255,255,0.25)',
                       '&:hover': { background: 'rgba(255,255,255,0.4)' },
                       flexShrink: 0,
                     }}
                   >
                     <ArrowBackIcon sx={{ fontSize: 18, color: '#fff' }} />
                   </Box>
                   <Typography fontSize={{ xs: 16, sm: 20 }} fontWeight={700} color="#fff">
                     {selectedPodcast.title}
                   </Typography>
                 </Stack>
               ) : (
                 <Typography fontSize={{ xs: 20, sm: 22 }} fontWeight={700} color="#fff">
                   All of our latest podcasts
                 </Typography>
               )}
             </motion.div>
           </Box>




           {/* CENTER: DESCRIPTION */}
           {/* <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, amount: 0.1 }}
             transition={{ duration: 0.5, delay: 0.2 }}
           >
             <Typography
               fontSize={14}
               color="rgba(255,255,255,0.9)"
               lineHeight={1.6}
               textAlign="center"
               sx={{ maxWidth: 420, mx: 'auto', flex: 1 }}
             >
               {selectedPodcast
                 ? `${selectedPodcast.episodes?.length || 0} episode${selectedPodcast.episodes?.length !== 1 ? 's' : ''}`
                 : 'Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.'}
             </Typography>
           </motion.div> */}


           {/* CENTER: SEARCH */}
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, amount: 0.1 }}
             transition={{ duration: 0.5, delay: 0.2 }}
             style={{ flex: 1 }}
           >
             {!selectedPodcast ? (
               <Box
                 sx={{
                   display: 'flex',
                   alignItems: 'center',
                   background: 'rgba(255,255,255,0.2)',
                   border: '1px solid rgba(255,255,255,0.5)',
                   borderRadius: 2,
                   px: 1.5,
                   py: 0.6,
                   maxWidth: 320,
                   mx: 'auto',
                   backdropFilter: 'blur(4px)',
                 }}
               >
                 <Typography sx={{ fontSize: 15, mr: 1, color: '#fff', opacity: 0.8 }}>🔍</Typography>
                 <input
                   type="text"
                   placeholder="Search podcasts..."
                   value={searchQuery}
                   onChange={e => setSearchQuery(e.target.value)}
                   style={{
                     background: 'transparent',
                     border: 'none',
                     outline: 'none',
                     color: '#fff',
                     fontSize: 13,
                     width: '100%',
                     fontFamily: 'inherit',
                   }}
                 />
                 {searchQuery && (
                   <Typography
                     onClick={() => setSearchQuery('')}
                     sx={{ fontSize: 14, color: 'rgba(255,255,255,0.8)', cursor: 'pointer', ml: 1 }}
                   >
                     ✕
                   </Typography>
                 )}
               </Box>
             ) : (
               <Typography fontSize={14} color="rgba(255,255,255,0.9)" textAlign="center">
                 {selectedPodcast.episodes?.length || 0} episode{selectedPodcast.episodes?.length !== 1 ? 's' : ''}
               </Typography>
             )}
           </motion.div>




           {/* RIGHT: BUTTON — hide when inside a podcast */}
           {/* <Box sx={{ flex: 1, textAlign: 'right' }}>
             {!selectedPodcast && (
               <motion.div
                 initial={{ opacity: 0, x: 20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true, amount: 0.1 }}
                 transition={{ duration: 0.5, delay: 0.3 }}
               >
                 <Button
                   variant="contained"
                   onClick={() => setShowAll(prev => !prev)}
                   sx={{
                     bgcolor: '#111',
                     textTransform: 'none',
                     fontSize: 13,
                     px: 2.5,
                     '&:hover': { bgcolor: '#000' },
                   }}
                 >
                   {showAll ? 'Show Less' : 'All podcasts'}
                 </Button>
               </motion.div>
             )}
           </Box> */}
           {/* RIGHT: BUTTON — hide when inside a podcast */}
           <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 1.5 }}>
             {!selectedPodcast && (
               <motion.div
                 initial={{ opacity: 0, x: 20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true, amount: 0.1 }}
                 transition={{ duration: 0.5, delay: 0.3 }}
                 style={{ display: 'flex', alignItems: 'center', gap: 12 }}
               >
                 {/* Category Dropdown */}
                 {categories.length > 0 && (
                   <CategoryDropdown
                     categories={categories}
                     selectedCategory={selectedCategory}
                     setSelectedCategory={setSelectedCategory}
                   />
                 )}


                 {/* Show All Button */}
                 <Button
                   variant="contained"
                   onClick={() => setShowAll(prev => !prev)}
                   sx={{
                     bgcolor: '#111',
                     textTransform: 'none',
                     fontSize: 13,
                     px: 2.5,
                     display: { xs: 'none', sm: 'none', md: 'inline-flex' },
                     '&:hover': { bgcolor: '#000' },
                   }}
                   
                 >
                   {showAll ? 'Show Less' : 'All podcasts'}
                 </Button>
               </motion.div>
             )}
           </Box>
         </Stack>




         {/* ─────────────────────────────────────────────────
            VIEW 1: PODCAST GRID (no podcast selected)
        ───────────────────────────────────────────────── */}
         {!selectedPodcast && (
           <Box
             sx={{
               display: 'grid',
               gridTemplateColumns: {
                 xs: '1fr',
                 sm: 'repeat(4, 1fr)',
                 md: 'repeat(4, 1fr)',
               },
               gap: 2.5,
               mb: isMobile ? 4 : 0,
             }}
           >
             {displayedPodcasts.map((podcast, index) => (
               <motion.div
                 key={podcast._id}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, amount: 0.1 }}
                 transition={{ duration: 0.5, delay: index * 0.1 }}
               >
                 <Box
                   onClick={() => setSelectedPodcast(podcast)}


                   sx={{
                     background: 'rgba(255,255,255,0.18)',
                     borderRadius: 2,
                     p: 2,
                     display: 'flex',
                     flexDirection: 'column',
                     border: '1px solid #fff',
                     cursor: 'pointer',
                     transition: 'all 0.3s ease',
                     '&:hover': {
                       background: 'rgba(255,255,255,0.25)',
                       transform: 'translateY(-2px)',
                     },
                   }}
                 >
                   {/* Thumbnail */}
                   <Box
                     sx={{
                       position: 'relative',
                       width: '100%',
                       paddingTop: '56.25%',
                       background: '#fff',
                       borderRadius: 1.5,
                       mb: 1.5,
                       overflow: 'hidden',
                     }}
                   >
                     {podcast.image && (
                       <img
                         src={`${process.env.NEXT_PUBLIC_API_URL}/${podcast.image}`}
                         style={{
                           position: 'absolute',
                           top: 0,
                           left: 0,
                           width: '100%',
                           height: '100%',
                           objectFit: 'cover',
                         }}
                         alt={podcast.title}
                       />
                     )}
                   </Box>




                   {/* Episode count */}
                   <Typography fontSize={11} color="rgba(255,255,255,0.9)" mb={0.5}>
                     {podcast.episodes?.length || 0} episode{podcast.episodes?.length !== 1 ? 's' : ''}
                   </Typography>


                   {podcast.createdAt && (
                     <Typography fontSize={11} color="rgba(255,255,255,0.75)" mb={0.5}>
                       📅 {new Date(podcast.createdAt).toLocaleDateString('en-US', {
                         month: 'long', day: 'numeric', year: 'numeric'
                       })}
                     </Typography>
                   )}




                   {/* Podcast title */}
                   <Typography
                     fontSize={13}
                     fontWeight={600}
                     color="#fff"
                     lineHeight={1.4}
                     mb={1.5}
                     sx={{
                       flexGrow: 1,
                       overflow: 'hidden',
                       textOverflow: 'ellipsis',
                       display: '-webkit-box',
                       WebkitLineClamp: 2,
                       WebkitBoxOrient: 'vertical',
                     }}
                   >
                     {podcast.title}
                   </Typography>




                   {/* Listen button */}
                   <Stack direction="row" alignItems="center" spacing={1}>
                     <Box
                       sx={{
                         width: 22,
                         height: 22,
                         borderRadius: '50%',
                         background: '#1E88E5',
                         display: 'flex',
                         alignItems: 'center',
                         justifyContent: 'center',
                       }}
                     >
                       <PlayArrowIcon sx={{ fontSize: 16, color: '#fff' }} />
                     </Box>
                     <Typography fontSize={12} color="rgba(255,255,255,0.9)">
                       View Episodes
                     </Typography>
                   </Stack>
                 </Box>
               </motion.div>
             ))}
           </Box>
         )}




         {/* ─────────────────────────────────────────────────
            VIEW 2: EPISODE LIST (podcast selected)
        ───────────────────────────────────────────────── */}
         {selectedPodcast && (
           <Box
             sx={{
               display: 'grid',
               gridTemplateColumns: {
                 xs: '1fr',
                 sm: 'repeat(4, 1fr)',
                 md: 'repeat(4, 1fr)',
               },
               gap: 2.5,
               mb: isMobile ? 4 : 0,
             }}
           >
             {(selectedPodcast.episodes || []).map((episode, index) => {
               const epKey = episodeKey(selectedPodcast._id, index);




               return (
                 <motion.div
                   key={epKey}
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true, amount: 0.1 }}
                   transition={{ duration: 0.5, delay: index * 0.1 }}
                 >
                   <Box
                     sx={{
                       background: 'rgba(255,255,255,0.18)',
                       borderRadius: 2,
                       p: 2,
                       display: 'flex',
                       flexDirection: 'column',
                       border: '1px solid #fff',
                       transition: 'all 0.3s ease',
                       '&:hover': {
                         background: 'rgba(255,255,255,0.25)',
                         transform: 'translateY(-2px)',
                       },
                     }}
                   >
                     {/* Thumbnail */}
                     <Box sx={{ mb: 1.5 }}>
                       <Box
                         sx={{
                           position: 'relative',
                           width: '100%',
                           paddingTop: '56.25%',
                           background: '#fff',
                           borderRadius: 1.5,
                           mb: 1,
                           overflow: 'hidden',
                         }}
                       >
                         {selectedPodcast.image && (
                           <img
                             src={`${process.env.NEXT_PUBLIC_API_URL}/${selectedPodcast.image}`}
                             style={{
                               position: 'absolute',
                               top: 0,
                               left: 0,
                               width: '100%',
                               height: '100%',
                               objectFit: 'cover',
                             }}
                             alt={episode.episodeTitle}
                           />
                         )}
                       </Box>




                       {/* Hidden Audio Element */}
                       {episode.audioFile && (
                         <audio
                           ref={el => {
                             audioRefs.current[epKey] = el;
                             if (el) {
                               if (!volume[epKey]) {
                                 setVolume(prev => ({ ...prev, [epKey]: 1 }));
                                 el.volume = 1;
                               }
                               el.addEventListener('loadedmetadata', () => {
                                 setDuration(prev => ({ ...prev, [epKey]: el.duration }));
                               });
                               el.addEventListener('timeupdate', () => {
                                 setCurrentTime(prev => ({ ...prev, [epKey]: el.currentTime }));
                               });
                               el.addEventListener('ended', () => {
                                 setPlayingId(null);
                               });
                             }
                           }}
                           src={`${process.env.NEXT_PUBLIC_API_URL}/${episode.audioFile}`}
                           style={{ display: 'none' }}
                         />
                       )}
                     </Box>




                     {/* Date & Duration */}
                     <Typography fontSize={11} color="rgba(255,255,255,0.9)" mb={0.5}>
                       {episode.episodeDate !== 'instant'
                         ? new Date(episode.episodeDate).toLocaleDateString('en-US', {
                           month: 'long',
                           day: 'numeric',
                           year: 'numeric',
                         })
                         : 'Instant'}{' '}
                       • {episode.duration} min
                     </Typography>




                     {/* Episode Title */}
                     <Typography
                       fontSize={13}
                       fontWeight={600}
                       color="#fff"
                       lineHeight={1.4}
                       mb={1.5}
                       sx={{
                         flexGrow: 1,
                         overflow: 'hidden',
                         textOverflow: 'ellipsis',
                         display: '-webkit-box',
                         WebkitLineClamp: 2,
                         WebkitBoxOrient: 'vertical',
                       }}
                     >
                       Ep{index + 1}: {episode.episodeTitle}
                     </Typography>




                     {/* Audio Controls */}
                     {!showControls[epKey] ? (
                       // Listen Now Button
                       <Stack
                         direction="row"
                         alignItems="center"
                         spacing={1}
                         onClick={() => {
                           setShowControls(prev => ({ ...prev, [epKey]: true }));
                           // Auto-play immediately
                           setTimeout(() => {
                             const audio = audioRefs.current[epKey];
                             if (!audio) return;
                             Object.values(audioRefs.current).forEach(a => a?.pause());
                             audio.play();
                             setPlayingId(epKey);
                           }, 50);
                         }}
                         sx={{ cursor: 'pointer', minHeight: 44 }}
                       >
                         <Box
                           sx={{
                             width: 22,
                             height: 22,
                             borderRadius: '50%',
                             background: '#1E88E5',
                             display: 'flex',
                             alignItems: 'center',
                             justifyContent: 'center',
                           }}
                         >
                           <PlayArrowIcon sx={{ fontSize: 16, color: '#fff' }} />
                         </Box>
                         <Typography fontSize={12} color="rgba(255,255,255,0.9)">
                           Listen Now
                         </Typography>
                       </Stack>
                     ) : (
                       // Audio Player
                       <Box
                         sx={{
                           background: 'rgba(255,255,255,0.2)',
                           borderRadius: 1.5,
                           p: 1,
                           border: '1px solid rgba(255,255,255,0.3)',
                         }}
                       >
                         {/* Progress Bar */}
                         <Box
                           sx={{
                             width: '100%',
                             height: 4,
                             background: 'rgba(255,255,255,0.3)',
                             borderRadius: 2,
                             mb: 1,
                             cursor: 'pointer',
                             position: 'relative',
                           }}
                           onClick={e => {
                             const audio = audioRefs.current[epKey];
                             if (audio && duration[epKey]) {
                               const rect = e.currentTarget.getBoundingClientRect();
                               const percent = (e.clientX - rect.left) / rect.width;
                               audio.currentTime = percent * duration[epKey];
                             }
                           }}
                         >
                           <Box
                             sx={{
                               width: `${((currentTime[epKey] || 0) / (duration[epKey] || 1)) * 100}%`,
                               height: '100%',
                               background: '#fff',
                               borderRadius: 2,
                               transition: 'width 0.1s ease',
                             }}
                           />
                         </Box>




                         {/* Controls Row */}
                         <Stack direction="row" alignItems="center" spacing={1}>
                           {/* Play/Pause */}
                           <Box
                             onClick={() => {
                               const audio = audioRefs.current[epKey];
                               if (!audio) return;
                               if (playingId === epKey) {
                                 audio.pause();
                                 setPlayingId(null);
                               } else {
                                 Object.values(audioRefs.current).forEach(a => a?.pause());
                                 audio.play();
                                 setPlayingId(epKey);
                               }
                             }}
                             sx={{
                               width: 28,
                               height: 28,
                               borderRadius: '50%',
                               background: playingId === epKey ? '#1565C0' : '#1E88E5',
                               display: 'flex',
                               alignItems: 'center',
                               justifyContent: 'center',
                               cursor: 'pointer',
                               transition: 'all 0.2s',
                               '&:hover': { transform: 'scale(1.1)' },
                             }}
                           >
                             {playingId === epKey ? (
                               <PauseIcon sx={{ fontSize: 16, color: '#fff' }} />
                             ) : (
                               <PlayArrowIcon sx={{ fontSize: 16, color: '#fff' }} />
                             )}
                           </Box>




                           {/* Time */}
                           <Typography
                             fontSize={10}
                             color="rgba(255,255,255,0.9)"
                             sx={{ minWidth: 70 }}
                           >
                             {Math.floor(currentTime[epKey] || 0)}s /{' '}
                             {Math.floor(duration[epKey] || 0)}s
                           </Typography>




                           {/* Volume */}
                           <Box
                             sx={{
                               flex: 1,
                               display: 'flex',
                               alignItems: 'center',
                               gap: 0.5,
                             }}
                           >
                             <Typography fontSize={10} color="rgba(255,255,255,0.9)">
                               🔊
                             </Typography>
                             <input
                               type="range"
                               min="0"
                               max="1"
                               step="0.01"
                               value={volume[epKey] || 1}
                               onChange={e => {
                                 const newVolume = parseFloat(e.target.value);
                                 setVolume(prev => ({ ...prev, [epKey]: newVolume }));
                                 const audio = audioRefs.current[epKey];
                                 if (audio) audio.volume = newVolume;
                               }}
                               style={{
                                 width: '100%',
                                 height: 3,
                                 cursor: 'pointer',
                                 accentColor: '#fff',
                               }}
                             />
                           </Box>




                           {/* Close */}
                           <Typography
                             onClick={() => {
                               const audio = audioRefs.current[epKey];
                               if (audio) {
                                 audio.pause();
                                 audio.currentTime = 0;
                               }
                               if (playingId === epKey) setPlayingId(null);
                               setShowControls(prev => ({ ...prev, [epKey]: false }));
                             }}
                             sx={{
                               fontSize: 16,
                               color: 'rgba(255,255,255,0.9)',
                               cursor: 'pointer',
                               '&:hover': { color: '#fff' },
                             }}
                           >
                             ✕
                           </Typography>
                         </Stack>
                       </Box>
                     )}
                   </Box>
                 </motion.div>
               );
             })}
           </Box>
         )}




         {/* Mobile show all toggle — only in podcast grid view */}
         {isMobile && !selectedPodcast && (
           <motion.div
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true, amount: 0.1 }}
             transition={{ duration: 0.5, delay: 0.4 }}
           >
             <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
               <Typography
                 onClick={() => setShowAll(!showAll)}
                 sx={{
                   color: '#fff',
                   fontSize: 14,
                   fontWeight: 500,
                   cursor: 'pointer',
                   textDecoration: 'underline',
                   textUnderlineOffset: '4px',
                   textDecorationColor: 'rgba(255,255,255,0.7)',
                   '&:hover': {
                     textDecorationColor: '#fff',
                     textDecorationThickness: '2px',
                   },
                 }}
               >
                 {showAll ? 'Show Less' : 'View All'}
               </Typography>
             </Box>
           </motion.div>
         )}
       </Box>
     </motion.div>




     {/* BOTTOM CALLOUT */}
     <motion.div
       initial={{ opacity: 0, y: 50 }}
       whileInView={{ opacity: 1, y: 0 }}
       viewport={{ once: true, amount: 0.1 }}
       transition={{ duration: 0.8, delay: 0.1 }}
     >
       <Box
         sx={{
           background: 'linear-gradient(135deg, #20BFC4, #0EA5A8)',
           borderRadius: 3,
           px: { xs: 3, md: 5 },
           py: { xs: 4, md: 5 },
           display: 'grid',
           gridTemplateColumns: { xs: '1fr', sm: '1.3fr 1fr' },
           gap: 4,
           color: '#fff',
           border: '1px solid #fff',
           textAlign: { xs: 'center', sm: 'left' },
         }}
       >
         {/* LEFT SIDE */}
         <Box
           sx={{
             display: 'flex',
             flexDirection: 'column',
             alignItems: { xs: 'center', sm: 'flex-start' },
           }}
         >
           {[
             "This isn't just a podcast",
             '– it\'s a vibe',
             '– it\'s a relational field',
             '– it\'s a movement.',
             '– it\'s Authentic Relating Vibes.',
           ].map((line, index) => (
             <motion.div
               key={index}
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, amount: 0.1 }}
               transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
             >
               <Typography
                 fontSize={18}
                 fontWeight={600}
                 lineHeight={1.6}
                 sx={{ fontFamily: "'Poppins', sans-serif" }}
               >
                 {line}
               </Typography>
             </motion.div>
           ))}
         </Box>




         {/* RIGHT SIDE */}
         <Box
           sx={{
             display: 'flex',
             flexDirection: 'column',
             alignItems: { xs: 'center', sm: 'flex-start' },
           }}
         >
           {[
             "Whether you're a coach, leader, facilitator, seeker, or simply",
             'someone longing for real connection in a disconnected world,',
             'this podcast is space to slow down, tune in, and come home',
             'to yourself and others.',
           ].map((line, index) => (
             <motion.div
               key={index}
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, amount: 0.1 }}
               transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
             >
               <Typography
                 fontSize={13}
                 lineHeight={1.7}
                 sx={{
                   fontFamily: "'Inter', sans-serif",
                   maxWidth: { xs: '90%', sm: '100%' },
                 }}
               >
                 {line}
               </Typography>
             </motion.div>
           ))}
         </Box>
       </Box>
     </motion.div>
   </Container>
 );
}
