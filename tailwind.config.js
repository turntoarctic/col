/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        colors: {
          code: {
            attrName: "#faf594",
            attrValue: "##b9f18d",
            doctype: "#616161",
            keyword: "##958df1",
            punctuation: "##70cff8",
            string: "#b9f18d",
            tag: "#f98181",
          },
          transparency: {
            box: {
              3: "rgba(13, 13, 13, 0.03)",
              5: "rgba(13, 13, 13, 0.05)",
            },
          },
          gray: {
            DEFAULT: "",
            900: "#0d0d0d",
            800: "#262626",
            700: "#3a3a3a",
            600: "#4e4e4e",
            500: "#616161",
            400: "#737373",
            300: "#919191",
            200: "#b3b3b3",
            100: "#d6d6d6",
            50: "#e8e8e8",
          },
          accent: {
            DEFAULT: "#faf594",
            50: "#fffffa",
            100: "#fffef4",
            200: "#fefde4",
            300: "#fdfbd4",
            400: "#fcf8b4",
            500: "#faf594",
            600: "#e1dd85",
            700: "#bcb86f",
            800: "#969359",
            900: "#7b7849",
          },
          success: {
            DEFAULT: "#b9f18d",
            50: "#fcfef9",
            100: "#f8fef4",
            200: "#eefce3",
            300: "#e3f9d1",
            400: "#cef5af",
            500: "#b9f18d",
            600: "#a7d97f",
            700: "#8bb56a",
            800: "#6f9155",
            900: "#5b7645",
          },
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
