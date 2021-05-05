import './LikedButton.scss';

const LikedButton = props => {
    return(
        <button className='LikedButton' onClick={props.onClick}>Like</button>
    )
}

export default LikedButton;