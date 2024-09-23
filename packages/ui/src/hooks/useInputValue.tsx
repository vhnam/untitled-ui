import { ChangeEvent, useMemo, useState } from "react";

import { EMPTY_STRING } from "../constants/string";

import { get } from "../utils/common";

const useInputValue = (value?: string) => {
  const [committedValue, setCommittedValue] = useState(EMPTY_STRING);

  useMemo(() => setCommittedValue(value || EMPTY_STRING), [value]);

  const hasValue = useMemo(() => {
    return !!(committedValue && committedValue.length);
  }, [committedValue]);

  function onValueChange<T>(event: ChangeEvent<T>) {
    const newValue = get(event, "target.value");
    setCommittedValue(newValue || EMPTY_STRING);
  }

  return {
    committedValue,
    hasValue,
    onValueChange,
  };
};

export default useInputValue;
