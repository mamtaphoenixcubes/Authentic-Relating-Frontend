'use client';

import React, { useRef } from "react";
import {
   Box,
   Container,
   Grid,
   Typography,
   Stack,
   Card,
} from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import SiteContainer from "../../_components/common/SiteContainer";
import { useTheme } from "@mui/material/styles";

const MotionCard = motion(Card);

const items = [
   { text: "Inquire about our Authentic Relating workshops, joy labs, games, retreats and training programs" },
   { text: "Book online or in person corporate trainings, coaching, speaking, or consulting" },
   { text: "Request a media appearance or podcast interview" },
   { text: "Anything related to Authentic Relating, Relational Leadership, Human Connection" },
   { text: "Share a story, insight, or feedback" },
   { text: "Or simply to say hello or hi – we love that too" },
];

/* =====================
  MOTION VARIANTS
===================== */
const containerVariants = {
   hidden: {},
   visible: {
       transition: {
           staggerChildren: 0.15,
       },
   },
};

const itemVariants = {
   hidden: { opacity: 0, y: 24 },
   visible: {
       opacity: 1,
       y: 0,
       transition: { duration: 0.6, ease: "easeOut" },
   },
};

const slideInLeftVariants = {
   hidden: { opacity: 0, x: -60, scale: 0.95 },
   visible: {
       opacity: 1,
       x: 0,
       scale: 1,
       transition: {
           duration: 0.8,
           ease: "easeOut",
           type: "spring",
           stiffness: 100,
           damping: 15,
       }
   }
};

const slideInRightVariants = {
   hidden: { opacity: 0, x: 60, scale: 0.95 },
   visible: {
       opacity: 1,
       x: 0,
       scale: 1,
       transition: {
           duration: 0.8,
           ease: "easeOut",
           type: "spring",
           stiffness: 100,
           damping: 15,
       }
   }
};

