const projects = [
    {
        title: "Loftloom",
        tags: "UI Design, UX, Wireframe",
    },
    {
        title: "Imusic",
        tags: "Research, UX, UI Design",
    },
    {
        title: "Technis",
        tags: "UX, UI Design, Development",
    },
];

export default function WorkSection() {
    return (
        <section id="work" className="px-6 py-24 md:px-12 transition hover:scale-105">
            <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row">
                <p
                    data-direction="left"
                    className="reveal text-sm uppercase tracking-[0.4em] text-[var(--muted)]"
                >
                    Recent work
                </p>

                <h2
                    data-direction="right"
                    className="reveal max-w-3xl text-4xl font-bold leading-tight md:text-6xl"
                >
                    In the creative wilderness, clients find our work truly beloved.
                </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                {projects.map((project, index) => (
                    <article
                        key={project.title}
                        data-direction="left"
                        className="reveal cursor-grow group rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-5 transition duration-300 hover:bg-[var(--card-hover)] hover:text-[var(--card-hover-text)]"
                    >
                        <div className="mb-8 flex h-80 items-center justify-center rounded-[1.5rem] border border-[var(--border)] text-7xl font-black text-[var(--muted)]">
                            0{index + 1}
                        </div>

                        <h3 className="text-3xl font-bold uppercase">{project.title}</h3>

                        <p className="mt-2 text-sm text-[var(--muted)]">{project.tags}</p>

                        <a
                            href="#"
                            className="mt-8 inline-block text-sm font-semibold uppercase tracking-wider"
                        >
                            View project
                        </a>
                    </article>
                ))}
            </div>
        </section>
    );
}