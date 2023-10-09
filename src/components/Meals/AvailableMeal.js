import classes from "./AvailableMeal.module.css";
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card";

const DUMMY_MEALS = [{
    id: 'm1', name: 'Sushi', description: 'Finest fish and veggies', price: 9.99,
}, {
    id: 'm2', name: 'Schnitzel', description: 'A german specialty!', price: 5.5,
}, {
    id: 'm3', name: 'Barbecue Burger', description: 'American, raw, meaty', price: 7.99,
}, {
    id: 'm4', name: 'Green Bowl', description: 'Healthy...and green...', price: 19.99,
},];

const AvailableMeal = () => {
    const meals = DUMMY_MEALS.map(m => <MealItem key={m.id} id={m.id} name={m.name} description={m.description}
                                                 price={m.price}/>)

    return (<section className={classes.meals}>
        <Card>
            <ul>{meals}</ul>
        </Card>
    </section>);
};

export default AvailableMeal;