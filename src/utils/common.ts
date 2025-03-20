
/** use this to set search params without reloading page */
export const setUrlQuery = (key: string, value: string): void => {
  const url = new URL(window.location);
  url.searchParams.set(key, value);
  window.history.pushState(null, "", url.toString());
};

export const getUrlQuery = (key: string, getAll = false): string | Array<string> => {
  const urlSearchParams = new URLSearchParams(window.location.search);
  return getAll ? urlSearchParams.getAll(key) : (urlSearchParams.get(key) || "");
};

export const htmltoText = (html: string): string => {
  let text = html;
  text = text.replace(/\n/giu, "");
  text = text.replace(/<style([\s\S]*?)<\/style>/giu, "");
  text = text.replace(/<script([\s\S]*?)<\/script>/giu, "");
  text = text.replace(/<a.*?href="(.*?)[\?\"].*?>(.*?)<\/a.*?>/gi, " $2 $1 ");
  text = text.replace(/<\/div>/giu, "\n\n");
  text = text.replace(/<\/li>/giu, "\n");
  text = text.replace(/<li.*?>/giu, "  *  ");
  text = text.replace(/<\/ul>/giu, "\n\n");
  text = text.replace(/<\/p>/giu, "\n\n");
  text = text.replace(/<br\s*[/]?>/giu, "\n");
  text = text.replace(/<[^>]+>/giu, "");
  text = text.replace(/^\s*/gimu, "");
  text = text.replace(/ ,/giu, ",");
  text = text.replace(/ +/giu, " ");
  text = text.replace(/\n+/giu, "\n\n");
  text = text.replace(/&nbsp;/giu, " ");
  return text;
};
