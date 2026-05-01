/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: 'var(--color-primary, #0f4c81)',
                    600: 'var(--color-primary-600, #08345a)',
                },
                'primary-variant': 'var(--color-primary-variant, #00d3f2)',

                secondary: 'var(--color-secondary, #f59e0b)',
                accent: 'var(--color-accent, #00d3f2)',

                success: 'var(--color-success, #16a34a)',
                warning: 'var(--color-warning, #f97316)',
                error: 'var(--color-error, #dc2626)',

                neutral: {
                    100: 'var(--neutral-100, #f3f4f6)',
                    500: 'var(--neutral-500, #6b7280)',
                    700: 'var(--neutral-700, #374151)',
                    900: 'var(--neutral-900, #111827)',
                },
            },

            spacing: {
                'ds-1': 'var(--space-1, 0.25rem)',   // 4px
                'ds-2': 'var(--space-2, 0.5rem)',    // 8px
                'ds-3': 'var(--space-3, 1rem)',      // 16px
                'ds-4': 'var(--space-4, 1.5rem)',    // 24px
                'ds-5': 'var(--space-5, 2rem)',      // 32px
                'ds-6': 'var(--space-6, 3rem)',      // 48px
                'ds-7': 'var(--space-7, 4rem)',      // 64px
            },

            borderRadius: {
                'ds-sm': '4px',
                'ds-md': '8px',
                'ds-lg': '12px',
            },

            boxShadow: {
                'ds-base': '0 1px 3px rgba(16, 24, 40, 0.04)',
                'ds-raised': '0 6px 18px rgba(16, 24, 40, 0.08)',
            },

            fontFamily: {
                sans: [
                    'Inter',
                    'system-ui',
                    '-apple-system',
                    'Segoe UI',
                    'Roboto',
                    'Helvetica Neue',
                    'Arial',
                    'sans-serif',
                ],
            },

            fontSize: {
                h1: ['2.25rem', { lineHeight: '1.4', fontWeight: '700' }],    // 36px
                h2: ['1.875rem', { lineHeight: '1.4', fontWeight: '700' }],   // 30px
                h3: ['1.5rem', { lineHeight: '1.5', fontWeight: '600' }],     // 24px
                h4: ['1.25rem', { lineHeight: '1.5', fontWeight: '600' }],    // 20px
                body: ['1rem', { lineHeight: '1.6', fontWeight: '400' }],     // 16px
                small: ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }], // 14px
            },

            ringOffsetWidth: {
                'focus': '8px',
            },

            ringWidth: {
                'focus': '3px',
            },

            ringColor: {
                focus: 'var(--color-accent, #00d3f2)',
            },
        },
    },

    plugins: [
        function ({ addUtilities }) {
            addUtilities({
                '.focus-ring': {
                    '@apply focus:outline-none focus:ring-2 focus:ring-offset-focus focus:ring-focus': {},
                },
                '.focus-ring-3': {
                    '@apply focus:outline-none focus:ring-3 focus:ring-focus': {},
                },
            });
        },
    ],
};
