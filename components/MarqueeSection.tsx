export default function MarqueeSection() {
    return (
        <section className="overflow-hidden border-y border-[var(--border)] py-10">
            <div className="marquee flex whitespace-nowrap text-6xl font-black uppercase tracking-tighter md:text-8xl">
                <span className="mr-10">Wild ideas! — Let&apos;s dive in! —</span>
                <span className="mr-10">Wild ideas! — Let&apos;s dive in! —</span>
                <span className="mr-10">Wild ideas! — Let&apos;s dive in! —</span>
            </div>
        </section>
    );
}