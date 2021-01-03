import React, { useState } from 'react';

const types = {
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Preencha um email válido',
  },
};

const useForm = (type) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(null);

  function validate(value) { // Recebo o valor que está sendo validado
    if (type === false) return true; // Verifica se o tipo foi definido (se eu passar o typo 'false' ele não vai validar o meu campo)
    if (value.length === 0) { // Verifica se tem algum valor no value (Se não tiver nada e ele enviar quer dizer que não passou nenhum valor, então eu preencho o erro)
      setError('Preencha um valor');
      return false;
    } else if (types[type] && !types[type].regex.test(value)) { // Vou validar se existe o type que foi passado no meu objeto types 
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({ target }) {
    if (error) validate(target.value);
    setValue(target.value);
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value), // Vou exportar minha função com um metodoto que já vai ativar o validate mesmo que vai verificar o valor passado no input
    onBlur: () => validate(value),
  };
}

export default useForm;