import { MantineThemeOverride } from '@mantine/core'

export const theme: MantineThemeOverride = {
  colorScheme: 'light',
  lineHeight: 1.5,
  colors: {
    primary: ['#323fe8', '#ffcc18', '#fb7b05'],
  },
  fontFamily: 'Inter, system-ui, Helvetica, Arial, sans-serif',
  headings: {
    fontFamily: 'Inter, sans-serif',
    sizes: {
      h1: {
        fontSize: '20px',
        fontWeight: '700',
        lineHeight: '24px',
      },
      h2: {
        fontSize: '12px',
        fontWeight: '400',
        lineHeight: '14px',
      },
      h3: {
        fontSize: '16px',
        fontWeight: '700',
      },
    },
  },
}
