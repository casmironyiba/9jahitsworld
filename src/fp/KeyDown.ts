interface Prop {
  (returnedOutputRef: React.MutableRefObject<any>, event?: any): any;
}

const keyDown: Prop = (returnedOutputRef, event) => {
  if (event?.key === "Enter") return returnedOutputRef.current.focus();
};

export default keyDown;
