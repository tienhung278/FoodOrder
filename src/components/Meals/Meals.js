import MealSummary from "./MealSummary";
import AvailableMeal from "./AvailableMeal";
import {Fragment} from "react";

const Meals = () => {
    return (
        <Fragment>
            <MealSummary/>
            <AvailableMeal/>
        </Fragment>
    );
};

export default Meals;