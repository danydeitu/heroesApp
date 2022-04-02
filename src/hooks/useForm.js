import {useState} from 'react';

export const useForm = (initialState = {}) => {
  
  const [inputValue, setInputValue] = useState(initialState);

  const handleInputChange = ({target}) => {

    setInputValue({
        ...inputValue,
        [target.name] : target.value
    })

  }

  const reset = () => {

      setInputValue(initialState)
  }
  

  
  
    return [inputValue, handleInputChange, reset];
};
