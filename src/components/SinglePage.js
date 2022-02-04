import "./SinglePage.css";

export default function SinglePage() {
  const {dogsData} = require("../dogs.json");
  const dogID = window.location.pathname.split("/")[2];
  const dogObject = dogsData[dogID];
  return (
    <div className="single-page">
      <div id="single-page-card">
        <div className="single-page-header">
          <div>
            <img
                className="single-page-dog-img"
                src={dogObject.imageUrl}
                alt="Brown and white dog with tounge sticking out"
              ></img>
            <h2 className="single-page-dog-name">{dogObject.name}</h2>
          </div>
          <div className="single-page-information">
            <p>
              Sex: {dogObject.sex}
              <br/>
              Age: {dogObject.age}
              <br/>
              Breed: {dogObject.breed}
              <br/>
              Location: {dogObject.location}
            </p>
          </div>
        </div>
        <div className="single-page-about-dog">
          <p>
            {dogObject.description}
          </p>
        </div>
        <div className="single-page-button-div">
          <a href={`/`} style={{"margin-right":"10px"}}>
            <button className="single-page-button">Back To All Dogs</button>
          </a> 
          <a href={`/dog/${dogID}/form`}>
            <button className="single-page-button">Interested</button>
          </a>
        </div>
      </div>
    </div>
  );
}
