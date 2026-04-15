export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        seidor: {
          main: 'var(--color-seidor-main)',
          hard: 'var(--color-seidor-hard)',
          light: 'var(--color-seidor-light)',
          'main-text': 'var(--color-seidor-main-text)'
        },
        neutral: {
          100: 'var(--color-neutral-100)',
          400: 'var(--color-neutral-400)',
          500: 'var(--color-neutral-500)',
          800: 'var(--color-neutral-800)',
          900: 'var(--color-neutral-900)',
          body: 'var(--color-neutral-body)'
        },
        info: {
          main: 'var(--color-info-main)',
          hard: 'var(--color-info-hard)',
          light: 'var(--color-info-light)'
        },
        success: {
          main: 'var(--color-success-main)',
          hard: 'var(--color-success-hard)',
          light: 'var(--color-success-light)'
        },
        danger: {
          main: 'var(--color-danger-main)',
          hard: 'var(--color-danger-hard)',
          light: 'var(--color-danger-light)'
        },
        warning: {
          main: 'var(--color-warning-main)',
          hard: 'var(--color-warning-hard)',
          light: 'var(--color-warning-light)'
        },
        indido: {
          main: 'var(--color-indido-main)',
          hard: 'var(--color-indido-hard)',
          light: 'var(--color-indido-light)'
        },
        sakura: {
          main: 'var(--color-sakura-main)',
          hard: 'var(--color-sakura-hard)',
          light: 'var(--color-sakura-light)'
        }
      },
      fontSize: {
        title: ['var(--fs-title)', { lineHeight: 'var(--lh-title)', fontWeight: '800' }],
        h1: ['var(--fs-h1)', { lineHeight: 'var(--lh-h1)', fontWeight: '800' }],
        h2: ['var(--fs-h2)', { lineHeight: 'var(--lh-h2)', fontWeight: '600', letterSpacing: '-0.75px' }],
        h3: ['var(--fs-h3)', { lineHeight: 'var(--lh-h3)', fontWeight: '600', letterSpacing: '-0.6px' }],
        h4: ['var(--fs-h4)', { lineHeight: 'var(--lh-h4)', fontWeight: '600', letterSpacing: '-0.5px' }],
        h5: ['var(--fs-h5)', { lineHeight: 'var(--lh-h5)', fontWeight: '600' }],
        h6: ['var(--fs-h6)', { lineHeight: 'var(--lh-h6)', fontWeight: '600' }],
        lead: ['var(--fs-lead)', { lineHeight: 'var(--lh-lead)', fontWeight: '400' }],
        large: ['var(--fs-large)', { lineHeight: 'var(--lh-large)', fontWeight: '600' }],
        p: ['var(--fs-p)', { lineHeight: 'var(--lh-p)', fontWeight: '400' }],
        quote: ['var(--fs-quote)', { lineHeight: 'var(--lh-quote)', fontWeight: '400' }],
        strong: ['var(--fs-strong)', { lineHeight: 'var(--lh-strong)', fontWeight: '700' }],
        label: ['var(--fs-label)', { lineHeight: 'var(--lh-label)', fontWeight: '500' }],
        small: ['var(--fs-small)', { lineHeight: 'var(--lh-small)', fontWeight: '500' }],
        subtle: ['var(--fs-subtle)', { lineHeight: 'var(--lh-subtle)', fontWeight: '400' }],
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
