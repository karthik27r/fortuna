import React from "react";

import { createContext, useContext, useEffect, useState } from "react"

type Theme = "dark" | "light" | "system"

type BackgroundWrapperProps = {
    children: React.ReactNode
    defaultTheme?: Theme
    storageKey?: string
}

type BackgroundWrapperState = {
    theme: Theme
    setTheme: (theme: Theme) => void
}

const initialState: BackgroundWrapperState = {
    theme: "system",
    setTheme: () => null,
}

const BackgroundWrapperContext = createContext<BackgroundWrapperState>(initialState)

export function BackgroundWrapper({
    children,
    defaultTheme = "system",
    storageKey = "ui-theme",
    ...props
}: BackgroundWrapperProps) {
    const [theme, setTheme] = useState<Theme>(
        () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
    )

    useEffect(() => {
        const root = window.document.documentElement

        root.classList.remove("light", "dark")

        if (theme === "system") {
            const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
                .matches
                ? "dark"
                : "light"

            root.classList.add(systemTheme)
            return
        }

        root.classList.add(theme)
    }, [theme])

    const value = {
        theme,
        setTheme: (theme: Theme) => {
            localStorage.setItem(storageKey, theme)
            setTheme(theme)
        },
    }

    return (
        <BackgroundWrapperContext.Provider {...props} value={value}>
            {children}
        </BackgroundWrapperContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(BackgroundWrapperContext)

    if (context === undefined)
        throw new Error("useTheme must be used within a BackgroundWrapper")

    return context
}