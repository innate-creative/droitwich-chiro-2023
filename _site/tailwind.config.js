const customTheme = require('./_data/theme.json')

module.exports = {
  purge: [
    "./_includes/**/*.html",
    "./_layouts/**/*.html",
    "./_posts/*.md",
    "./*.html",
  ],
  darkMode: false,
  theme: {
    extend: {
      customTheme,
      fontSize: {
        'tiny': '0.65rem'
      },
      colors: {
        'main': customTheme.colors.main_color,
        'secondary': customTheme.colors.secondary_color,
        'accent': customTheme.colors.accent_color,
        'highlight': customTheme.colors.highlight_color,
        'shade': customTheme.colors.highlight_shade_color
      }      
    },
    fontFamily: {
      'heading': customTheme.fonts.heading_font_family,
      'body': customTheme.fonts.body_font_family
    },    
  },
  variants: {
    extend: {
      visibility: ["group-hover"],
    }
  },
  plugins: [require("@tailwindcss/typography")],
};
