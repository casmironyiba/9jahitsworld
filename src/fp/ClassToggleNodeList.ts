const classToggleNodeList = (
  element: HTMLElement | null,
  arg: NodeListOf<HTMLElement>
) =>
  element?.addEventListener("click", () =>
    arg.forEach((element) => element.classList.toggle("open"))
  );

export default classToggleNodeList;
