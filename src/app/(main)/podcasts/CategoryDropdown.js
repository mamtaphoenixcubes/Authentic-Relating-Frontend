'use client';


import { useState } from 'react';
import { Box, Typography } from '@mui/material';


export default function CategoryDropdown({ categories, selectedCategory, setSelectedCategory }) {
   const [open, setOpen] = useState(false);
   const selectedCat = categories.find(c => c._id === selectedCategory);


   return (
       <Box sx={{ position: 'relative' }}>
           {/* Trigger Button — matches search bar style */}
           <Box
               onClick={() => setOpen(prev => !prev)}
               sx={{
                   display: 'flex', alignItems: 'center', gap: 1,
                   background: 'rgba(255,255,255,0.2)',
                   border: '1px solid rgba(255,255,255,0.5)',
                   borderRadius: 0.5, px: 1.5, py: 0.6,
                   cursor: 'pointer', color: '#fff',
                   fontFamily: 'inherit', whiteSpace: 'nowrap',
                   backdropFilter: 'blur(4px)',
                   width: '100%', // 👈 IMPORTANT
               }}
           >
               <Typography sx={{ fontSize: 13, color: '#fff', opacity: 0.8 }}>☰</Typography>
               <Typography sx={{ fontSize: 13, color: '#fff', flex: 1, minWidth: 100 }}>
                   {selectedCat?.title || 'All Categories'}
               </Typography>
               <span style={{ fontSize: 10, color: '#fff', opacity: 0.7 }}>▼</span>
           </Box>


           {/* Dropdown Menu */}
           {open && (
               <Box
                   sx={{
                       position: 'absolute', top: 'calc(100% + 6px)', right: 0,
                       background: 'rgba(255,122,107,0.95)',
                       border: '1px solid rgba(255,255,255,0.5)',
                       borderRadius: 2, overflow: 'hidden',
                       zIndex: 999, minWidth: '100%',
                       backdropFilter: 'blur(8px)',
                       boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
                       width: '100%',
                   }}
               >
                   {[{ _id: '', title: 'All Categories' }, ...categories].map(cat => (
                       <Box
                           key={cat._id}
                           onClick={() => { setSelectedCategory(cat._id); setOpen(false); }}
                           sx={{
                               px: 1.5, py: 0.8, fontSize: 13, color: '#fff',
                               cursor: 'pointer', fontFamily: 'inherit',
                               background: selectedCategory === cat._id
                                   ? 'rgba(255,255,255,0.25)' : 'transparent',
                               '&:hover': { background: 'rgba(255,255,255,0.2)' },
                               borderBottom: '1px solid rgba(255,255,255,0.15)',
                               
                           }}
                       >
                           {cat.title}
                       </Box>
                   ))}
               </Box>
           )}
       </Box>
   );
}

