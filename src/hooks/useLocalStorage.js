import { useState } from 'react';

export const useLocalStorage = (key, initialValue) =>{
    const [storedValue, setValue] = useState(()=>{
        //setear un estado inicial con localstorage
        try {
            const item = localStorage.getItem(key);
            return item !== null ? JSON.parse(item) : initialValue;
        } catch (error) {
            return initialValue;
        }
    });

    const setLocalStorage = value =>{
        try {
            localStorage.setItem(key, JSON.stringify(value));
            setValue(value);
        } catch (error) {
            console.log(error);
        }
    }

    return [storedValue, setLocalStorage];
}