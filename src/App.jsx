import Header from './components/Header';
import { ProductList } from './components/ProductList';
import { Footer } from './components/Footer';
import { useState,useEffect } from 'react';
import './index.css'


function App() {
  const [searchTerm,setSearchTerm] = useState('');
  const [sortOption,setSortOption] = useState('price');
  const [products,setProducts] = useState([]);
  const [displayedProducts,setDisplayedProducts] = useState([]);
  const [productsPerPage,setProductsPerPage]= useState(10);
  const [currentPage,setCurrentPage] = useState(1)


  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then((response)=> response.json())
    .then((data)=>{
      setProducts(data);
      setDisplayedProducts(data.slice(0,productsPerPage))
    })
    .catch((error)=> console.error("Error Occured: ",error))

  },[productsPerPage])


  useEffect(()=>{
    filterAndSortProducts();
  },[searchTerm,sortOption,currentPage]);

  const filterAndSortProducts = () =>{
    let filteredProducts = products.filter((product)=>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()));


    if(sortOption === 'price'){
      filteredProducts.sort((a,b)=> a.price - b.price);

    }else if(sortOption === 'rating'){
      filteredProducts.sort((a,b)=> b.rating.rate - a. rating.rate);

    }else if(sortOption ==='name'){
      filteredProducts.sort((a,b)=> a.title.localeCompare(b.title));
    }

    setDisplayedProducts(filteredProducts.slice(0,currentPage * productsPerPage))
  }

  const loadMoreProducts = () =>{
    setCurrentPage((prevPage)=> prevPage + 1)
  }


  

  return (
    <>
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        sortOption={sortOption}
        setSortOption={setSortOption}
      />
      <ProductList products={ displayedProducts}/>
      <Footer loadMoreProducts={loadMoreProducts} />
      
    </>
  )
}

export default App
