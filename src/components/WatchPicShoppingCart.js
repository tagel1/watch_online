import Comments from './Comments.js';
import WatchDetails from './WatchDetails.js';
import './WatchPicShoppingCart';
import './WatchPicShoppingCart.css';

function WatchPicShoppingCart(props){
    return <div>
        <button className="button , linkToSohoppingCart">סל קניות</button>
        <WatchDetails
        titel={props.titel}
        description={props.description}
        price={props.price}
        brand={props.brand}
        ></WatchDetails>
        <Comments comments={props.comments}
    ></Comments>
    </div>
}

export default WatchPicShoppingCart;