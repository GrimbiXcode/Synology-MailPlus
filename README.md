# Synology MailPlus for Franz

This is a Franz recipe for Synology MailPlus

## The following points are still in progress

* SVG Icon [done]
* URL validation
* Notification routine
* Badge generator

## Handle events from electron

https://github.com/meetfranz/plugins/blob/master/docs/backend_api.md#user-content-overrideuseragent

### New Window

https://electronjs.org/docs/api/webview-tag#dom-events

´´´ JS
const { shell } = require('electron')
const webview = document.querySelector('webview')

webview.addEventListener('new-window', (e) => {
  const protocol = require('url').parse(e.url).protocol
  if (protocol === 'http:' || protocol === 'https:') {
    shell.openExternal(e.url)
  }
})
´´´