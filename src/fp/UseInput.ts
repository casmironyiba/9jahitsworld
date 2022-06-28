import { useState } from "react";

const useInput = (initialValue: any) => {
  const [input, setInput] = useState(initialValue);
  const reset = () => setInput(initialValue);

  const bind = {
    value: input,
    onChange: ({ target }: any) => setInput(target.value),
  };

  return [input, reset, bind];
};

export default useInput;
