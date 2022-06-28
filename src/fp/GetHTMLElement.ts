const getHTMLElement = (name: any) =>
  document.querySelector<HTMLElement>(`${name}`);

export default getHTMLElement;
