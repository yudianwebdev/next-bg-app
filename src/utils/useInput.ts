import { useState } from "react";

const useInput = (initial = {}) => {
  const [input, setInput] = useState(initial);
  const handleInput =
    (name: string, direct = false) =>
    (val: any) =>
      setInput((prev) => ({
        ...prev,
        [name]: direct ? val : val.target.value,
      }));
  return [input, handleInput] as [
    any,
    (name: string, direct?: boolean) => (val: any) => void
  ];
};

export default useInput;
