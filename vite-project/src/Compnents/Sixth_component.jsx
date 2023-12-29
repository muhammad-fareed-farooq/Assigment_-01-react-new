import circle1 from "../assets/img/testimonials-1.jpg"
import circle2 from "../assets/img/testimonials-2.jpg"
import circle3 from "../assets/img/testimonials-3.jpg"





const Sixth_Component = () => {
    return (
        <div className="Sixth_Componet_main">
            <div>
                <img className="cicl1" src={circle1} alt="" />
                <br /><br />
                <h2>
                    Margaret E. <br /><br />
                </h2>
                <p>"This is fantastic! Thanks so much guys!"  <br /><br />

                </p>
            </div>
            <div>
              <img className="cicl2" src={circle2} alt="" />
                <h2>
                    Fred S.  <br /><br />
                </h2>
                <p> "Bootstrap is amazing. l've been using it <br /><br /> to create lots of super nice landing <br /><br />pages"
                    
                </p>
            </div>

            <div>
                <img className="cicl3" src={circle3} alt="" />
                <h2>
                   Sarah W.<br /><br />
                </h2>
                <p>"Thanks so much for making these free <br /><br />
                   resources available to us!"
                </p>
            </div>
        </div>
    )
}
export { Sixth_Component }
