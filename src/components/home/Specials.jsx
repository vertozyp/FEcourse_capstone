import Button from "../common/Button";
import Speciality from "../common/Speciality";

export default function Specials () {
    return (
        <section id="specials">
            <div>
                <h4>This weeks specials!</h4>
                <Button>Online Menu</Button>
            </div>
            <div>
                <Speciality 
                    img="greek salad.jpg" 
                    title="Greek salad" 
                    price="$ 12.99" 
                    description="The famous greek salad of crispy lettuce, 
                    peppers, olives and our Chicago style feta cheese, 
                    garnished with crunchy garlic and rosemary croutons."
                />
                <Speciality 
                    img="bruchetta.jpg" 
                    title="Bruchetta" 
                    price="$ 5.99" 
                    description="Our bruchetta is made from grilled bread 
                    that has been smeared with garlic and seasoned 
                    with salt and olive oil."
                />
                <Speciality 
                    img="lemon dessert.jpg" 
                    title="Lemon dessert" 
                    price="$ 5.00" 
                    description="This comes straight from grandma’s recipe book. 
                    Every last ingredient has been sourced and is an 
                    authentic as can be imagined"
                />
            </div>
        </section>
    )
}