const ReachOutSection = () => {
   const theme = useTheme();
   const styles = theme.custom?.reachOut;
   const sectionRef = useRef(null);
   
   // Scroll animations
   const { scrollYProgress } = useScroll({
       target: sectionRef,
       offset: ["start end", "end start"]
   });
   
   const imageY = useTransform(scrollYProgress, [0, 1], [0, -50]);
   const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 1.05]);
   const imageRotate = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0, 2]);

   return (
       <Box ref={sectionRef} sx={{ position: 'relative', overflow: 'hidden' }}>
           {/* Background decoration */}
           <Box
               sx={{
                   position: 'absolute',
                   top: '-20%',
                   right: '-10%',
                   width: '40%',
                   height: '60%',
                   borderRadius: '50%',
                   background: 'radial-gradient(circle, rgba(69, 128, 1, 0.05) 0%, transparent 70%)',
                   pointerEvents: 'none',
                   zIndex: 0,
               }}
           />
           
           <SiteContainer sx={{ pt: { xs: 2, sm: 0, md: 2 }, pb: 0 }}>
               <Container 
                   maxWidth="xl" 
                   sx={{ 
                       py: styles?.container?.py || theme.spacing(6), 
                       px: styles?.container?.px || 0,
                       position: 'relative',
                       zIndex: 1,
                   }}
               >
                   <Grid
                       container
                       spacing={styles?.grid?.container?.spacing || { xs: 4, sm: 5, md: 6 }}
                       alignItems="center"
                       sx={{
                           flexDirection: styles?.grid?.container?.flexDirection || { xs: 'column', sm: 'row' }
                       }}
                   >
                       {/* LEFT SIDE IMAGE WITH SLIDE AND PARALLAX */}
                       <Grid 
                           item 
                           xs={12} 
                           sm={6} 
                           md={5} 
                           sx={{ 
                               display: styles?.grid?.left?.display || 'flex', 
                               justifyContent: styles?.grid?.left?.justifyContent || 'center',
                               perspective: '1000px',
                           }}
                       >
                           <motion.div
                               style={{
                                   y: imageY,
                                   scale: imageScale,
                                   rotateX: imageRotate,
                                   width: '100%',
                                   display: 'flex',
                                   justifyContent: 'center',
                               }}
                           >
                               <MotionCard
                                   variants={slideInLeftVariants}
                                   whileInView="visible"
                                   initial="hidden"
                                   viewport={{ once: true, amount: 0.2 }}
                                   whileHover={{
                                       scale: 1.03,
                                       rotateY: 5,
                                       transition: { duration: 0.3 }
                                   }}
                                   sx={{
                                       width: styles?.card?.width || '100%',
                                       maxWidth: styles?.card?.maxWidth || {
                                           xs: '100%',
                                           sm: '450px',
                                           md: '480px',
                                           lg: '550px',
                                           xl: '600px'
                                       },
                                       height: styles?.card?.height || 'auto',
                                       minHeight: styles?.card?.minHeight || {
                                           xs: '220px',
                                           sm: '260px',
                                           md: '300px',
                                           lg: '340px',
                                           xl: '380px'
                                       },
                                       aspectRatio: styles?.card?.aspectRatio || {
                                           xs: '4/3',
                                           sm: '4/3',
                                           md: '16/12',
                                           lg: '16/11'
                                       },
                                       borderRadius: styles?.card?.borderRadius || {
                                           xs: theme.spacing(2.5),
                                           sm: theme.spacing(3),
                                           md: theme.spacing(3.5),
                                           lg: theme.spacing(4)
                                       },
                                       position: styles?.card?.position || 'relative',
                                       overflow: styles?.card?.overflow || 'hidden',
                                       cursor: styles?.card?.cursor || 'pointer',
                                       transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                                       transformStyle: 'preserve-3d',
                                       '&:hover': {
                                           transform: styles?.card?.hover?.transform || 'scale(1.02) translateY(-8px)',
                                           boxShadow: styles?.card?.hover?.boxShadow || '0 30px 50px -12px rgba(0,0,0,0.2)',
                                       },
                                       '&:hover img': {
                                           transform: styles?.card?.imageHover?.transform || 'scale(1.08)',
                                       },
                                       boxShadow: styles?.card?.boxShadow || '0 20px 35px -10px rgba(0,0,0,0.1)',
                                       '&::after': {
                                           content: '""',
                                           position: 'absolute',
                                           inset: 0,
                                           borderRadius: 'inherit',
                                           background: 'linear-gradient(to top, rgba(0,0,0,0.1) 0%, transparent 50%)',
                                           opacity: 0,
                                           transition: 'opacity 0.4s ease',
                                           pointerEvents: 'none',
                                           zIndex: 1,
                                       },
                                       '&:hover::after': {
                                           opacity: 1,
                                       },
                                   }}
                               >
                                   <Box
                                       sx={{
                                           position: styles?.image?.position || 'relative',
                                           width: styles?.image?.width || '100%',
                                           height: styles?.image?.height || '100%',
                                           overflow: 'hidden',
                                       }}
                                   >
                                       <Image
                                           src="/contactus/reachout.png"
                                           alt="Reach Out - Authentic Relating"
                                           fill
                                           priority
                                           sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 600px"
                                           style={{
                                               objectFit: styles?.image?.objectFit || 'cover',
                                               transition: styles?.image?.transition || 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                                           }}
                                       />
                                   </Box>
                                   
                                   {/* Image overlay with slide effect on hover */}
                                   <Box
                                       sx={{
                                           position: 'absolute',
                                           bottom: 0,
                                           left: 0,
                                           right: 0,
                                           padding: theme.spacing(3),
                                           background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)',
                                           transform: 'translateY(100%)',
                                           transition: 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                                           '.MuiCard-root:hover &': {
                                               transform: 'translateY(0)',
                                           },
                                           zIndex: 2,
                                       }}
                                   >
                                       <Typography
                                           sx={{
                                               color: '#fff',
                                               fontSize: '14px',
                                               fontWeight: 500,
                                               opacity: 0.9,
                                           }}
                                       >
                                           Connect with us
                                       </Typography>
                                       <Typography
                                           sx={{
                                               color: '#fff',
                                               fontSize: '12px',
                                               opacity: 0.7,
                                           }}
                                       >
                                           Start a conversation that matters
                                       </Typography>
                                   </Box>
                               </MotionCard>
                           </motion.div>
                       </Grid>

                       {/* RIGHT SIDE CONTENT */}
                       <Grid item xs={12} sm={6} md={7}>
                           <motion.div
                               initial="hidden"
                               whileInView="visible"
                               viewport={{ once: true, amount: 0.2 }}
                               variants={containerVariants}
                           >
                               {/* DECORATIVE LINE */}
                               {/* <motion.div 
                                   variants={itemVariants}
                                   style={{
                                       width: '60px',
                                       height: '4px',
                                       background: '#458001',
                                       borderRadius: '2px',
                                       marginBottom: theme.spacing(2),
                                       display: { xs: 'none', sm: 'block' },
                                   }}
                               /> */}

                               {/* TITLE */}
                               <motion.div variants={itemVariants}>
                                   <Typography
                                       variant={styles?.title?.variant || "h4"}
                                       fontWeight={styles?.title?.fontWeight || "bold"}
                                       gutterBottom={styles?.title?.gutterBottom !== undefined ? styles.title.gutterBottom : true}
                                       sx={{
                                           fontSize: styles?.title?.fontSize || {
                                               xs: '28px',
                                               sm: '26px',
                                               md: '30px',
                                               lg: '34px',
                                               xl: '44px'
                                           },
                                           color: styles?.title?.color || '#458001',
                                           textAlign: styles?.title?.textAlign || { xs: 'center', sm: 'left' },
                                           mb: styles?.title?.marginBottom || { 
                                               xs: theme.spacing(3), 
                                               sm: theme.spacing(2), 
                                               md: theme.spacing(3) 
                                           },
                                           lineHeight: 1.2,
                                           letterSpacing: '-0.5px',
                                       }}
                                   >
                                       Why Reach Out?
                                   </Typography>
                               </motion.div>

                               {/* SUBTITLE */}
                               <motion.div variants={itemVariants}>
                                   <Typography
                                       sx={{
                                           fontSize: {
                                               xs: '15px',
                                               sm: '14px',
                                               md: '16px',
                                           },
                                           color: '#444444',
                                           mb: theme.spacing(3),
                                           textAlign: { xs: 'center', sm: 'left' },
                                           display: { xs: 'none', sm: 'block' },
                                       }}
                                   >
                                       We're here to listen, connect, and support you
                                   </Typography>
                               </motion.div>

                               {/* LIST ITEMS */}
                               <Stack spacing={styles?.list?.spacing || { xs: 2, sm: 1.5, md: 2 }}>
                                   {items.map((item, index) => (
                                       <motion.div 
                                           key={index} 
                                           variants={itemVariants}
                                           whileHover={{
                                               x: 10,
                                               transition: { duration: 0.2 }
                                           }}
                                       >
                                           <Box
                                               display={styles?.list?.item?.display || "flex"}
                                               alignItems={styles?.list?.item?.alignItems || "flex-start"}
                                               gap={styles?.list?.item?.gap || { xs: 1.5, sm: 1, md: 1.5 }}
                                               sx={{
                                                   p: styles?.list?.item?.padding || { 
                                                       xs: theme.spacing(1.5), 
                                                       sm: theme.spacing(1), 
                                                       md: theme.spacing(0.5) 
                                                   },
                                                   borderRadius: styles?.list?.item?.borderRadius || { 
                                                       xs: theme.spacing(1), 
                                                       sm: theme.spacing(0.5), 
                                                       md: 0 
                                                   },
                                                   bgcolor: styles?.list?.item?.background || { 
                                                       xs: '#f5f5f5', 
                                                       sm: 'transparent' 
                                                   },
                                                   transition: 'all 0.3s ease',
                                                   '&:hover': {
                                                       bgcolor: { 
                                                           xs: '#e8f5e9', 
                                                           sm: 'transparent' 
                                                       },
                                                       transform: { xs: 'none', sm: 'translateX(5px)' },
                                                   },
                                               }}
                                           >
                                               <Box
                                                   sx={{
                                                       width: styles?.list?.bullet?.width || '8px',
                                                       height: styles?.list?.bullet?.height || '8px',
                                                       borderRadius: styles?.list?.bullet?.borderRadius || '50%',
                                                       backgroundColor: styles?.list?.bullet?.backgroundColor || '#458001',
                                                       flexShrink: styles?.list?.bullet?.flexShrink || 0,
                                                       mt: styles?.list?.bullet?.marginTop || theme.spacing(1.2),
                                                       boxShadow: '0 2px 4px rgba(69, 128, 1, 0.2)',
                                                   }}
                                               />
                                               <Typography
                                                   variant={styles?.list?.text?.variant || "body1"}
                                                   sx={{
                                                       fontSize: styles?.list?.text?.fontSize || {
                                                           xs: '14px',
                                                           sm: '13px',
                                                           md: '15px',
                                                           lg: '16px',
                                                           xl: '16px'
                                                       },
                                                       lineHeight: styles?.list?.text?.lineHeight || {
                                                           xs: 1.6,
                                                           sm: 1.5,
                                                           md: 1.6,
                                                           lg: 1.7
                                                       },
                                                       color: styles?.list?.text?.color || '#444444',
                                                       fontWeight: 500,
                                                   }}
                                               >
                                                   {item.text}
                                               </Typography>
                                           </Box>
                                       </motion.div>
                                   ))}
                               </Stack>
                           </motion.div>
                       </Grid>
                   </Grid>
               </Container>
           </SiteContainer>
       </Box>
   );
};

export default ReachOutSection;