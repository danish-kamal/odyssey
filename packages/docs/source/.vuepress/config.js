// .vuepress/config.js

module.exports = {
  title: 'Odyssey',
  description: 'The Okta design system',
  themeConfig: {
    sidebarDepth: 2,
    lastUpdated: 'Last Updated',
    repo: 'okta/odyssey',
    repoLabel: 'okta/odyssey',
    docsDir: 'packages/docs/source',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: 'Help us improve this page!',
    sidebar: [
      {
        title: 'Home',   // required
        path: '/',      // optional, link of the title, which should be an absolute path and must exist
      },
      {
        title: 'Foundations',
        children: [
          { title: 'Color', path: '/foundations/color' },
          { title: 'Elements', path: '/foundations/elements' },
          { title: 'Spacing', path: '/foundations/spacing' },
          { title: 'Type', path: '/foundations/type' },
        ]
      },
      {
        title: 'Components',
        children: [
          { title: 'Banner', path: '/components/banner' },
          { title: 'Button', path: '/components/button' },
          { title: 'Callout', path: '/components/callout' },
          { title: 'Card', path: '/components/card' },
          { title: 'Checkbox', path: '/components/checkbox' },
          { title: 'Dropdown', path: '/components/dropdown' },
          { title: 'Form', path: '/components/form' },
          { title: 'Link', path: '/components/link' },
          { title: 'Meter', path: '/components/meter' },
          { title: 'Modal', path: '/components/modal' },
          { title: 'Navigation', path: '/components/navigation' },
          { title: 'Number Input', path: '/components/number-input' },
          { title: 'Radio Button', path: '/components/radio-button' },
          { title: 'Select', path: '/components/select' },
          { title: 'Switch', path: '/components/switch' },
          { title: 'Table', path: '/components/table' },
          { title: 'Text Input', path: '/components/text-input' },
          { title: 'Toast', path: '/components/toast' },
          { title: 'Tooltip', path: '/components/tooltip' },
          { title: 'Top Bar', path: '/components/top-bar' },
        ]
      }
    ]
  }
}
