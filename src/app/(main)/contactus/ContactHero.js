'use client';

import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

export const ContactHero = () => {
    const heroRef = useRef(null);
    const imageRef = useRef(null);
    const overlayRef = useRef(null);

    useEffect(() => {
        const initGSAP = async () => {
            const gsap = (await import('gsap')).default;
            const ScrollTrigger = (await import('gsap/ScrollTrigger')).ScrollTrigger;
            
            gsap.registerPlugin(ScrollTrigger);

            // OUT TO IN - Image animation (starts large, ends normal)
            if (imageRef.current) {
                gsap.from(imageRef.current, {
                    opacity: 0,
                    scale: 1.3, // Start bigger (out)
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: heroRef.current,
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                });
            }

            // OUT TO IN - Overlay elements animation
            if (overlayRef.current) {
                const titleEl = overlayRef.current.querySelector('.hero-title');
                const subtitleEl = overlayRef.current.querySelector('.hero-subtitle');
                const buttonEl = overlayRef.current.querySelector('.hero-button');

                // Title - comes from out (large and far) to in (normal position)
                if (titleEl) {
                    gsap.from(titleEl, {
                        opacity: 0,
                        scale: 2, // Start very large (out)
                        y: -100, // From far above
                        duration: 1,
                        delay: 0.2,
                        ease: "back.out(2.5)",
                        scrollTrigger: {
                            trigger: heroRef.current,
                            start: "top 85%",
                            toggleActions: "play none none none",
                        },
                    });
                }

                // Subtitle - comes from out (wide and far) to in
                if (subtitleEl) {
                    gsap.from(subtitleEl, {
                        opacity: 0,
                        scale: 1.5, // Start larger (out)
                        x: 200, // From far right
                        duration: 1,
                        delay: 0.5,
                        ease: "power4.out",
                        scrollTrigger: {
                            trigger: heroRef.current,
                            start: "top 85%",
                            toggleActions: "play none none none",
                        },
                    });
                }

                // Button - comes from out (far and rotated) to in
                if (buttonEl) {
                    gsap.from(buttonEl, {
                        opacity: 0,
                        scale: 3, // Start very large (out)
                        rotation: 45, // Start rotated
                        y: 100, // From far below
                        duration: 0.8,
                        delay: 0.8,
                        ease: "back.out(2.5)",
                        scrollTrigger: {
                            trigger: heroRef.current,
                            start: "top 85%",
                            toggleActions: "play none none none",
                        },
                    });
                }
            }

            ScrollTrigger.refresh();

            return () => {
                ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            };
        };

        const cleanupPromise = initGSAP();
        
        return () => {
            cleanupPromise.then(cleanup => {
                if (cleanup) cleanup();
            });
        };
    }, []);

    return (
        <Box 
            ref={heroRef}
            className="bg-[#D6D6D6] mb-2 sm:mb-4 md:mb-6 overflow-hidden relative"
        >
            <div
                ref={imageRef}
                className="relative w-full aspect-[16/10] sm:aspect-[16/12] md:aspect-[16/5] lg:aspect-[16/6] overflow-hidden shadow-soft"
            >
                <Image
                    src="/hero/contactus.png"
                    alt="Contact Hero"
                    fill
                    priority
                    className="object-cover object-center"
                />
            </div>
        </Box>
    );
};