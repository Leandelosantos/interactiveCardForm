import { useForm } from "../Hooks/useForm";

export const InputCard = () => {

    const { cardNumber } = useForm({});

  return (
    <p>{cardNumber}</p>
  )
}
