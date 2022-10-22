import { CardBack } from "./CardBack";
import { CardForm } from "./CardForm";
import { CardFront } from "./CardFront";



export const App = () => {



  return (
    <>
        <div className="container">
            <CardFront />
            <CardBack />
            <CardForm />
        </div>
    </>
  )
}
