import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        dfnc: {
          dfnexus: '#3f6212',
          dfm: '#1e40af',
          dfc: '#5b21b6',
          dfnews: '#065f46',
          dfnetwork: '#92400e',
          dfg: '#86198f',
        },
      }
    },
  },
  plugins: [],
} satisfies Config;
