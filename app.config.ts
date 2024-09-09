export default defineAppConfig({
  title: 'Sink',
  description: 'Vic\'s personal Sink instance.',
  image: 'https://dl.nosesisaid.com/FpCNe3zX0AAF9cU.jpg',
  previewTTL: 24 * 3600, // 24h
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
