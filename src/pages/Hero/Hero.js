import React, { Component } from 'react'
import axios from 'axios'
import './Hero.scss'
import { autoLogin } from '../../store/actions/auth';
import { connect } from 'react-redux';
import LikedButton from '../../components/LikedButton/LikedButton';
import { likeMeal } from '../../store/actions/like';

class Hero extends Component {
    constructor(props){
        super(props);
        this.state = {
            meal: []
        }
    }
    async componentDidMount(){
        this.props.autoLogin()
        try{
            const mealData = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
            this.setState({
                meal: mealData.data.meals[0]
            })
        }catch(e){
            console.log(e);
        }
    }


    render() {
        const {strMeal, strMealThumb, strYoutube, strInstructions, strSource} = this.state.meal;

        return (
            <div className='hero' >
                <div className='hero__img'>
                    <img 
                        src={strMealThumb} 
                        alt={strMeal}
                    />
                    <h1>
                        Random Recipe
                    </h1>
                </div>
                <div className='hero__body'>
                    <h2>{strMeal}</h2>
                    <h3>Instruction</h3>
                    <p>
                        {strInstructions}
                    </p>
                    <h3>Youtube Link is here: <a href={strYoutube}>Click here</a></h3>
                    <h5>Information about meal: <a href={strSource}>{strMeal}</a></h5>
                </div>
                { this.props.authenticated ? 
                    <LikedButton onClick={() => this.props.likeMeal(this.state.meal)} /> 
                    : null }
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        authenticated: state.auth.token
    }
}

function mapDispatchToProps(dispatch){
    return{
        autoLogin: (token) => dispatch(autoLogin(token)),
        likeMeal: meal => dispatch(likeMeal(meal))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Hero);