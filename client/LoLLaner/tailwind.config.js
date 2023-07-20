/** @type {import('tailwindcss').Config} */
import vitePluginRequire from "vite-plugin-require";
export default {
  plugins: [
		vitePluginRequire({
			// @fileRegex RegExp
			// optional：default file processing rules are as follows
			// fileRegex:/(.jsx?|.tsx?|.vue)$/

            // Conversion mode. The default mode is import
            // importMetaUrl | import
            // importMetaUrl see https://vitejs.cn/guide/assets.html#new-url-url-import-meta-url 
            // translateType: "importMetaUrl" | "import";
		}),
	],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      '3xl': '2000px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        mont: ["Montserrat", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
    },
    keyframes: {
      moveRight: {
        "0%": { transform: "translateX(0)" },
        "100%": { transform: "translateX(-107%)" },
      },
      },
      animation: {
        moveRight: "moveRight 15s infinite linear",
      },

      colors: {
        primaryWhite: "#F8F8F8",
        blue: "#0BC6E3",
        darkGold: "#C28F2C",
        liteGold: "#CDA959",
        blacklite: "#111111",
      },
      
    plugins: [],
  },
},}

