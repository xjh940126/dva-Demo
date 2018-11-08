
// ref: https://umijs.org/config/
export default {
  theme: {
    'primary-color': '#4961AB',
    'border-radius-base': 0
  },
  
  extraBabelPlugins: [
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }]
  ],

  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: true,
      title: '邢家豪的Demo',
      dll: true,
      routes: {
        exclude: [],
      },
      hardSource: true,
      plugins: [
        [
          'umi-plugin-react',
          {
            dva: {
              immer: true
            }
          }
        ],
      ],
    }],
  ],
}
