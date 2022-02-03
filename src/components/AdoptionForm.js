import "./AdoptionForm.css";

function AdoptionForm() {
  return (
      <div class="FormHeader">
        <link href='https://fonts.googleapis.com/css?family=Gothic A1' rel='stylesheet'></link>
        <div>
          <img alt="cute dog" src="https://hips.hearstapps.com/ghk.h-cdn.co/assets/17/30/pembroke-welsh-corgi.jpg" class="clip-circle"/> 
          <h3>Cuty McCuterson</h3>
        </div>
        <div class="AdoptionBody">
          <form class="myForm">
            <label for="customer_name">Your Name </label>
            <input type="text" name="customer_name" id="customer_name" required/>
            <label for="email_address">Your Email </label>
            <input type="email" name="email_address" id="email_address"/>
            <label for="comments">Message</label>
            <textarea name="comments" id="comments" maxlength="500" placeholder="Please write a message to the foster for why you want to adopt this dog"></textarea>
          </form>
        </div>
        <button className="single-page-button">Back To Details</button>
      </div>
  );
}

export default AdoptionForm;
