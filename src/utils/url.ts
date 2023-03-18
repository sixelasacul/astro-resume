export function removeProtocolFromUrl(url: string | URL) {
  const parsedUrl = typeof url === 'string' ? new URL(url) : url
  return parsedUrl.href.replace(parsedUrl.protocol, '').replace('//', '')
}
