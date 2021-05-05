import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import { likeMeal } from '../../store/actions/like';
import LikedButton from '../LikedButton/LikedButton';
import './Meal.scss'

function Meal(props) {
    useEffect( () => { // eslint
        getMeal() // eslint-disable-next-line
    }, [])

    const [meal, setMeal] = useState([]);;
    const mealName = props.match.params.name;

    async function getMeal(){
        const get = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)
        const meal = get.data.meals[0]
        setMeal(meal)
    }

    function likeHandler(mealID){
        props.likeMeal(mealID)
    }

    const {strMeal, strInstructions, strMealThumb, strSource, strYoutube} = meal
    return (
        <div className='Meal'>
             <div className='Meal__img'>
                <img src={strMealThumb} alt={strMeal}/>
                <h1>
                    {strMeal}
                </h1>
            </div>
            <div className='Meal__body'>
                <h2>{strMeal}</h2>
                <h3>Instruction</h3>
                <p>
                    {strInstructions}
                </p>
                <h3>Youtube Link is here: <a href={strYoutube}>Click here</a></h3>
                <h5>Information about meal: <a href={strSource}>{strMeal}</a></h5>
            </div>
            <LikedButton onClick={() => likeHandler(meal)}/>
        </div> 
    );
}


function mapDispatchToProps(dispatch){
    return{
        likeMeal: (meal) => dispatch(likeMeal(meal))
    }
}

export default connect(null, mapDispatchToProps)(withRouter(Meal))
