import mobile from "../assets/img/bg-showcase-1.jpg"
const Third_Component = ()=>{
    return(

      <div className="Third_Component_main">
         <div className="S3_text">
         <h1>Fully Responsive Design</h1>
         <p><br />
            When you use a them created by start Bootstrap, you know that the theme <br /><br /> will look
            great on any device, whether it's a phone, or desktop the page<br /><br /> will behave 
            responsively!
         </p>
       </div>
       
       <div className="S3_image">
        <img style={{width: "100%",height: "100%"}} src={mobile} alt="" />
     </div>
      </div>
    )
}
export {Third_Component}