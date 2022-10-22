import { useState } from "react";

export const useForm = (initialValue = {}) => {

    const [formState, setformState] = useState(initialValue);

    const onInputChange = ({ target }) => {
		const { name, value } = target;
		setformState({
			...formState,
			[ name ]: value 
		})
	};

	const onSubmit = (e) => {
		e.preventDefault();
		setformState({});
	}

  return {
    ...formState,
    formState,
    onInputChange,
    onSubmit,
  }
}
