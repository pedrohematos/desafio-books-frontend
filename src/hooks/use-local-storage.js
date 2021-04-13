import { useEffect, useCallback, useState } from "react";

export const useLocalStorage = (key, defaultValue) => {
  const storageValue = localStorage.getItem(key);
  const initialValue = storageValue ? JSON.parse(storageValue) : null;
  console.log("Chave: " + key + " / Meu storageValue: " + storageValue);
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    if (defaultValue) {
      localStorage.setItem(key, JSON.stringify(defaultValue));
      setValue(defaultValue);
    }
  }, []);

  const updatingValue = useCallback((newValue) => {
    localStorage.setItem(key, JSON.stringify(newValue));
    return setValue(newValue);
  });

  const removingValue = useCallback(() => {
    localStorage.removeItem(key);
    return setValue(null);
  });

  return [
    value,
    (valueToUp) => {
      return updatingValue(valueToUp);
    },
    () => removingValue(),
  ];
};

// useLocalStorage gets two values: key and defaultValue and
// it returns an array with three elements:
// storageValue, setStorageValue and removeStorageValue
