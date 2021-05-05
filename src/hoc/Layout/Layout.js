import classes from './Layout.module.scss'
import React from 'react'
import Nav from '../../components/Nav/Nav'
import LikedMeals from '../../components/LikedMeals/LikedMeals'

export default function Layout(props) {
    return (
        <div className={classes.Layout}>
            <Nav/>
            <LikedMeals/>
            <main>
                {props.children}
            </main>
        </div>
    )
}
