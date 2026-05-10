"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const scrollY = window.scrollY;

        document.body.style.position = "fixed";
        document.body.style.top = `-${scrollY}px`;
        document.body.style.width = "100%";

        const timer = setTimeout(() => {
            document.body.style.position = "";
            document.body.style.top = "";
            document.body.style.width = "";

            window.scrollTo(0, scrollY);
            setIsLoading(false);
        }, 2000);

        return () => {
            clearTimeout(timer);

            document.body.style.position = "";
            document.body.style.top = "";
            document.body.style.width = "";
        };
    }, []);

    if (!isLoading) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-[var(--background)] text-[var(--foreground)]">
            <div className="text-center">
                <div className="loader-logo text-5xl font-black uppercase tracking-tighter md:text-8xl">
                    WILDSTUDIO®
                </div>

                <p className="mt-4 text-sm uppercase tracking-[0.5em] text-[var(--muted)]">
                    Loading...
                </p>
            </div>
        </div>
    );
}