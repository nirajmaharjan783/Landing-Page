"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement | null>(null);

    useGSAP(() => {
        const cursor = cursorRef.current;

        if (!cursor) return;

        const moveX = gsap.quickTo(cursor, "x", {
            duration: 0.28,
            ease: "power3.out",
        });

        const moveY = gsap.quickTo(cursor, "y", {
            duration: 0.28,
            ease: "power3.out",
        });

        const moveCursor = (event: MouseEvent) => {
            moveX(event.clientX);
            moveY(event.clientY);
        };

        const growCursor = () => {
            gsap.to(cursor, {
                scale: 2.8,
                backgroundColor: "rgba(255, 255, 255, 0.95)",
                borderColor: "rgba(255, 255, 255, 0.95)",
                duration: 0.3,
                ease: "power3.out",
            });
        };

        const normalCursor = () => {
            gsap.to(cursor, {
                scale: 1,
                backgroundColor: "transparent",
                borderColor: "rgba(255, 255, 255, 0.8)",
                duration: 0.3,
                ease: "power3.out",
            });
        };

        window.addEventListener("mousemove", moveCursor);

        const hoverElements = document.querySelectorAll("a, button, .cursor-grow");

        hoverElements.forEach((element) => {
            element.addEventListener("mouseenter", growCursor);
            element.addEventListener("mouseleave", normalCursor);
        });

        normalCursor();

        return () => {
            window.removeEventListener("mousemove", moveCursor);

            hoverElements.forEach((element) => {
                element.removeEventListener("mouseenter", growCursor);
                element.removeEventListener("mouseleave", normalCursor);
            });
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className="pointer-events-none fixed left-0 top-0 z-[9999]  h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/80 mix-blend-difference "
        />
    );
}