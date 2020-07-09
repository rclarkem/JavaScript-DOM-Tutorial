let pageBanner = document.querySelector('#page-banner')
console.log(pageBanner, `The node type is ${pageBanner.nodeType}`)
console.log(pageBanner, `The node name is ${pageBanner.nodeName}`)
console.log(pageBanner, `Has Child nodes is:  ${pageBanner.hasChildNodes()}`)

const clonedBanner = pageBanner.cloneNode(true)
console.log(clonedBanner)
