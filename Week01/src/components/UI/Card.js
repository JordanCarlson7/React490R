<<<<<<< HEAD
import './Card.css'

function Card(props) {
    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}</div>
}

=======
import './Card.css'

function Card(props) {
    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}</div>
}

>>>>>>> d39391126c56a2f7c6fbf3368883d0a67ea12b00
export default Card;