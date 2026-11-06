"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";


// const NAV_ITEMS = [
//   {
//     label: "Authentic Relating",
//     submenu: [
//       { label: "About", href: "/aboutus" },
//       { label: "Our Founder", href: "/authenticrelatingfounder" },
//       { label: "Five Dimensions", href: "/fivedimensionsofauthenticrelating" },
//       { label: "Ten Principles", href: "/principlesofauthenticrelating" },
//       { label: "Books", href: "/mybooks" },
//       { label: "Podcast", href: "/podcasts" },
//       { label: "FAQs", href: "/FAQs" },
//       { label: "Community", href: "/communities" },
//       { label: "Facilitation", href: "/facilitationpage" },
//       { label: "Leadership", href: "/leadershipPage" },
//       { label: "Quotes", href: "/quotes" },
//     ],
//   },
//   {
//     label: "Offerings",
//     submenu: [
//       { label: "Our Offerings", href: "/ourofferings" },
//       { label: "Books", href: "/mybooks" },
//       { label: "Online Courses", href: "/onlinecourse" },
//       { label: "Authentic Relating @Work", href: "/authenticrelatingwork" },
//       { label: "Free Stuff", href: "/freestuff" },
//       { label: "Media Kit", href: "/speakingmediaKit" },
//     ],
//   },
//   {
//     label: "Events",
//     submenu: [
//       { label: "Events", href: "/events" },
//     ],
//   },
//   {
//     label: "Blogs",
//     submenu: [
//       { label: "Blogs", href: "/blogpage" },
//     ],
//   },
//   { label: "Contact Us", href: "/contactus" },
// ];
const NAV_ITEMS = [
 {
   label: "Authentic Relating",
   submenu: [
     { label: "Our Founder", href: "/authenticrelatingfounder" },
     { label: "Mission & Vision", href: "/missingvision" },
     { label: "Authentic Relating Intention", href: "/aboutus" },
     { label: "Five Dimensions", href: "/fivedimensionsofauthenticrelating" },
     { label: "Ten Principles", href: "/principlesofauthenticrelating" },
     { label: "FAQs", href: "/FAQs" },
     { label: "Community", href: "/communities" },
     { label: "Facilitation", href: "/facilitationpage" },
     { label: "Leadership", href: "/leadershipPage" },
     { label: "Quotes", href: "/quotes" },
   ],
 },
 {


   label: "Offerings",
   submenu: [
     { label: "Signature Offerings", href: "/ourofferings" },
     { label: "Books", href: "/mybooks" },
     { label: "Courses", href: "/onlinecourse" },
     { label: "Podcast", href: "/podcasts" },
     { label: "Relating Circles", href: "/relatingcircles" },


     { label: "Authentic Relating Work", href: "/authenticrelatingwork" },
     { label: "Authentic Relating Joy Lab", href: "/authenticrelatingjoylab" },
     { label: "Authentic Relating Coaching", href: "/authenticrelatingcoaching" },
     { label: "Gifts For You", href: "/freestuff" },
     { label: "Speaking & Media", href: "/speakingmediaKit" },
   ],
 },
 { label: "Blogs", href: "/blogpage" },
 { label: "Events", href: "/events" },
 { label: "Contact Us", href: "/contactus" },
];




