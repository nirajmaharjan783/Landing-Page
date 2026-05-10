"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function ScrollAnimations() {
    useGSAP(() => {
        const revealElements = gsap.utils.toArray<HTMLElement>(".reveal");

        revealElements.forEach((element) => {
            const direction = element.dataset.direction;

            let startX = 0;
            let startY = 80;

            if (direction === "left") {
                startX = -300;
                startY = 0;
            }

            if (direction === "right") {
                startX = 300;
                startY = 0;
            }

            gsap.fromTo(
                element,
                {
                    opacity: 0,
                    x: startX,
                    y: startY,
                },
                {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: element,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        });

        ScrollTrigger.refresh();
    }, []);

    return null;
}