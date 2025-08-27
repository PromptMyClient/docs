import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Prompt My Client React</span>,
  project: {
    link: 'https://github.com/rajanlagah/prompt-my-client-react',
  },
  docsRepositoryBase: 'https://github.com/rajanlagah/prompt-my-client-react',
  footer: {
    text: 'Prompt My Client React - AI-Powered Text Enhancement for React',
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Prompt My Client React" />
      <meta property="og:description" content="AI-powered dropdown interface for text enhancement and transformation in React applications" />
    </>
  ),
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Prompt My Client React'
    }
  },
  primaryHue: 210,
  primarySaturation: 100,
}

export default config
