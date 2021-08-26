export async function loadRemoteComponent(config) {
  return loadScript(config).then(() => loadComponentByWebpack(config));
}

function loadScript(config) {
  return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = config.url;
      script.type = 'text/javascript';
      script.async = true;
      script.onload = () => {
          console.log(`Dynamic Script Loaded: ${config.url}`);
          document.head.removeChild(script);
          resolve();
      };
      script.onerror = () => {
          console.error(`Dynamic Script Error: ${config.url}`);
          document.head.removeChild(script);
          reject();
      };
      document.head.appendChild(script);
  });
}

async function loadComponentByWebpack({ scope, module }) {
  // Initializes the share scope. This fills it with known provided modules from this build and all remotes
  await __webpack_init_sharing__('default');
  const container = window[scope]; // or get the container somewhere else
  // Initialize the container, it may provide shared modules
  await container.init(__webpack_share_scopes__.default);
  const factory = await window[scope].get(module);
  return factory();
}