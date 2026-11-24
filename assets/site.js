// Gemensamt för undersidorna. Laddas direkt efter Tailwind-CDN:et i <head>.

tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "hsl(215, 70%, 25%)",
          foreground: "hsl(0, 0%, 98%)",
          light: "hsl(215, 70%, 35%)",
        },
        secondary: {
          DEFAULT: "hsl(200, 60%, 92%)",
          foreground: "hsl(215, 25%, 15%)",
        },
        accent: {
          DEFAULT: "hsl(160, 65%, 45%)",
          foreground: "hsl(0, 0%, 98%)",
        },
        muted: {
          DEFAULT: "hsl(210, 20%, 70%)",
          foreground: "hsl(215, 15%, 45%)",
        },
        card: {
          DEFAULT: "hsl(0, 0%, 100%)",
          foreground: "hsl(215, 25%, 15%)",
        },
        border: "hsl(210, 20%, 88%)",
      },
      borderRadius: {
        xl: "0.75rem",
      },
    },
  },
};

function toggleMenu() {
  document.querySelector(".mobile-menu").classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function () {
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
});
