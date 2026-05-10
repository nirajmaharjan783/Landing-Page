"use client";

import { useEffect } from "react";

type MenuOverlayProps = {
    isOpen: boolean;
    onClose: () => void;
};

const menuLinks = [
    {
        label: "Work",
        href: "#work",
    },
    {
        label: "About",
        href: "#about",
    },
    {
        label: "Services",
        href: "#services",
    },
    {
        label: "Team",
        href: "#team",
    },
    {
        label: "Contact",
        href: "#contact",
    },
];

export default function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    return (
        <div
            className={`fixed inset-0 z-[9998] overflow-y-auto bg-[var(--background)] px-6 py-8 text-[var(--foreground)] transition duration-500 md:px-12 ${isOpen
                ? "pointer-events-auto translate-y-0 opacity-100"
                : "pointer-events-none -translate-y-full opacity-0"
                }`}
        >
            <div className="flex items-center justify-between">

                <a
                    href="#"
                    onClick={onClose}
                    className="text-xl font-bold tracking-tight"
                >
                    WILDSTUDIO®
                </a>
                <button
                    onClick={onClose}
                    className="rounded-full border border-[var(--border)] px-5 py-2 text-sm uppercase tracking-wider transition hover:bg-[var(--foreground)] hover:text-[var(--background)]"
                >
                    Close
                </button>
            </div>

            <div className="grid min-h-[80vh] gap-12 pb-16 pt-20 md:grid-cols-[1.2fr_0.8fr] md:items-end">
                <div className="flex flex-col gap-4">
                    {menuLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={onClose}
                            className="cursor-grow text-6xl font-black uppercase leading-none tracking-tighter transition hover:translate-x-4 md:text-8xl"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                <div className="space-y-8">
                    <div>
                        <p className="mb-3 text-sm uppercase tracking-[0.4em] text-[var(--muted)]">
                            Contact
                        </p>

                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=hello@example.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-2xl font-bold transition hover:scale-105 md:text-3xl"
                        >
                            hello@example.com
                        </a>

                        <a
                            href="tel:+9779800000000"
                            className="mt-3 block text-2xl font-bold transition hover:scale-105 md:text-3xl"
                        >
                            +977 9800000000
                        </a>
                    </div>

                    <div>
                        <p className="mb-3 text-sm uppercase tracking-[0.4em] text-[var(--muted)]">
                            Social
                        </p>

                        <div className="flex flex-wrap gap-4 text-sm uppercase tracking-wider text-[var(--muted)]">
                            <a
                                href="https://www.linkedin.com/in/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition hover:scale-125 hover:text-[var(--foreground)]"
                            >
                                LinkedIn
                            </a>

                            <a
                                href="https://www.instagram.com/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition hover:scale-125 hover:text-[var(--foreground)]"
                            >
                                Instagram
                            </a>

                            <a
                                href="https://github.com/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition hover:scale-125 hover:text-[var(--foreground)]"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}