
import Button from "react-bootstrap/Button";
import Pagination from "react-bootstrap/Pagination";
import { useState } from "react";
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import { useEffect } from "react";

function Products() {
    const [dbProducts, setDbProducts] = useState([]); // SIIN SEES ON KÕIK ANDMEBAASITOOTED //
    const[categoryProducts, setCategoryProducts] = useState([]); // SIIN SEES ON ÜHE KATEGOORIA LÕIKES TOOTED//
    const [products, setProducts] = useState([]); // SIIN SEES ON ÜHE KATEGOORIA ÜHE LEHEKÜLJE TOOTED //
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const api = new WooCommerceRestApi({
            url: "http://192.168.64.2",
            consumerKey: "ck_e6a002fb6ab67ea7446cf8a628668d72b92d00d6",
            consumerSecret: "cs_c059e1ed42dbd82d28347eb13172a7e2ee91c42b",
            version: "wc/v3",
            axiosConfig: {
                headers: {'Content-Type': 'application/json'},
              }
          });
          api.get("products", {
            per_page: 100, // 20 products per page
          })
            .then((response) => {
              // Successful request
              setDbProducts (response.data);
              setProducts(response.data.slice(0,3));
              setCategoryProducts(response.data);
              setCategories([...new Set(response.data.map(element => element.categories[0].name))])
            })
          }, []);

    const [activePage, setActivePage] = useState(1);
    const pages = [];
for (let index = 0; index < categoryProducts.length/3; index++) {
    pages.push(index + 1);
}
    const sortAZ = () => {
        categoryProducts.sort((a,b) => a.name.localeCompare(b.name));
        setProducts(categoryProducts.slice(0,3));
        setActivePage(1);
    }
    const sortZA = () => {
        categoryProducts.sort((a,b) => b.name.localeCompare(a.name));
        setProducts(categoryProducts.slice(0,3));
        setActivePage(1);
    }
    const sortPriceAsc = () => {
        categoryProducts.sort((a,b) => a.price - b.price);
        setProducts(categoryProducts.slice(0,3));
        setActivePage(1);
    }
    const sortPriceDesc = () => {
        products.sort((a,b) => b.price - a.price);
        setProducts(products.slice(0,3));
        setActivePage(1);
    }
    const sortIdAsc = () => {
        categoryProducts.sort((a,b) => a.id - b.id);
        setProducts(categoryProducts.slice(0,3));
        setActivePage(1);
    }
    const sortIdDesc = () => {
        categoryProducts.sort((a,b) => b.id - a.id);
        setProducts(categoryProducts.slice(0,3));
        setActivePage(1);
    }
    const showByCategory = (categoryClicked) => {
        const result = dbProducts.filter(element => element.categories[0].name === categoryClicked);
        setCategoryProducts(result);
        setProducts(result.slice(0,3));
        setActivePage(1);
    }
const changeActivePage = (pageClicked) => {
    setActivePage(pageClicked);
    setProducts(categoryProducts.slice(pageClicked*3-3,pageClicked*3));
}

const addToCart = (productClicked) => {
    let cartLS = localStorage.getItem("cart");
    cartLS = JSON.parse(cartLS) || [];
    const index = cartLS.findIndex(element => element.product.id === productClicked.id);
    if (index === -1) {
    cartLS.push({product: productClicked, quantity: 1});
    } else {
cartLS[index].quantity = cartLS[index].quantity + 1;
    }
    cartLS = JSON.stringify(cartLS);
    localStorage.setItem("cart", cartLS);
}
   // localStorage.clear(); // method function tühjendada kogu localStorage
    // let productsLS = localStorage.getItem("products"); // võtta võtme alusel väärtus
    // let languageKey = localStorage.key(3); // mitmendat järjekorras ma kasutusele võtta tahan
    // console.log(localStorage.length); // property key---> value mitu tk
    // localStorage.removeItem(); // saan eemaldada seda võti-väärtus paari
    // localStorage.setItem("võti", "väärtus"); // saan võtme alusel lisada väärtust

    // const midagi = JSON.parse("sõna") // võta jutumärgid maha
    // const string = JSON.stringify(cartLS) // pane jutumärgid peale

    // console.log("dasdasd");


    return ( 
    <div>
        <Pagination>
            {pages.map(number =>
          <Pagination.Item key={number} onClick={() => changeActivePage(number)} active={number === activePage}>
      {number}
    </Pagination.Item>)}
</Pagination>
        {categories.map(element =>
            <button key={element} onClick={() => showByCategory(element)}>
                {element}
                </button>)}

<div>Tooteid on {categoryProducts.length} tk</div>
<button onClick={sortAZ}>Sorteeri A-Z</button>
<button onClick={sortZA}>Sorteeri Z-A</button>
<button onClick={sortPriceAsc}>Sorteeri hind kasvavalt</button>
<button onClick={sortPriceDesc}>Sorteeri hind kahanevalt</button>
<button onClick={sortIdAsc}>Sorteeri vanemad enne</button>
<button onClick={sortIdDesc}>Sorteeri uuemad enne</button>

        {products.map(element =>
        <div className="product" key={element.id}>
            { element.images[0] !== null && <img src={element.images[0].src} alt="" />}
            <div>{element.name}</div>
            <div>{element.price}</div>
            <Button onClick={() => addToCart(element)} variant="success">Lisa ostukorvi</Button>
            </div>
            )}
    </div> );
}

export default Products;