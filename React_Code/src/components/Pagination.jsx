import React, { useEffect, useState } from 'react'
import "./Pagination.css"



function Products ({image,title}){
  return <div className='product-card'>
    <img src={image} alt={title} className='product-image' />
    <span className='product-title'>{title}</span>
  </div>

}
function GeneratePaging({ PAGE_NUMBER, setCurrentPage ,currentPage}) {
  const handlePrevPage = ()=>{
    setCurrentPage((prev)=>prev-1);
  }

  const handleNextPage = ()=>{
    setCurrentPage((prev)=>prev+1);
  }
  return (
    <div className="paging-container">
      <button 
     disabled={currentPage === 0  } onClick={()=>{handlePrevPage()}}>◀️</button>
      {[...Array(PAGE_NUMBER).keys()].map((n) => (
        
        <button
          key={n}
          className={`paging-button ${currentPage === n ? "active" : ""}`}

          onClick={() => setCurrentPage(n)}
        >
          
          {n}
         
        </button>
      ))}
       <button disabled={currentPage === PAGE_NUMBER-1} onClick={()=>{handleNextPage()}}>▶️</button>
    </div>
  );
}

export default function Pagination() {
  const [products, setProducts] = useState([]);
  const [currentPage,setCurrentPage] = useState(0);

  const TotalNoOfPage = products.length;
  const PAGE_NUMBER = 10;
  const NumberOfPages = Math.ceil(TotalNoOfPage/PAGE_NUMBER);
  const start = currentPage * PAGE_NUMBER;
  const end = start + PAGE_NUMBER;

  const fetchData = async()=>{
    const data = await fetch("https://dummyjson.com/products?limit=200");
    const json = await data.json();
    setProducts(json.products);

  }
  
  useEffect(()=>{
    fetchData();
  },[]);

  return (
    <>
    <div className='product-container'>
      {products.slice(start, end).map((product)=>{
        return <div >
          <Products key={product.id} 
          image ={product.thumbnail}
          title = {product.title}
           />
        </div>
      })}
    </div>
    <div> <GeneratePaging PAGE_NUMBER={NumberOfPages} setCurrentPage={setCurrentPage}
    currentPage={currentPage}
     /></div>
</>
  )
}
