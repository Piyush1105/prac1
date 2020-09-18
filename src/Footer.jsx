import React from "react";
import "./Footer.css";



export default class Footer extends React.Component {
    render() {
        return(
        <>
        
<footer className ="page-footer font-small unique-color-dark pt-4" /*footer*/>


<div className ="container"  /*Footer Elements */>

  
  <ul className ="list-unstyled list-inline text-center py-2"   /*Call to action */>
    <li className ="list-inline-item">
      <h5 className ="mb-1">Register for free</h5>
    </li>
    <li className ="list-inline-item">
      <a href="#!" className ="btn btn-outline-white btn-rounded">Sign up!</a>
    </li>
  </ul>
  

</div>


 
<div className ="footer-copyright text-center py-3"  /*Copyright*/>© 2020 Copyright:
  <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
</div>
 

</footer>
</>
);    
}
}
