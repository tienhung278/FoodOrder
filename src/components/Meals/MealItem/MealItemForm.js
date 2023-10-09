import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import {useRef, useState} from "react";

const MealItemForm = (props) => {
    const amountInputRef = useRef();
    const [amountIsValid, setAmountIsValid] = useState(true);

    const onSubmitHandler = (event) => {
        event.preventDefault();
        let amountItem = +amountInputRef.current.value;

        if (amountItem < 0 || amountItem > 5) {
            setAmountIsValid(false);
        }

        props.onAddCart(amountItem);
    }

    return (<form className={classes.form} onSubmit={onSubmitHandler}>
        <Input label="Amount" input={{
            id: props.id, type: "number", min: 1, max: 5, step: 1, defaultValue: 1
        }} ref={amountInputRef}/>
        <button>+ Add</button>
        {!amountIsValid && <p>Amount should be from 1 to 5</p>}
    </form>);
};

export default MealItemForm;