import toast from 'react-hot-toast';


export const showToast = ({ type = 'success', title, subtitle, t }) => {
   const isSuccess = type === 'success';


   return {
       bg: isSuccess ? '#d1fae5' : '#fde8e8',
       blobColor: isSuccess ? '#a7f3d0' : '#fca5a5',
       iconBg: isSuccess ? '#ffffff' : '#ffffff',
       iconColor: isSuccess ? '#10b981' : '#dc2626',
       icon: isSuccess ? '✓' : '!',
   };
};


const CustomToast = ({ t, type = 'success', title, subtitle }) => {
   const isSuccess = type === 'success';


   const colors = {
       bg: isSuccess ? '#d1fae5' : '#fde8e8',
       blobColor: isSuccess ? '#86efac' : '#fca5a5',
       iconColor: isSuccess ? '#10b981' : '#dc2626',
   };


   return (
       <div
           style={{
               display: 'flex',
               alignItems: 'center',
               gap: '16px',
               background: colors.bg,
               borderRadius: '20px',
               padding: '20px 20px 20px 16px',
               minWidth: '340px',
               maxWidth: '420px',
               boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
               position: 'relative',
               overflow: 'hidden',
           }}
       >
           {/* Decorative blob behind icon */}
           <div
               style={{
                   position: 'absolute',
                   left: '-10px',
                   top: '50%',
                   transform: 'translateY(-50%)',
                   width: '80px',
                   height: '80px',
                   borderRadius: '50%',
                   background: colors.blobColor,
                   opacity: 0.6,
                   zIndex: 0,
               }}
           />


           {/* Icon circle */}
           <div
               style={{
                   width: '48px',
                   height: '48px',
                   borderRadius: '50%',
                   background: '#fff',
                   display: 'flex',
                   alignItems: 'center',
                   justifyContent: 'center',
                   flexShrink: 0,
                   zIndex: 1,
                   position: 'relative',
                   boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
               }}
           >
               <span
                   style={{
                       color: colors.iconColor,
                       fontWeight: 700,
                       fontSize: isSuccess ? '22px' : '20px',
                   }}
               >
                   {isSuccess ? '✓' : '!'}
               </span>
           </div>


           {/* Text */}
           <div style={{ flex: 1, zIndex: 1 }}>
               <p
                   style={{
                       margin: 0,
                       fontWeight: 700,
                       fontSize: '15px',
                       color: '#1f2937',
                       lineHeight: '1.3',
                   }}
               >
                   {title}
               </p>
               {subtitle && (
                   <p
                       style={{
                           margin: '4px 0 0',
                           fontSize: '13px',
                           color: '#374151',
                           fontWeight: 400,
                           lineHeight: '1.4',
                       }}
                   >
                       {subtitle}
                   </p>
               )}
           </div>


           {/* Close button */}
           <button
               onClick={() => toast.dismiss(t.id)}
               style={{
                   background: 'none',
                   border: 'none',
                   cursor: 'pointer',
                   color: '#9ca3af',
                   fontSize: '18px',
                   padding: '0',
                   lineHeight: 1,
                   flexShrink: 0,
                   zIndex: 1,
               }}
           >
               ✕
           </button>
       </div>
   );
};


export default CustomToast;

