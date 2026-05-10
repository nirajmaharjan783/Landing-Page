export default function Hero() {
    return (
        <section className="flex min-h-screen items-center px-6 pt-28 md:px-12">
            <div className="max-w-7xl">
                <p
                    data-direction="left"
                    className="reveal mb-6 max-w-xl text-base text-[var(--muted)] md:text-lg"
                >
                    We build bold digital experiences through design, branding, and modern
                    web development.
                </p>

                <h1
                    data-direction="right"
                    className="reveal cursor-grow max-w-6xl text-[16vw] font-black uppercase leading-[0.85] tracking-tighter md:text-[10vw]"
                >
                    Roar in the digital wilderness.
                </h1>

                <div
                    data-direction="left"
                    className="reveal mt-10 flex flex-wrap gap-4"
                >
                    <a
                        href="#work"
                        className="rounded-full bg-[var(--foreground)] px-7 py-4 text-sm font-semibold uppercase tracking-wider text-[var(--background)] transition hover:scale-105"
                    >
                        Explore work
                    </a>

                    <a
                        href="#contact"
                        className="rounded-full border border-[var(--border)] px-7 py-4 text-sm font-semibold uppercase tracking-wider transition hover:bg-[var(--foreground)] hover:text-[var(--background)]"
                    >
                        Let&apos;s talk
                    </a>
                </div>
            </div>
        </section>
    );
}