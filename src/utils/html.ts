//import serialize from "serialize-javascript";

export const html = (
  markup: string | TemplateStringsArray,
  styles: string | TemplateStringsArray,
  title: string | TemplateStringsArray,
  data: any
) => `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    ${styles}
    <title>${title}</title>
  </head>
  <body>
    <div id="root">${markup}</div>
    <script src="bundle.js" defer></script>
    <script>window.__INITIAL_DATA__=${JSON.stringify(data)}</script>
  </body>
  </html>
`;

export default html;
