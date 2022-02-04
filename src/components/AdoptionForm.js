import "./AdoptionForm.css";
// comment made for push
function AdoptionForm() {
  const {dogsData} = require("../dogs.json");
  const dogID = window.location.pathname.split("/")[2];
  const dogObject = dogsData[dogID];

  return (
      <div class="FormHeader">
        <div>
          <img alt="cute dog" src={dogObject.imageUrl} class="clip-circle"/> 
          <h2>{dogObject.name}</h2>
        </div>
        <div class="AdoptionBody">
          <form class="myForm">
            <label for="customer_name">Your Name </label>
            <input type="text" name="customer_name" id="customer_name" required/>
            <label for="email_address">Your Email </label>
            <input type="email" name="email_address" id="email_address" required/>
            <label for="comments">Message</label>
            <textarea name="comments" id="comments" maxlength="500" placeholder="Please write a message to the foster for why you want to adopt this dog" required></textarea>
          </form>
        </div>
          <a href={`/dog/${dogID}`} style={{"margin-right":"10px"}}>
            <button className="single-page-button">Back To Details</button>
          </a> 
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target={"_blank"}>
          <button className="single-page-button">Submit Application</button>
        </a>
      </div>
  );
}

export default AdoptionForm;
