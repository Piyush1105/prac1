import React from "react";

export default class Footer extends React.Component {
    render() {
        return(
        <>
        
<footer class="page-footer font-small unique-color-dark pt-4" /*footer*/>


<div class="container"  /*Footer Elements */>

  
  <ul class="list-unstyled list-inline text-center py-2"   /*Call to action */>
    <li class="list-inline-item">
      <h5 class="mb-1">Register for free</h5>
    </li>
    <li class="list-inline-item">
      <a href="#!" class="btn btn-outline-white btn-rounded">Sign up!</a>
    </li>
  </ul>
  

</div>


 
<div class="footer-copyright text-center py-3"  /*Copyright*/>© 2020 Copyright:
  <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
</div>
 

</footer>
</>
);    
}
}
