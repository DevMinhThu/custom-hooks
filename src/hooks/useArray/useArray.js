import { useState } from "react";

const useArray = (defaultValue) => {
  const [array, setArray] = useState(defaultValue);

  const push = (element) => {
    setArray((a) => [...a, element]);
  };

  const filter = (callback) => {
    setArray(array.filter(callback));
  };

  const update = (index, newElement) => {
    setArray((array) => [
      ...array.slice(0, index),
      newElement,
      ...array.slice(index + 1, array.length),
    ]);
  };

  const remove = (index) => {
    setArray(array.filter((_, i) => i !== index));
    // setArray((a) => [...a.slice(0, index), ...a.slice(index + 1, a.length)]);
  };

  const clear = () => {
    setArray([]);
  };

  return { array, set: setArray, push, filter, update, remove, clear };
};

export default useArray;
