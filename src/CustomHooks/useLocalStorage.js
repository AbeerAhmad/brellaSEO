import React from 'react';


const useLocalStorage = (key, defaultValue) => {
  const [state, set] = React.useState(() => {
    let value;
    try {
      value = JSON.parse(window.localStorage.getItem(key) || String(defaultValue));
    } catch(e) {
      value = 0;
    }
    console.log("value", key, value);
    return value;

  });

  React.useEffect(() => {
     window.localStorage.setItem(key, state);
  },
    [state, key]
  );
  return [state, set];

};

export default useLocalStorage;