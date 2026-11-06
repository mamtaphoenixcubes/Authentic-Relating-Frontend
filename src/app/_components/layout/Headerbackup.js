"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";


const NAV_ITEMS = [
  {
    label: "Authentic Relating",
    submenu: [
      { label: "Relating Circles", href: "/relatingcircles" },
      { label: "Authentic Relating Joy Lab", href: "/authenticrelatingjoylab" },
      { label: "Authentic Relating Founder", href: "/authenticrelatingfounder" },
      { label: "Authentic Relating Coaching", href: "/authenticrelatingcoaching" },
      { label: "Authentic Relating @Work", href: "/authenticrelatingwork" },
      { label: "Five Dimensions", href: "/fivedimensionsofauthenticrelating" },
      { label: "10 Principles", href: "/principlesofauthenticrelating" },
    ],
  },
  {
    label: "Events & Workshops",
    submenu: [
      { label: "Online Course", href: "/onlinecourse" },
      { label: "My Books", href: "/mybooks" },
      { label: "Our Offerings", href: "/ourofferings" },
      { label: "Events", href: "/events" },
      { label: "Podcast", href: "/podcasts" },
      { label: "Blog", href: "/blogpage" },
    ],
  },
  {
    label: "About Us",
    submenu: [
      { label: "About", href: "/aboutus" },
      { label: "FAQs", href: "/FAQs" },
      { label: "Cancellation Policy", href: "/cancellationpolicy" },
      { label: "Scholarship Opportunities", href: "/scholarshipOpportunities" },
      { label: "Authentic Relating Blog", href: "/authenticrelatingblog" },
      { label: "Website Disclaimer", href: "/websitedisclaimer" },
      { label: "Mission & Vision", href: "/missingvision" },
      { label: "Terms & Conditions", href: "/termsandconditions" },
      { label: "Privacy Policy", href: "/privacypolicy" },
    ],
  },
  {
    label: "Speaking & Media Kit",
    submenu: [
      { label: "Quotes", href: "/quotes" },
      { label: "Free Stuff", href: "/freestuff" },
      { label: "Community", href: "/communities" },
      { label: "Facilitation", href: "/facilitationpage" },
      { label: "Leadership", href: "/leadership" },
      { label: "Media Kit", href: "/speakingmediaKit" },
    ],
  },
  { label: "Contact Us", href: "/contactus" },
];

