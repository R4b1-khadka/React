import marker from "../src/assets/marker.png"
// import fuji from "../src/assets/mount-fuji.jpg"
// import "../src/app.css"

function Entry(props){
    return(
        <section className="entry-section">
        <div className="card-container">
            {console.log(props)}
            <img src={props.img.src} alt={props.img.alt} className="fuji-img"/>
            <div className="card-details">
                <div className="card-header">
                     <img src={marker} alt="map marker logo" />
                     <span>{props.country}</span>
                     <a href={props.googleMapslLink} alt="link to mount fuji " target="_blank" >view  on Google Maps</a>
                </div>
                <h2>{props.title}</h2>
                <div className="card-paragraph">
                    <span>{props.dates}</span>
                    <p>{props.text}</p>
                </div>
            </div>
         </div>    
        </section>
    )
}

export default Entry;