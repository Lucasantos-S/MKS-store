import * as Dialog from "@radix-ui/react-dialog";
import "./App.css";
import Cart from "./components/car/Cart";
import Header from "./components/Header/Header";
import CreateProdutcs from "./components/Produtcs/CreateProdutcs";
import { useGetAllProductsQuery } from "./Store/productsApi";
import { Section } from "./styles";

interface Product {
  id: number;
  name: string;
  description: string;
  photo: string;
  price: string;
}

function App() {
  const { data, error, isLoading } = useGetAllProductsQuery();

  return (
    <div>
      <Dialog.Root>
        <Header />
        <Cart />
      </Dialog.Root>
      <Section>
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p> ocorreu um erro na pagina</p>
        ) : (
          <>
            {data.products.map(
              ({ id, name, price, description, photo }: Product) => {
                return (
                  <CreateProdutcs
                    key={id}
                    id={id}
                    name={name}
                    price={price}
                    description={description}
                    photo={photo}
                  />
                );
              }
            )}
          </>
        )}
      </Section>
    </div>
  );
}

export default App;
