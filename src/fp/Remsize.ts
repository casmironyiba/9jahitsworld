export default function remsize(px: number) {
  const defaultFontsize = 16;
  const rem = (1 / defaultFontsize) * px + "rem";
  return rem;
}
