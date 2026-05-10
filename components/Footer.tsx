export default function Footer() {
    return (
        <footer id="contact" className="px-6 py-24 md:px-12">
            <div className="grid gap-12 md:grid-cols-2">
                <div>
                    <p className="mb-6 text-sm uppercase tracking-[0.4em] text-[var(--muted)]">
                        Time to roar
                    </p>

                    <h2 className="cursor-grow text-6xl font-black uppercase leading-none md:text-9xl">
                        Let&apos;s build.
                    </h2>
                </div>

                <div className="flex flex-col justify-end gap-8">
                    <div>
                        <p className="text-sm uppercase tracking-wider text-[var(--muted)]">
                            Email
                        </p>
                        <a href="https://mail.google.com/mail?view=cm&fs=1&to=nirajmaharjan783@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-2xl font-bold transition hover:scale-105 md:text-3xl"
                        >
                            nirajmaharjan783@gmail.com
                        </a>
                    </div>

                    <div>
                        <p className="text-sm uppercase tracking-wide text-[var(--muted)]">
                            Social
                        </p>
                        <div className="mt-3 flex flex-wrap gap-4 text-sm uppercase tracking-wider text-[var(--muted)]">
                            <a
                                href="https://github.com/nirajmaharjan783"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition hover:scale-150 hover:text-[var(--foreground)]"
                            >
                                GitHub
                            </a>
                            <a
                                href="https://www.linkedin.com/in/niraj-maharjan-7256772b5"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition hover:scale-150 hover:text-[var(--foreground)]"
                            >
                                LinkedIn
                            </a>
                            <a
                                href="https://www.instagram.com/nirajmaharjan783"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition hover:scale-150 hover:text-[var(--foreground)]"
                            >
                                Instagram
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-20 flex justify-between border-t border-white/10 pt-8 text-sm text-[var(--muted)]">
                <p>©2026 WILDSTUDIO®</p>
                <p>Made with Next.js + GSAP</p>
            </div>
        </footer>
    );
}