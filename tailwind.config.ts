import type { Config } from 'tailwindcss'

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        bsm: "690px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-primary": "linear-gradient(270deg, #903AFF 0%, #FE34B9 100%)",
      },
      backgroundColor: {
        "l-grey": "rgba(248,249,250,.1)",
      },
      width: {
        "h-w": "cal(100% - 32px)",
        slide: "cal(50% - 10px)",
      },
      colors: {
        primary: "linear-gradient(270deg, #903AFF 0%, #FE34B9 100%)",
        secondary: "rgba(21, 14, 40, 1)",
        tertiary: "rgba(144, 58, 255, 1)",
        uni: "rgba(212, 52, 254, 1)",
        opaque: "rgba(255, 255, 255, 0.03)",
      },
    },
  },
  plugins: [],
};
export default config
