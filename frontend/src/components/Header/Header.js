import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './style.css';
const Header = () => {
  return (
    <>
      <div class="d-flex flex-wrap p-3 main">
        <div class="ml-5" ><a class="text-black-50 text-decoration-none strong ancor" href="/#"> Olx</a></div>
        <div class="ml-5 mr-5 search align-content-center text-center">
          <input type="search -webkit-search-decoration" class="w-150 text-center align-content-center input" placeholder="Find Cars Mobile Phones and More" ></input>
        </div>
        <div class="ml-1 mr-5 mt-1">
        <i class="fa fa-search icon" aria-hidden="true"></i>
        </div>
        <div class="btn ml-5 mr-5 btn:hover login" >Login</div>
        <div class="btn sell border-gradient border-gradient-purple" >+ Sell</div>
      </div>
      
    </>
  )
}

export default Header;