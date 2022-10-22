//import { useState } from "react"
import { useRef } from "react";
import { useForm } from "../Hooks/useForm";


export const CardForm = () => {

	const { formState, onInputChange, onSubmit, cardholder, cardNumber, mm, yy, cvc } = useForm({
		cardholder: '',
		cardNumber: '',
		mm: '',
		yy: '',
		cvc: '',
	});

	//const { cardholder, cardNumber, mm, yy, cvc } = formState;

	

	/* const onInputChange = ({ target }) => {
		const { name, value } = target;
		setFormState({
			...formState,
			[ name ]: value 
		})
	};

	const onSubmit = (e) => {
		e.preventDefault();
		setFormState({});
	} */
    
  return (
    <>
		<form onSubmit={onSubmit}>
			<label htmlFor="CARDHOLDER NAME">CARDHOLDER NAME</label>
			<input 
				type="text"
				placeholder="e.g Jane Appleseed"
				name="cardholder"
				value={cardholder}
				onChange={onInputChange} />

			<label htmlFor="CARD NUMBER">CARD NUMBER</label>
			<input 
				type="text"
				placeholder="e.g 1234 5678 9123 0000"
				name="cardNumber"
				maxLength={16}
				value={cardNumber}
				onChange={onInputChange} />

			<div className="container-date-cvc">
				<label htmlFor="EXPDATE">EXP DATE (MM/YY)</label>
				<label htmlFor="CVC">CVC</label>
				<div className="expDate">
					
					<input 
						type="text"
						placeholder="MM"
						name="mm"
						maxLength={2}
						value={mm}
						onChange={onInputChange} />

					<input 
						type="text"
						placeholder="YY"
						name="yy"
						maxLength={2}
						value={yy}
						onChange={onInputChange} />
				</div>
				<div className="cvc">
					
					<input 
						type="text"
						placeholder="e.g 123"
						name="cvc"
						maxLength={4}
						value={cvc}
						onChange={onInputChange} />
				</div>
				
			</div>

			<button
				onClick={onSubmit}
				className='btnConfirm'>Confirm</button>
		</form>
	</>

  );
};
