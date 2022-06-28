export const getHTMLElements = (name: any) =>
  document.querySelectorAll<HTMLElement>(`${name}`);

export default getHTMLElements;
