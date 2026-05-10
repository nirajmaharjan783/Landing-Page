
export default function ContactPage() {
    return (
        <div className="min-h-screen flex items-center justify-center px-6">

            <div className="text-center space-y-8">

                <h1 className="text-5xl font-bold tracking-tight">
                    Let&apos;s work together
                </h1>

                <p className="text-[var(--muted)] text-lg">
                    Have an idea? Let&apos;s build something amazing.
                </p>

                <div className="space-y-4">

                    <a
                        href="tel:+9779808809784"
                        className="block text-2xl font-semibold transition hover:scale-105"
                    >
                        📞 +977 9808809784
                    </a>

                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=nirajmaharjan78@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-2xl font-semibold transition hover:scale-105"
                    >
                        ✉️ nirajmaharjan783@gmail.com
                    </a>

                </div>

                <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=nirajmaharjan783@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 rounded-full border border-[var(--border)] px-6 py-3 uppercase tracking-wider text-sm transition hover:bg-[var(--foreground)] hover:text-[var(--background)]">
                    Send Message
                </a>

            </div>

        </div>
    );
}