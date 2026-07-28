import { useEffect, useState } from "react";
import axios from "axios";

const FetchProducts = () => {
  const [products, setProducts] = useState([]);
  console.log(products);

  useEffect(() => {
    async function getProducts() {
      try {
        let resp = await axios.get("https://dummyjson.com/products");
        setProducts(resp.data.products);
      } catch (error) {
        console.log(error);
      }
    }

    getProducts();
  }, []);

  return (
    <div>
      <h1>FetchProducts</h1>

      {products.length === 0 ? <p>No products</p> : products.map((prod)=>{
         let {id , title, thumbnail , price , category , availabilityStatus} = prod
        return (
            <div key={id}>
                <img src={thumbnail} alt={title} height={200} width={200}/>
                <h3>{title}</h3>
                <p> <mark>{availabilityStatus}</mark>  {category}</p>
                <h4>Rs. {Math.round(price)}</h4>
                <button>Add to cart</button>
            </div>
        )
      })}
    </div>
  );
};

export default FetchProducts;
