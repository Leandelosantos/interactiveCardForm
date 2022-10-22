import { useState } from "react"

export const UseInput = (valueForm = '') => {

    const [valueCard, setValueCard] = useState('');

    const onInputCardChange = () => {
        setValueCard(valueForm)
    }

    return {
        valueCard,
        onInputCardChange
    }
}
