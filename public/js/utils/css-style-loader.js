console.log('cssStyleloader is loaded')
function getExistingLinkElementByKey(key) {
  return document.head.querySelector(
    `link[rel="stylesheet"].${getClassNameForKey(key)}`
  );
}

function getLinkElementForKey(key) {
  return getExistingLinkElementByKey(key) || createLinkElementWithKey(key);
}

function createLinkElementWithKey(key) {
  const linkEl = document.createElement("link");
  linkEl.setAttribute("rel", "stylesheet");
  linkEl.classList.add(getClassNameForKey(key));
  document.head.appendChild(linkEl);
  return linkEl;
}

function getClassNameForKey(key) {
  return `style-manager-${key}`;
}

function removeStylesheet(key) {
  const link = getExistingLinkElementByKey(key);
  if (!link) return;
  link.remove();
}

/**
 * @description lazy load a css stylesheet and return a callback that removes it when component unmounts
 * @returns
 */
 function cssStyleLoader(
  href,
  key = Math.random().toString(16).slice(2)
) {
  getLinkElementForKey(key).setAttribute("href", href);
  return () => removeStylesheet(key);
}

window.cssStyleLoader = cssStyleLoader
