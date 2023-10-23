import React, {useCallback, useEffect, useState}  from 'react';
import NavbarWithDropdown from "../ui/navbar";
import StockCard from "../ui/CardInfo";

// import ProductRow from '../ui/ProductRow';
import HoverTable from '../ui/HoverTable';
import OutlineButtonGroup from '../ui/OutlineButtonGroup'
import Search from '../ui/Search';
import DropdownButton from '../ui/ButtonDropdown';
import ListTabsIcon from '../ui/ListTabsIcon';



const ProductHomePage = () => {

    const [products,setProduct] = useState([])
    const fetchProduct = useCallback(async() => {
        const response = await fetch(`http://localhost:3000/api/products/products_and_services`)
        const products = await response.json()
        // console.log("fetch product",products)
        setProduct(products.data)
      })

      const [stock,setStock] = useState(0)
      const countStock = useCallback(() => {
        for (let i=0;i< products.length;i++) {
            setStock(prevStock => prevStock + products[i].available)
            // console.log("products[i].available", products[i].available)
            // console.log("stock", stock)
        }
      })

      const profileData = {name: 'rehan athallah azhar', email: 'rehanathallahazhar@gmail.com'}

      const outlineButtonData = [
        {name: 'import', type: 'file'},
        {name: 'eksport', type: 'file'},
      ]
    

    useEffect(() => {
        fetchProduct()
        
        // countStock()
    },[fetchProduct]);

    // console.log("products",products)

    return(
        <>
            <NavbarWithDropdown profile = {profileData}/>
            
            <section className="mb-4 flex space-x-4 justify-center my-8">
                <StockCard cardTitle='Stok Tersedia' values={stock} denomination={'pcs'}/>
                <StockCard cardTitle='Stok Terjual'values={stock} denomination={'pcs'}/>
                <StockCard cardTitle='Gudang'values={stock} denomination={'unit'}/>
            </section>
            
            <section>
                <ListTabsIcon />
            </section>

            <section className='flex justify-between space-x-4 mx-8 my-12'>
                <div>
                    <DropdownButton label = "Atur Kategori Produk"/>
                </div>
                <div className='flex space-x-4'>
                    <OutlineButtonGroup datas={outlineButtonData }/>
                    <Search/>
                </div>
            </section>
            <section className='mx-8 my-4'>
                <HoverTable data = {products}/>
            </section>


        </>
    )
};

export default ProductHomePage;