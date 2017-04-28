export function b64Encode(str) {
  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function(match, p1) {
    return String.fromCharCode(<any>('0x' + p1));
  }));
}
