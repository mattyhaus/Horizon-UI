/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#000000",
                surface: "#050505",
                primary: "#000000",
                text: "#ffffff",
                accent: "#FFFC00", // Snap Yellow
                secondary: "#1DA1F2", // Twitter Blue
                'yt-red': '#FF0000',
                'wa-green': '#25D366',
                'tt-cyan': '#00F2FE',
                'tt-pink': '#FE0979',
                'ig-magenta': '#C13584',
                'rd-orange': '#FF4500',
                'li-blue': '#0077b5',
                'fb-blue': '#1877F2',
            },
            fontFamily: {
                sans: ['"Space Grotesk"', 'sans-serif'],
                body: ['"DM Sans"', 'sans-serif'],
                serif: ['"Playfair Display"', 'serif'],
                mono: ['"JetBrains Mono"', 'monospace'],
            },
            borderRadius: {
                '4xl': '2rem',
                '5xl': '2.5rem',
                '6xl': '3rem',
            },
            animation: {
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            }
        },
    },
    plugins: [],
}
