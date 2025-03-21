/** use this to set search params without reloading page */
export const setUrlQuery = (key: string, value: string): void => {
  const url = new URL(window.location.href);
  url.searchParams.set(key, value);
  window.history.pushState(null, '', url.toString());
};

export const getUrlQuery = (key: string, getAll = false): string | Array<string> => {
  const urlSearchParams = new URLSearchParams(window.location.search);
  return getAll ? urlSearchParams.getAll(key) : urlSearchParams.get(key) || '';
};
