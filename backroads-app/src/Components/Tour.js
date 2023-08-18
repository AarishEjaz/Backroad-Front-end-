import About from './About'
import Services from './Services';
import Title from './Title';
import { tours } from '../data';

const Tour = () =>{
    return(
      <div>
      <section className="hero" id="home">
       <div className="hero-banner">
         <h1>continue exploring</h1>
         <p>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
           explicabo debitis est autem dicta.
         </p>
         <a href="#tours" className="btn hero-btn">explore tours</a>
       </div>
     </section>
     <About />

     <Services />

     <section className="section" id="tours">
       <Title title = "Featured" subTitle='tours'/>
       <div className="section-center featured-center">
        {tours.map((tour) =>{
          const{id,image,date,title,text,location,duration,cost} = tour
          return(
           <article className="tour-card" key = {id}>
            <div className="tour-img-container">
              <img src={image} className="tour-img" alt={title} />
              <p className="tour-date">{date}</p>
            </div>
            <div className="tour-info">
              <div className="tour-title">
                <h4>{title}</h4>
              </div>
              <p>
                {text}
              </p>
              <div className="tour-footer">
                <p>
                  <span><i className="fas fa-map"></i></span> {location}
                </p>
                <p>{duration}</p>
                <p>{cost}</p>
              </div>
            </div>
           </article>
          )
        })}
       </div>
 
      </section>
      </div>
    )
}

export default Tour; 
     