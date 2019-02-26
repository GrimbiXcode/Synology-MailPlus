"use strict";

module.exports = Franz => class SynologyMailPlus extends Franz {
events = {
    'did-get-redirect-request': '_redirectFix',
  }

  _redirectFix(event) {
    if (event.newURL !== undefined && event.oldURL !== undefined && event.isMainFrame) {
      if (event.isMainFrame) {
        setTimeout(() => this.send('redirect-url', event.newURL), 100);
        event.preventDefault();
      }
    }
  }
}



// TODO: find a nice path to map and validate
// module.exports = Franz => class SynologyMailPlus extends Franz {
//   async validateUrl(url) {
//     try {
//       const resp = await window.fetch(`${url}/index.cgi`, {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
//       const data = await resp.json();

//       return Object.hasOwnProperty.call(data, 'version');
//     } catch (err) {
//       console.error(err);
//     }

//     return false;
//   }
// };

