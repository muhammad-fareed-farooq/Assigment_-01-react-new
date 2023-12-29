import code from "../assets/img/bg-showcase-2.jpg"

const Fourth_Component = ()=>{
    return(

      <div className="Fourth_Component_main">
        
       <div className="S4_image">
        <img style={{width: "100%",height: "100%"}} src={code} alt="" />
     </div>
         <div className="S4_text">
         <h1>Update For Bootsyrap 5</h1>
         <p><br />
           Newly improved, and full of great utility classes , Bootstrap 5 is leading the  <br /><br /> way in mobile responsive web development! All of the themes on Start
           <br /><br />
           Bootstarp are now using Bootstrap 5!
         </p>
       </div>
       
      </div>
    )
}

export {Fourth_Component}