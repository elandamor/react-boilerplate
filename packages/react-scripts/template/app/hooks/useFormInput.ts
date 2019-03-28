import { useState } from 'react';

function useFormInput(initialValue: any) {
  const [value, setValue] = useState(initialValue);

  function handleChange(event: any) {
    setValue(event.currentTarget.value);
  }

  return {
    value,
    onChange: handleChange
  };
}

export default useFormInput;
