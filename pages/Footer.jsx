 
import Link from 'next/link' 
 import React from 'react'
 
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
         {/* <div className="social-links text-center text-md-right pt-3 pt-md-0">
           
           <Link href="#" className="facebook">
             <i className="bx bxl-facebook" />
           </Link>
           <Link href="#" className="instagram">
             <i className="bx bxl-instagram" />
           </Link>
           <Link href="#" className="linkedin">
             <i className="bx bxl-linkedin" />
           </Link>
         </div> */}
       </div>
     </footer>
     </div>
   )
 }
 
 export default Footer

