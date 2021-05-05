import { connect } from "react-redux";
import RecipeItem from "../../components/Search/RecipeList/RecipeItem/RecipeItem";



const MyMeals = ({mealsDB}) =>{

    return(
        <div style={{display: 'flex', marginTop: '20px',maxWidth: 1100, flexWrap: 'wrap'}}>
            {mealsDB ? mealsDB.map(meal => {
                return (
                    <div key={meal.idMeal}>
                        <RecipeItem recipe={meal} />
                    </div>
                )
            }) : null}
        </div>
    )
}

function mapStateToProps(state){
    return{
        mealsDB: state.likedMeals.meals,
    }
}




export default connect(mapStateToProps, null)(MyMeals);
