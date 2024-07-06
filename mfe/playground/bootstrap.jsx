import React from 'react';
import { createRoot } from 'react-dom/client';

const loadFM = async () => {
  return new Promise(resolve => {
    const script = document.createElement('script')
    script.src = 'http://localhost:3000/remoteEntry.js'
    script.onload = () => {
      const proxy = {
        get: (request) => window.microfrontends.get(request),
        init: (arg) => {
          try {
            return window.microfrontends.init(arg)
          } catch (e) {
            console.log('remote container already initialized')
          }
        }
      }
      resolve(proxy)
    }
    // inject this script with the src set to the versioned remoteEntry.js
    document.head.appendChild(script);
  });
}

const createContainer = (id) => {
  const el = document.createElement('div');
  el.id = id;
  return document.body.appendChild(el);
}

const renderVanillaApp = () => {
  createContainer('vanilla-js-root')
  import('../vanilla-app');
}

const renderReactFM = async () => {
  const { get, init } = await loadFM();
  await __webpack_init_sharing__('default');
  await init(__webpack_share_scopes__.default);

  const factory = await get('.');
  const { ReactFM } = factory();

  const rootEl = createContainer('react-fm-root');
  const root = createRoot(rootEl);
  root.render(<ReactFM />);
};

renderVanillaApp();
renderReactFM();

