import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	container: {
		center: true,
		padding: "15px",
	},
	screens: {
		sm: "640px",
		md: "768px",
		lg: "960px",
		xl: "1200px",
	},
	fontFamily: {
		primary: "var(--font-jetbrainsMono)",
	},
  	extend: {
  		colors: {
  			primary: "#1D1C22",
			accent: {
				default: "#EEB434",
				hover: "#DC9F14"
			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
	// eslint-disable-next-line @typescript-eslint/no-require-imports
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
