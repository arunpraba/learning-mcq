import { useState, useEffect } from "react";

export const useLocalStorageState = (key, defaultValue) => {
    const [state, setState] = useState(() => {
        const valueInLocalStorage = window.localStorage.getItem(key);
        if (valueInLocalStorage) {
            let parsedValue;
            try {
                parsedValue = JSON.parse(valueInLocalStorage);
            } catch (error) {
                parsedValue = valueInLocalStorage;
            }

            return parsedValue;
        }
        return typeof defaultValue === "function"
            ? defaultValue()
            : defaultValue;
    });

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state));
    }, [state, key]);

    return [state, setState];
};
