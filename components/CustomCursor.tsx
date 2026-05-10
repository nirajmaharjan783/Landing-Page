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

        // Smooth movement (desktop)
        const moveX = gsap.quickTo(cursor, "x", {
            duration: 0.28,
            ease: "power3.out",
        });

        const moveY = gsap.quickTo(cursor, "y", {
            duration: 0.28,
            ease: "power3.out",
        });

        // Desktop move
        const moveCursor = (event: MouseEvent) => {
            moveX(event.clientX);
            moveY(event.clientY);
        };

        // Mobile move
        const moveCursorTouch = (event: TouchEvent) => {
            const touch = event.touches[0];
            if (!touch) return;

            moveX(touch.clientX);
            moveY(touch.clientY);
        };

        // Hover effects
        const growCursor = () => {
            gsap.to(cursor, {
                scale: 2.8,
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                borderColor: "rgba(255, 255, 255, 0.9)",
                duration: 0.25,
                ease: "power3.out",
            });
        };

        const normalCursor = () => {
            gsap.to(cursor, {
                scale: 1,
                backgroundColor: "transparent",
                borderColor: "rgba(255, 255, 255, 0.8)",
                duration: 0.25,
                ease: "power3.out",
            });
        };

        // EVENTS
        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("touchmove", moveCursorTouch);

        const handleMouseOver = (e: Event) => {
            const target = (e.target as HTMLElement).closest(
                "a, button, .cursor-grow"
            );
            if (target) growCursor();
        };

        const handleMouseOut = (e: Event) => {
            const target = (e.target as HTMLElement).closest(
                "a, button, .cursor-grow"
            );
            if (target) normalCursor();
        };

        document.addEventListener("mouseover", handleMouseOver);
        document.addEventListener("mouseout", handleMouseOut);

        normalCursor();

        // CLEANUP
        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("touchmove", moveCursorTouch);

            document.removeEventListener("mouseover", handleMouseOver);
            document.removeEventListener("mouseout", handleMouseOut);
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className="
                pointer-events-none
                fixed
                left-0
                top-0
                z-[9999]
                h-7 w-7
                -translate-x-1/2 -translate-y-1/2
                rounded-full
                border
                border-white/80
                mix-blend-difference
            "
        />
    );
}