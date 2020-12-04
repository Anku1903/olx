import React from 'react';
import png1 from '../img/ankur.jpeg';
import png2 from '../img/ankit.jpeg';
import png3 from '../img/dhainik.jpeg';
import ReactDOM from 'react-dom';
import '../style/style1.css';
const About = () => {
    return (
        <div class="main">       
         <div class="card" >

        <img src={png1} alt="Card image cap" />

        <div class="card-body new">
            <p class="card-text color"><b>Ankur A Zalavadiya</b></p>
            <a href="https://www.facebook.com/ankur.zalavadiya.3"><i class="fa fa-facebook-square icon color" aria-hidden="true"></i> </a>
            <a href="https://instagram.com/mr__perfect__1903?igshid=10ocwyv85t6ju"><i class="fa fa-instagram icon color ml-3 mr-3" aria-hidden="true"></i> </a>
            <a href="https://twitter.com/AnkurZalavadiy3?s=08"><i class="fa fa-twitter icon color" aria-hidden="true"></i> </a>
        </div> 
        </div>
        <div class="card usd" >
       
        <img src={png2} alt="Card image cap" />
        <div class="card-body new">
            <p class="card-text color strong"><b>Ankit J Chotaliya</b></p>
             <a href="https://www.facebook.com/ankit.chotaliya.3"><i class="fa fa-facebook-square icon color" aria-hidden="true"></i></a>
             <a href="https://instagram.com/mr__perfect__3110?igshid=10ocwyv85t6ju"><i class="fa fa-instagram icon color ml-3 mr-3" aria-hidden="true"></i></a>
             <a href="https://twitter.com/Ankitchotaliya?s=08"><i class="fa fa-twitter icon color" aria-hidden="true"></i></a>
        </div> 
        </div>
        <div class="card" >
        
        <img src={png3} alt="Card image cap" />
       
        <div class="card-body new">
            <p class="card-text color"><b>Dhainik A Suthar</b></p>
             <a href="https://www.facebook.com/dhainik.suthar"><i class="fa fa-facebook-square icon color" aria-hidden="true"></i> </a>
             <a href="https://instagram.com/dhainik_suthar?igshid=10ocwyv85t6ju"><i class="fa fa-instagram icon color ml-3 mr-3" aria-hidden="true"></i></a>
             <a href=" https://twitter.com/DhainikS?s=08"><i class="fa fa-twitter icon color" aria-hidden="true"></i></a>
        </div> 
        </div>
        </div>
           );
}
export default About;
