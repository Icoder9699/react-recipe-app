import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import classes from './LikedMeals.module.scss';

const LikedMeals = (props) => {
    function clickHandler(){
        props.history.push('/my-meals');
    }
    return(
        <button
            className={classes.LikedMeals}
            onClick={() => clickHandler()}
        >
            <svg id="color" height="24px" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg"><path d="m11.466 22.776c.141.144.333.224.534.224s.393-.08.534-.224l9.594-9.721c4.001-4.053 1.158-11.055-4.532-11.055-3.417 0-4.985 2.511-5.596 2.98-.614-.471-2.172-2.98-5.596-2.98-5.672 0-8.55 6.984-4.531 11.055z" fill="#f44336"/>
            </svg>
            <span>{props.mealDB ? props.mealDB.length : 0}</span>
        </button>
    )
}

function mapStateToProps(state){
    return{
        mealDB: state.likedMeals.meals
    }
}

export default connect(mapStateToProps)(withRouter(LikedMeals));