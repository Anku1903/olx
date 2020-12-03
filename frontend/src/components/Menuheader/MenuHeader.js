import React from 'react'
import Header from '../Header/Header'
import './style.css'
const MenuHeader=()=> {
    return (
        <>
            <Header/>
            <div className="menuheader">
            <div className="mainheader">
                <div className="categories">
                    <div className="allcategoriesbox">
                            <span>ALL categories</span>
                    </div>
                    <div className="allcategories">
                             <a href="#" className="allcategories_list"><span >Cars</span> </a>
                             <a href="#" className="allcategories_list"><span >Motorcycles</span></a> 
                             <a href="#" className="allcategories_list"><span >Mobile Phones</span></a> 
                             <a href="#" className="allcategories_list"><span >For Sale:Houses & Apartments</span></a>
                             <a href="#" className="allcategories_list"><span >Scooters</span></a>  
                             <a href="#" className="allcategories_list"><span >Comercial & Other Vehicles</span></a>
                             <a href="#" className="allcategories_list"><span >For Rent:Houses & Apartments</span></a>
                    </div>
                </div>
            
            </div>     
            </div>
        </>
    )
}

export default MenuHeader
