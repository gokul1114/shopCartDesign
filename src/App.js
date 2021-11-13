import "./App.css";
import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";
import Button from "@mui/material/Button";
import { Navcomp } from "./Navcomp";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

let list = [
  {
    cardImage: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    productName: "Fancy Product",
    price: "$40-$80",
    isRating: true,
    rating: "⭐⭐⭐⭐⭐",
    isSale: true,
    buttonText: "Add to Cart",
  },
  {
    cardImage: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    productName: "Product A",
    price: "$20",
    isRating: true,
    rating: "⭐⭐⭐⭐⭐",
    isSale: true,
    buttonText: "View",
  },
  {
    cardImage: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    productName: "Special Product",
    price: "$40",
    isRating: true,
    rating: "⭐⭐⭐",
    isSale: true,
    buttonText: "Add to Cart",
  },
  {
    cardImage: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    productName: "Popular Product",
    price: "$40-$80",
    isRating: true,
    rating: "⭐⭐⭐⭐⭐",
    isSale: true,
    buttonText: "Add to Cart",
  },
  {
    cardImage: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    productName: "Sample Product",
    price: "$10",
    isRating: true,
    rating: "⭐⭐⭐⭐⭐",
    isSale: true,
    buttonText: "View",
  },
  {
    cardImage: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    productName: "Fancy Product",
    price: "$40-$80",
    isRating: true,
    rating: "⭐⭐⭐⭐⭐",
    isSale: true,
    buttonText: "Add to Cart",
  },
  {
    cardImage: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    productName: "Fancy Product",
    price: "$40-$80",
    isRating: true,
    rating: "⭐⭐⭐⭐⭐",
    isSale: true,
    buttonText: "Add to Cart",
  },
  {
    cardImage: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    productName: "Fancy Product",
    price: "$40-$80",
    isRating: true,
    rating: "⭐⭐⭐⭐⭐",
    isSale: true,
    buttonText: "Add to Cart",
  }
];
function App() {
  return (
    <div>
      <Navcomp />
      <Div />
      <div className="container">
      {list.map((e) => (
        <ProductDisplay input={e} />
      ))}
      </div>
    </div>
  );
}

function Div() {
  return (
    <div className="blackCard">
      <h1>Shop in Style</h1>
      <h6>With this shop hompeage template</h6>
    </div>
  );
}

function ProductDisplay({ input }) {
  return (
   
      <div className="card">
        <img className="card-img-top" src={input.cardImage} alt="Img" />
        <div className="card-body">
          <h5 className="card-title">{input.productName}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{input.price}</h6>
          <h6 className="card-subtitle mb-2 text-muted">{input.rating}</h6>
          <div className="buttonAlign">
            <button type="button" className="btn btn-outline-dark">
              {input.buttonText}
            </button>
          </div>
        </div>
      </div>
    
  );
}

function Display({ input }) {
  console.log(input);
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">
          {input[0]}
          <br />
          {input[1]}/Month
        </h5>
        <hr />
        {input.slice(2, input.length).map((e) => {
          return e.includes("false") ? (
            <p className="card-text">
              <CloseIcon />
              {e.slice(6)}
            </p>
          ) : (
            <p className="card-text">
              <DoneIcon />
              {e}
            </p>
          );
        })}
        <div className="d-grid">
          <a href="#" className="btn btn-primary text-uppercase">
            Button
          </a>
        </div>
      </div>
    </div>
  );
}
export default App;
