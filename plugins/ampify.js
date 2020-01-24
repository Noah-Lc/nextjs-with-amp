const ampScript = '<script async src="https://cdn.ampproject.org/v0.js"></script>'

module.exports = (html) => {
    // Remove newlines
    html = html.replace(/\r?\n|\r/g, '')
    // Combine css into single tag
    let styleConcat = ''
    html = html.replace(/<style[^>]*data-vue-ssr[^>]*>(.*?)?<\/style>/gi, (match, sub) => {
      styleConcat += sub.replace(/\[.*?\]/gim, '')
      return ''
    })
  
    html = html.replace('</head>', `<style amp-custom data-vue-ssr>${styleConcat}</style></head>`)
    // Remove every script tag from generated HTML
    html = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    // Add AMP script before </head>
    html = html.replace('</head>', ampScript + '</head>')
    return html
}