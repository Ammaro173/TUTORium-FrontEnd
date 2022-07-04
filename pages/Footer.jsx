 
 
 import React from 'react'
import Link from 'next/link'
 
 const Footer = () => {
   return (
     <div>
      <link
        href="assets/vendor/boxicons/css/boxicons.min.css"
        rel="stylesheet"
      />
      
        <footer id="footer">
       
       <div className="container d-md-flex py-4">
         <div className="me-md-auto text-center text-md-start">
           <div className="copyright">
             © Copyright  
             <strong>
               <span> TUTORium</span>
             </strong>
             . All Rights Reserved
           </div>
         </div>
         <div className="social-links text-center text-md-right pt-3 pt-md-0">
           
           <Link href="#"><a href="#" className="facebook">
             <i className="bx bxl-facebook" />
           </a></Link>
           <Link><a href="#" className="instagram">
             <i className="bx bxl-instagram" />
           </a></Link>
           <Link><a href="#" className="linkedin">
             <i className="bx bxl-linkedin" />
           </a></Link>
         </div>
       </div>
     </footer>
     </div>
   )
 }
 
 export default Footer

