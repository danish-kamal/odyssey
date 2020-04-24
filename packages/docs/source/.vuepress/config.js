// .vuepress/config.js

module.exports = {
  themeConfig: {
    nav: [
      {
        title: 'Getting Started', // required
        children: [
          { title: 'UI Status', link: '/getting-started/status', isVisible: true },
          { title: 'Changelog', link: '/getting-started/changelog', isVisible: true},
        ]
      },
      {
        title: 'Foundations',
        children: [
          { title: 'Color', link: '/foundations/color', isVisible: true },
          { title: 'Elements', link: '/foundations/elements', isVisible: true },
          { title: 'Spacing', link: '/foundations/spacing', isVisible: true },
          { title: 'Type', link: '/foundations/type', isVisible: true },
          { title: 'Grid', link: '/foundations/grid', isVisible: false },
        ]
      },
      {
        title: 'Components',
        children: [
          { title: 'Banner', link: '/components/banner', isVisible: false },
          { title: 'Button', link: '/components/button', isVisible: true },
          { title: 'Callout', link: '/components/callout', isVisible: false },
          { title: 'Card', link: '/components/card', isVisible: false },
          { title: 'Checkbox', link: '/components/checkbox', isVisible: true },
          { title: 'Dropdown', link: '/components/dropdown', isVisible: false },
          { title: 'Form', link: '/components/form', isVisible: true },
          { title: 'Link', link: '/components/link', isVisible: true },
          { title: 'Meter', link: '/components/meter', isVisible: false },
          { title: 'Modal', link: '/components/modal', isVisible: true },
          { title: 'Navigation', link: '/components/navigation', isVisible: false },
          { title: 'Number Input', link: '/components/number-input', isVisible: false },
          { title: 'Radio Button', link: '/components/radio-button', isVisible: true },
          { title: 'Select', link: '/components/select', isVisible: true },
          { title: 'Switch', link: '/components/switch', isVisible: false },
          { title: 'Table', link: '/components/table', isVisible: true },
          { title: 'Text Input', link: '/components/text-input', isVisible: true },
          { title: 'Toast', link: '/components/toast', isVisible: false },
          { title: 'Tooltip', link: '/components/tooltip', isVisible: true },
          { title: 'Top Bar', link: '/components/top-bar', isVisible: false },
        ],
      },
    ]
  },
  plugins: [
    [
      'vuepress-plugin-clean-urls',
      {
        normalSuffix: '/',
        indexSuffix: '/',
        notFoundlink: '/404.html',
      },
    ],
  ],
}
