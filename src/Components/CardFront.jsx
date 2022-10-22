import { useForm } from "../Hooks/useForm"


export const CardFront = () => {

	const {onInputChange, ...formState } = useForm();

	const { cardNumber } = formState;
	console.log();
    
  return (
    <>
        <img
			src="src/images/bg-card-front.png" 
			alt="CardFront"
			className="cardFront" />
		<input 
			type="text"
			name="cardNumber"
			value={cardNumber}
			onChange={onInputChange} />
    </>
  )
}
