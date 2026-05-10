"use client";

import { useEffect, useState } from "react";

type Theme = "night" | "day";

function getInitialTheme(): Theme {
    if (typeof window === "undefined") {
        return "night";
    }

    const savedTheme = localStorage.getItem("theme");

    return savedTheme === "day" ? "day" : "night";
}

export default function ThemeToggle() {
    const [theme, setTheme] = useState<Theme>(getInitialTheme);

    useEffect(() => {
        if (theme === "day") {
            document.documentElement.classList.add("light");
        } else {
            document.documentElement.classList.remove("light");
        }

        localStorage.setItem("theme", theme);
    }, [theme]);

    function toggleTheme() {
        setTheme((currentTheme) =>
            currentTheme === "night" ? "day" : "night"
        );
    }

    return (
        <button
            onClick={toggleTheme}
            className="rounded-full border border-[var(--border)] px-5 py-2 text-sm uppercase tracking-wider transition hover:bg-[var(--foreground)] hover:text-[var(--background)]"
        >
            {theme === "night" ? "Day" : "Night"}
        </button>
    );
}