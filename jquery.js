window.$ = (selector, root = document) => root.querySelector(selector);
window.$$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
window.ready = (fn) => {
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn, { once: true });
  else fn();
};
