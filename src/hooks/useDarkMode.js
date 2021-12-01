import { useState } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = (initialState)=>{
	const [values, setValues] = useLocalStorage('dark-mode', initialState);

	return [values, setValues];
}

export default useDarkMode;