const stats = [
    {
        number: "50+",
        label: "Awards & recognition",
    },
    {
        number: "900+",
        label: "Projects completed",
    },
    {
        number: "20+",
        label: "Creative minds",
    },
    {
        number: "10+",
        label: "Years of experience",
    },
];

export default function AboutSection() {
    return (
        <section id="about" className="px-6 py-24 md:px-12">
            <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
                <p className="text-sm uppercase tracking-[0.4em] text-[var(--muted)]">
                    Who we are
                </p>

                <div>
                    <h2 className="text-4xl font-bold leading-tight md:text-6xl">
                        We craft digital identities that turn ordinary brands into memorable
                        online experiences.
                    </h2>

                    <p className="mt-8 max-w-3xl text-lg leading-8 text-[var(--muted)]">
                        Our team combines design, technology, and storytelling to build
                        websites that feel premium, fast, and visually powerful.
                    </p>

                    <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {stats.map((stat) => (
                            <div
                                key={stat.label}
                                className="rounded-[2rem] border border-[var(--border)] p-6"
                            >
                                <h3 className="text-5xl font-black">{stat.number}</h3>
                                <p className="mt-3 text-sm uppercase tracking-wider text-[var(--muted)]">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}