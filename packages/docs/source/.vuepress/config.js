// .vuepress/config.js

module.exports = {
  title: 'Odyssey',
  description: 'The Okta design system',
  themeConfig: {
    nav: [
      {
        title: 'Getting Started', // required
        children: [
          { title: 'UI Status', path: '/getting-started/status', isVisible: true },
          { title: 'Changelog', path: '/getting-started/changelog', isVisible: true},
        ]
      },
      {
        title: 'Foundations',
        children: [
          { title: 'Color', path: '/foundations/color', isVisible: true },
          { title: 'Elements', path: '/foundations/elements', isVisible: true },
          { title: 'Spacing', path: '/foundations/spacing', isVisible: true },
          { title: 'Type', path: '/foundations/type', isVisible: true },
          { title: 'Grid', path: '/foundations/grid', isVisible: false },
        ]
      },
      {
        title: 'Components',
        children: [
          { title: 'Banner', path: '/components/banner', isVisible: false },
          { title: 'Button', path: '/components/button', isVisible: true },
          { title: 'Callout', path: '/components/callout', isVisible: false },
          { title: 'Card', path: '/components/card', isVisible: false },
          { title: 'Checkbox', path: '/components/checkbox', isVisible: true },
          { title: 'Dropdown', path: '/components/dropdown', isVisible: false },
          { title: 'Form', path: '/components/form', isVisible: true },
          { title: 'Link', path: '/components/link', isVisible: true },
          { title: 'Meter', path: '/components/meter', isVisible: false },
          { title: 'Modal', path: '/components/modal', isVisible: true },
          { title: 'Navigation', path: '/components/navigation', isVisible: false },
          { title: 'Number Input', path: '/components/number-input', isVisible: false },
          { title: 'Radio Button', path: '/components/radio-button', isVisible: true },
          { title: 'Select', path: '/components/select', isVisible: true },
          { title: 'Switch', path: '/components/switch', isVisible: false },
          { title: 'Table', path: '/components/table', isVisible: true },
          { title: 'Text Input', path: '/components/text-input', isVisible: true },
          { title: 'Toast', path: '/components/toast', isVisible: false },
          { title: 'Tooltip', path: '/components/tooltip', isVisible: true },
          { title: 'Top Bar', path: '/components/top-bar', isVisible: false },
        ]
      }
    ]
  }
}