export default function Header() {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  // Check login status on mount and when localStorage changes
  useEffect(() => {
    const checkLoginStatus = () => {
      const token = localStorage.getItem('token');
      const user = localStorage.getItem('user');
      setIsLoggedIn(!!token);

      if (user) {
        try {
          const userData = JSON.parse(user);
          setUserEmail(userData.email || 'User');
        } catch {
          setUserEmail('User');
        }
      }
    };

    checkLoginStatus();


    // Optional: Listen for storage changes (if user logs in/out in another tab)
    window.addEventListener('storage', checkLoginStatus);
    return () => window.removeEventListener('storage', checkLoginStatus);
  }, []);

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setUserEmail('');
    router.push('/'); // or '/LoginPage' if you want to redirect to login
  };


  const firstLetter = userEmail
    ? userEmail.charAt(0).toUpperCase()
    : "U";



  return (
    <>
      {/* ================= STICKY HEADER ================= */}
      <header className="fixed top-0 left-0 w-full z-50 px-6 xl:px-10 2xl:px-16 pt-6">
        <div
          className="
            flex items-center
            h-[95px]
            px-10
            rounded-[24px]

            backdrop-blur-[60px]
            bg-[rgba(139,148,79,0.65)]

            border border-white/30
            shadow-[0px_12px_35px_rgba(0,0,0,0.25)]
          "
        >
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/AuthenticRelating.png"
              alt="Authentic Relating"
              className="h-[2.95rem] object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex ml-auto">
            <ul className="flex items-center gap-10 text-white font-medium list-none text-[14px] xl:text-[15px] 2xl:text-[16px]">
              {NAV_ITEMS.map((item, index) => (
                <li key={index} className="relative group list-none">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="pb-1 border-b-2 border-transparent hover:border-white transition-all duration-300"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <>
                      <span className="flex items-center gap-1 cursor-pointer pb-1 border-b-2 border-transparent hover:border-white transition-all duration-300">
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
                          className="
                            min-w-[260px]
                            rounded-[20px]
                            p-5 space-y-3
                            list-none

                            backdrop-blur-[80px]
                            bg-[rgba(139,148,79,0.85)]
                            border border-white/30
                            shadow-[0px_20px_50px_rgba(0,0,0,0.35)]
                          "
                        >
                          {item.submenu.map((subItem, subIndex) => (
                            <li key={subIndex} className="list-none">
                              <Link
                                href={subItem.href}
                                className="block text-white/90 hover:text-white transition
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

              {/* <li className="ml-6 list-none">
                <Link
                  href="/LoginPage"
                  className="px-6 h-[44px] flex items-center rounded-[14px] text-white font-medium text-[13px] xl:text-[14px] 2xl:text-[15px] backdrop-blur-[60px] bg-white/10 border border-white/60 shadow-[inset_0_1px_2px_rgba(255,255,255,0.6)] hover:bg-white/20 transition"
                >
                  Login →
                </Link>
              </li> */}
              <li className="ml-6 list-none relative">
                {isLoggedIn ? (
                  <div className="relative group">
                    {/* Profile Icon Button */}

                    <button
                      className=" w-[44px] h-[44px] flex items-center justify-center rounded-full text-white font-semibold text-sm backdrop-blur-[60px] bg-white/10 border border-white/40 hover:bg-white/20 transition-all duration-200">
                      {firstLetter}
                    </button>

                    {/* Dropdown Menu */}
                    <div className="absolute right-0 top-full mt-6 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      <div
                        className="rounded-2xl py-3 backdrop-blur-xl bg-[rgba(139,148,79,0.95)] border border-white/10 shadow-2xl overflow-hidden" >
                        {/* User Email */}
                        <div className="px-4 py-2 text-white/80 text-sm border-b border-white/10">
                          {userEmail || "User"}
                        </div>

                        {/* Profile */}
                        <Link
                          href="/profile"
                          className=" block w-full px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-black/10 transition-all duration-200">
                          Profile
                        </Link>


                        {/* Divider */}
                        <div className="h-px bg-white/10 mx-4 my-1"></div>

                        {/* Logout */}
                        <button
                          type="button"
                          onClick={handleLogout}
                          className="
        block w-full
        px-4 py-2
        text-sm text-white/70
        bg-transparent
        border-none
        outline-none
        hover:text-white
        hover:bg-black/10
        transition-all duration-200
      "
                        >
                          Logout
                        </button>

                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href="/LoginPage"
                    className="px-6 h-[44px] flex items-center rounded-[14px] text-white font-medium text-[13px] xl:text-[14px] 2xl:text-[15px] backdrop-blur-[60px] bg-white/10 border border-white/60 shadow-[inset_0_1px_2px_rgba(255,255,255,0.6)] hover:bg-white/20 transition"
                  >
                    Login →
                  </Link>
                )}
              </li>
            </ul>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden ml-auto text-white"
            onClick={() => setMobileOpen(true)}
          >
            ☰
          </button>
        </div>
      </header>

      {/* ================= MOBILE SLIDE MENU ================= */}
      <div
        className={`
          fixed top-0 left-0 h-full w-[300px] z-[60]
          bg-[rgba(139,148,79,0.95)]
          backdrop-blur-[80px]
          border-r border-white/30
          shadow-[0px_20px_50px_rgba(0,0,0,0.35)]
          transform transition-transform duration-500 ease-in-out
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Close Button */}
        <div className="flex justify-end p-6">
          <button
            className="text-white text-2xl"
            onClick={() => setMobileOpen(false)}
          >
            ✕
          </button>
        </div>

        <ul className="px-6 space-y-4 text-white list-none">
          {NAV_ITEMS.map((item, index) => (
            <li key={index} className="list-none">
              {item.href ? (
                <Link
                  href={item.href}
                  className="
                  px-6 h-[44px] flex items-center
  rounded-[14px]
  text-white font-medium text-[13px] xl:text-[14px] 2xl:text-[15px]

  backdrop-blur-[60px]
  bg-white/10
  border border-white/60

  shadow-[inset_0_1px_2px_rgba(255,255,255,0.6)]
  hover:bg-white/20
  transition"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <>
                  <div
                    className="flex justify-between items-center py-3 border-b border-white/20 cursor-pointer
  text-[15px] sm:text-[16px] font-medium"
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