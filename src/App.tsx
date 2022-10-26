import * as Dialog from "@radix-ui/react-dialog";
import axios from "axios";
import React from "react";
import "./App.css";
import Car from "./components/car/Car";
import Header from "./components/Header/Header";
import CreateProdutcs from "./components/Produtcs/CreateProdutcs";
import { Section } from "./styles";

interface Product {
  id: number;
  name: string;
  description: string;
  photo: string;
  price: string;
}

function App() {
  const [products, setProducts] = React.useState<Product[]>([]);
  
  React.useEffect(() => {
    async function fetchApi() {
      const api = await axios(
        "https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC"
      );
      setProducts(api.data.products);
    }
    fetchApi();
  }, []);

  function handleClick(event:any) {
    console.log(event.target.id)
    
  }

  return (
    <div>
      <Dialog.Root>
        <Header />
        <Car />
      </Dialog.Root>
      <Section>
        {products.map(({ id, name, price, description, photo }) => {
          return (
            <CreateProdutcs key={id} id={id} name={name} price={price} description={description} photo={photo} />
          );
        })}
      </Section>
    </div>
  );
}

export default App;