export default function Header() {
 const router = useRouter();
 const [mobileOpen, setMobileOpen] = useState(false);
 const [activeMobileMenu, setActiveMobileMenu] = useState(null);
 const [isLoggedIn, setIsLoggedIn] = useState(false);
 const [userEmail, setUserEmail] = useState('');
 const [userProfile, setUserProfile] = useState('');




 useEffect(() => {
   const checkLoginStatus = () => {
     const token = localStorage.getItem('token');
     const user = localStorage.getItem('user');
     setIsLoggedIn(!!token);




     if (user) {
       try {
         const userData = JSON.parse(user);
         setUserEmail(userData.email || 'User');
         const profilePath = userData.profile || '';
         setUserProfile(profilePath && !profilePath.startsWith('http')
           ? `${process.env.NEXT_PUBLIC_API_URL}/${profilePath}`
           : profilePath
         );
       } catch {
         setUserEmail('User');
       }
     }
   };




   checkLoginStatus();


   window.addEventListener('storage', checkLoginStatus);
   return () => window.removeEventListener('storage', checkLoginStatus);
 }, []);




 const handleLogout = () => {
   localStorage.removeItem('token');
   localStorage.removeItem('refreshToken');
   localStorage.removeItem('user');
   setIsLoggedIn(false);
   setUserEmail('');
   router.push('/');
 };




 const firstLetter = userEmail
   ? userEmail.charAt(0).toUpperCase()
   : "U";




 return (
   <>
     {/* ================= STICKY HEADER ================= */}
     <header className="fixed top-0 left-0 w-full z-50 px-4 sm:px-8 lg:px-12 pt-4">
       <div
         className="max-w-full mx-auto flex items-center h-[70px] lg:h-[80px] px-6 lg:px-10 rounded-[20px] backdrop-blur-2xl bg-white/15 border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.10)]"
       >
         {/* Logo */}
         <Link href="/" className="flex items-center">
           <img
             src="/AuthenticRelating.png"
             alt="Authentic Relating"
             className="h-[46px] lg:h-[69px] object-contain"
           />
         </Link>




         {/* Desktop Nav */}
         <nav className="hidden lg:flex ml-auto">
           <ul className="flex items-center gap-10 font-bold list-none text-[14px] xl:text-[15px] 2xl:text-[16px] text-white [text-shadow:0_1px_4px_rgba(0,0,0,0.45)]">
             {NAV_ITEMS.map((item, index) => (
               <li key={index} className="relative group list-none">
                 {item.href ? (
                   <Link
                     href={item.href}
                     className="block py-3 border-b text-white border-white/20 lg:text-[12px] xl:text-[16px] font-bold [text-shadow:0_1px_4px_rgba(0,0,0,0.45)] hover:text-gray-800 transition"
                   >
                     {item.label}
                   </Link>
                 ) : (
                   <>
                     <span className="flex items-center gap-1 cursor-pointer pb-1 border-b-2 border-transparent lg:text-[12px] xl:text-[16px] text-white [text-shadow:0_1px_4px_rgba(0,0,0,0.45)] hover:border-white hover:text-gray-800 transition-all duration-300">
                       {item.label}
                       <svg
                         className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                         fill="none"
                         stroke="currentColor"
                         strokeWidth="2"
                         viewBox="0 0 24 24"
                       >
                         <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           d="M19 9l-7 7-7-7"
                         />
                       </svg>
                     </span>


                     {/* Desktop Dropdown */}
                     <div className="absolute left-1/2 -translate-x-1/2 top-full mt-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                       <ul
                         className="min-w-[240px] rounded-2xl p-5 space-y-3 list-none bg-white/80 backdrop-blur-2xl border border-white/60 shadow-[0px_20px_50px_rgba(0,0,0,0.20)]"
                       >
                         {item.submenu.map((subItem, subIndex) => (
                           <li key={subIndex} className="list-none">
                             <Link
                               href={subItem.href}
                               className="block text-gray hover:text-gray-800 transition
                              text-[13px] xl:text-[14px] 2xl:text-[15px]"
                             >
                               {subItem.label}
                             </Link>
                           </li>
                         ))}
                       </ul>
                     </div>
                   </>
                 )}
               </li>
             ))}




             <li className="ml-6 list-none relative">
               {isLoggedIn ? (
                 <div className="relative group">
                   {/* Profile Icon Button */}
                   <button
                     className="w-[44px] h-[44px] flex items-center justify-center rounded-full text-white font-semibold text-sm backdrop-blur-2xl bg-white/20 border border-white/50 [text-shadow:0_1px_4px_rgba(0,0,0,0.45)] hover:bg-white/35 transition-all duration-200">
                     {userProfile ? (
                       <img src={userProfile} alt="profile" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
                     ) : firstLetter}
                   </button>


                   {/* Dropdown Menu */}
                   <div className="absolute right-0 top-full mt-8 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                     <div
                       className="rounded-2xl py-3 bg-white/80 backdrop-blur-2xl border border-white/60 shadow-[0px_20px_50px_rgba(0,0,0,0.20)] overflow-hidden"
                     >
                       {/* User Email */}
                       <div className="px-4 py-2 text-gray-700 text-sm border-b border-white/40">
                         {userEmail || "User"}
                       </div>


                       {/* Profile */}
                       <Link
                         href="/profile"
                         className="block w-full px-4 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-black/5 transition-all duration-200"
                       >
                         Profile
                       </Link>


                       {/* Divider */}
                       <div className="h-px bg-white/40 mx-4 my-1"></div>


                       {/* Logout */}
                       <button
                         type="button"
                         onClick={handleLogout}
                         className="block w-full px-4 py-2 text-sm text-gray-700 bg-transparent border-none outline-none hover:text-black hover:bg-black/10 transition-all duration-200"
                       >
                         Logout
                       </button>
                     </div>
                   </div>
                 </div>
               ) : (
                 <Link
                   href="/LoginPage"
                   className="px-6 h-[44px] flex items-center rounded-[14px] text-white font-bold text-[13px] xl:text-[14px] 2xl:text-[15px] backdrop-blur-2xl bg-white/20 border border-white/50 shadow-[inset_0_1px_3px_rgba(255,255,255,0.5)] [text-shadow:0_1px_4px_rgba(0,0,0,0.45)] hover:bg-white/30 hover:text-white transition"
                 >
                   Login →
                 </Link>
               )}
             </li>
           </ul>
         </nav>




         {/* Mobile Toggle */}
         <button
           className="lg:hidden ml-auto w-[42px] h-[42px] flex items-center justify-center rounded-[12px] text-white backdrop-blur-2xl bg-white/15 border border-white/40 shadow-[0px_4px_12px_rgba(0,0,0,0.10)] hover:bg-white/25 transition-all duration-200"
           onClick={() => setMobileOpen(true)}
         >
           <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" viewBox="0 0 24 24">
             <path d="M4 6h16M4 12h16M4 18h16" />
           </svg>
         </button>
       </div>
     </header>




     {/* ================= MOBILE SLIDE MENU ================= */}
     <div
       className={`fixed top-0 left-0 h-full w-[300px] z-[60] bg-white/15 backdrop-blur-[80px] border-r border-white/30 shadow-[0px_20px_50px_rgba(0,0,0,0.15)] transform transition-transform duration-500 ease-in-out ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}
     >
       {/* Close Button */}
       <div className="flex justify-end p-6">
         <button
           className="w-[42px] h-[42px] flex items-center justify-center rounded-[12px] text-white backdrop-blur-2xl bg-white/15 border border-white/40 shadow-[0px_4px_12px_rgba(0,0,0,0.10)] hover:bg-white/25 transition-all duration-200"
           onClick={() => setMobileOpen(false)}
         >
           <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" viewBox="0 0 24 24">
             <path d="M18 6L6 18M6 6l12 12" />
           </svg>
         </button>
       </div>




       <ul className="px-6 space-y-4 text-white list-none">
         {NAV_ITEMS.map((item, index) => (
           <li key={index} className="list-none">
             {item.href ? (
               <Link
                 href={item.href}
                 className="block py-3 border-b border-white/25 text-white text-[15px] font-medium [text-shadow:0_1px_4px_rgba(0,0,0,0.40)]"
                 onClick={() => setMobileOpen(false)}
               >
                 {item.label}
               </Link>
             ) : (
               <>
                 <div
                   className="flex justify-between items-center py-3 border-b border-white/25 cursor-pointer text-[15px] sm:text-[16px] font-medium [text-shadow:0_1px_4px_rgba(0,0,0,0.40)]"
                   onClick={() =>
                     setActiveMobileMenu(
                       activeMobileMenu === index ? null : index
                     )
                   }
                 >
                   {item.label}
                   <span>
                     {activeMobileMenu === index ? "−" : "+"}
                   </span>
                 </div>
                 {activeMobileMenu === index && (
                   <ul className="pl-4 pt-2 space-y-2 list-none">
                     {item.submenu.map((subItem, subIndex) => (
                       <li key={subIndex} className="list-none">
                         <Link
                           href={subItem.href}
                           className="block text-white/90 text-[14px] sm:text-[15px]"
                           onClick={() => setMobileOpen(false)}
                         >
                           {subItem.label}
                         </Link>
                       </li>
                     ))}
                   </ul>
                 )}
               </>
             )}
           </li>
         ))}
         {/* Login / Profile — mobile */}
         <li className="list-none pt-2">
           {isLoggedIn ? (
             <div>
               <div
                 className="flex items-center gap-3 py-3 border-b border-white/30 cursor-pointer"
                 onClick={() => { router.push('/profile'); setMobileOpen(false); }}
               >
                 <div className="w-[36px] h-[36px] flex items-center justify-center rounded-full bg-white/15 border border-white/40 text-white font-semibold text-sm [text-shadow:0_1px_4px_rgba(0,0,0,0.40)]">
                   {userProfile ? (
                     <img src={userProfile} alt="profile" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
                   ) : firstLetter}
                 </div>
                 <span className="text-white text-[15px] font-medium">{userEmail || 'User'}</span>
               </div>
               <ul className="pl-4 pt-2 space-y-2 list-none">
                 <li className="list-none">
                   <button
                     onClick={() => { handleLogout(); setMobileOpen(false); }}
                     className="block text-white/90 text-[14px] sm:text-[15px] bg-transparent border-none outline-none cursor-pointer w-full text-left"
                   >
                     Logout
                   </button>
                 </li>
               </ul>
             </div>
           ) : (
             <Link
               href="/LoginPage"
               className="px-6 h-[44px] flex items-center rounded-[14px] text-white font-medium text-[13px] bg-white/15 border border-white/40 shadow-[inset_0_1px_3px_rgba(255,255,255,0.4)] [text-shadow:0_1px_4px_rgba(0,0,0,0.40)] hover:bg-white/25 transition"
               onClick={() => setMobileOpen(false)}
             >
               Login →
             </Link>
           )}
         </li>
       </ul>
     </div>




     {/* Overlay */}
     {mobileOpen && (
       <div
         className="fixed inset-0 bg-black/40 z-50"
         onClick={() => setMobileOpen(false)}
       />
     )}
   </>
 );
}





