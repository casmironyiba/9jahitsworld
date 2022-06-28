interface Props {
  (
    name: string | TemplateStringsArray,
    duration: string | TemplateStringsArray,
    timingFunction: string | TemplateStringsArray,
    delay: string | TemplateStringsArray,
    fillMode: string | TemplateStringsArray
  ): string | TemplateStringsArray;
}

const animation: Props = (name, duration, timingFunction, delay, fillMode) => `
  animation-name:${name};
  animation-duration:${duration};
  animation-timing-function:${timingFunction};
  animation-delay:${delay};
  animation-fill-mode:${fillMode}
`;

export default animation;
