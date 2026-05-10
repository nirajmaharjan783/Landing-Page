"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = window.setTimeout(() => {
            setIsLoading(false);
        }, 1800);

        return () => {
            window.clearTimeout(timer);
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
                    Loading
                </p>
            </div>
        </div>
    );
}