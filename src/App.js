
import './App.css';

import WatchPicShoppingCart from "./components/WatchPicShoppingCart";

import pic from "./watchPic.jpg"


function App() {

  const item = [
    {titel: "Watch for women",
    description: "VERY NICE WATC",
    price: "1000 nis",
    gender: "woman", 
    brand: "tissot",
    comments:"very good watch"}
  ];

  return (
      <div>
        <h1>this is my app</h1>
        <WatchPicShoppingCart
        titel={item[0].titel}
        description={item[0].description}
        price={item[0].price}
        gender={item[0].gender}
        brand={item[0].brand}
        comments={item[0].comments}
        ></WatchPicShoppingCart>

        <img src={pic} alt="watch" className="pic" />
      </div>
  );
}

export default App;
