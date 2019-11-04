export function addScriptToHead(url: string, onload?: () => void) {
  const head = document.getElementsByTagName('head')[0];
  const script = document.createElement('script');
  script.src = url;
  if (onload) { script.onload = onload }
  head.appendChild(script);
}
