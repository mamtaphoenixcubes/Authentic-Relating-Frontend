<motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }} // Reduced from 1 to 0.6
        className="relative w-full min-h-screen overflow-hidden"
      >
        {/* Responsive Background */}
        <div className="absolute inset-0 w-full h-full">
          {/* Mobile */}
          <div
            className="absolute inset-0 block md:hidden w-full h-screen bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/hero/header.png')",
              backgroundPosition: "center top",
            }}
          />
          {/* Desktop */}
          <div
            className="absolute inset-0 hidden md:block w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/hero/header.png')" }}
          />
        </div>

        {/* Gradient */}
        {/* <div
          className="absolute bottom-0 left-0 w-full h-[30%] z-[1]"
          style={{
            background:
              "linear-gradient(180deg, rgba(121, 155, 0, 0) -4.69%, rgba(121, 155, 0, 0.8) 54.54%, #799B00 75.31%)",
          }}
        /> */}

        {/* Content Container */}
        <div className="relative z-[2] container mx-auto h-screen">

          {/* Text Wrapper */}
          <div
            className="
      flex flex-col items-start h-full px-4 sm:px-6

      justify-start pt-[120px]        /* mobile */
      sm:pt-[140px]                  /* small screens */
      md:justify-start md:pt-[80px]      /* tablet center */
      lg:justify-start lg:pt-[100px]           /* desktop center */
      xl:justify-start xl:pt-[110px]   /* large screens lower */
    "
          >

            <div>

              {/* HEADING */}
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="
      font-redhat font-bold text-white drop-shadow-lg text-left

      text-[20px] 
      sm:text-[28px] 
      md:text-[36px] 
      lg:text-[44px] 
      xl:text-[50px]

      leading-[100%]
    "
              >
                Come as you are
              </motion.h1>

              {/* SUB TEXT */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="
      font-redhat text-white/90 drop-shadow-md text-left

      text-[16px] 
      sm:text-[22px] 
      md:text-[28px] 
      lg:text-[34px] 
      xl:text-[39px]

      leading-[100%]
      mt-2 sm:mt-3 md:mt-4
    "
              >
                be seen, be heard, be met, and belong.
              </motion.p>

              {/* SIGNATURE */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="
      font-redhat italic text-white/90 drop-shadow-md text-right

      text-[12px] 
      sm:text-[14px] 
      md:text-[16px] 
      lg:text-[18px] 
      xl:text-[20px]

      mt-2 sm:mt-3 md:mt-4
    "
              >
                — Amitabha Bhatia
              </motion.p>

            </div>
          </div>
        </div>
      </motion.section>