import React, { useEffect, useState } from "react";

const useDebounce = (debounceVal, timeDelay) => {
  const [debounceSearchVal, setDebounceSearchVal] = useState(debounceVal);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceSearchVal(debounceVal);
    }, timeDelay);

    return () => clearTimeout(timer);
  }, [debounceVal, timeDelay]);

  return debounceSearchVal;
};

export default useDebounce;
