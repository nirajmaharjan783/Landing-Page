"use client";

import { useRef, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import MenuOverlay from "./MenuOverlay";

export default function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    const audioRef = useRef<HTMLAudioElement | null>(null);

    function openMenu() {
        setIsMenuOpen(true);
    }

    function closeMenu() {
        setIsMenuOpen(false);
    }

    function toggleSound() {

        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
            setIsPlaying(false);
        } else {
            audioRef.current.currentTime = 0;
            audioRef.current.play();
            setIsPlaying(true);
        }
    }

    return (
        <>
            <header className="fixed left-0 top-0 z-50 w-full px-6 py-5 md:px-12">

                <nav className="flex items-center justify-between">

                    <a
                        href="#"
                        className="text-xl font-bold tracking-tight"
                    >
                        WILDSTUDIO®
                    </a>

                    <div className="hidden items-center gap-8 text-sm uppercase tracking-wider text-[var(--muted)] md:flex">

                        <a
                            href="#work"
                            className="transition hover:scale-125 hover:text-[var(--foreground)]"
                        >
                            Explore work
                        </a>

                        <a
                            href="#about"
                            className="transition hover:scale-125 hover:text-[var(--foreground)]"
                        >
                            Services
                        </a>

                        <a
                            href="#contact"
                            className="transition hover:scale-125 hover:text-[var(--foreground)]"
                        >
                            Get in touch
                        </a>

                    </div>

                    <div className="flex items-center gap-3">

                        <ThemeToggle />

                        <audio
                            ref={audioRef}
                            src="/audio/click.mp3"
                            onEnded={() => setIsPlaying(false)}
                        />

                        <button
                            onClick={toggleSound}
                            className={`rounded-full border px-4 py-2 text-lg transition duration-300
                            
                            ${isPlaying
                                    ? "border-white bg-white text-black scale-110"
                                    : "border-[var(--border)] text-[var(--foreground)] hover:scale-110"
                                }
                            `}
                        >
                            ✦
                        </button>

                        <button
                            onClick={openMenu}
                            className="rounded-full border border-[var(--border)] px-5 py-2 text-sm uppercase tracking-wider transition hover:bg-[var(--foreground)] hover:text-[var(--background)]"
                        >
                            Menu
                        </button>

                    </div>

                </nav>

            </header>

            <MenuOverlay
                isOpen={isMenuOpen}
                onClose={closeMenu}
            />
        </>
    );
}