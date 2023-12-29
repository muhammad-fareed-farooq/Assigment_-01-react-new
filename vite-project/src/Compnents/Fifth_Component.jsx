import pc from "../assets/img/bg-showcase-3.jpg"
const Fifth_Component = ()=>{
    return(

      <div className="Fifth_Component_main">
         <div className="S5_text">
         <h1>Easy to & Costomize </h1>
         <p><br />
            landing Page is just HTML and CSS with a splash of SCSS for user who <br /><br /> demand some deeper customization option. Out of the box. just add <br /><br /> your  contant and iamages, and
            your new landing page will be <br /><br /> readyto go!
         </p>
       </div>
       
       <div className="S5_image">
        <img style={{width: "100%",height: "100%"}} src={pc} alt="" />
     </div>
      </div>
    )
}

export {Fifth_Component}