// tailwind.config.js
export default {
    theme: {
      extend: {
        keyframes: {
            scrollLeft: {
              '0%': { left: '100%' },
              '100%': { left: '-200px' },
            },
          },
          animation: {
            scrollLeft: 'scrollLeft 30s linear infinite',
          },
      },
    },
    plugins: [
      require('@tailwindcss/line-clamp'),
    ],
  };
  