import "./SinglePage.css";

function TestsFunction() {
  var T = document.getElementById("TestsDiv");
  if (T.style.display == 'block') {
    console.log("it's there, let's remove it")

    T.classList.add('animateOut');
    T.classList.add('slideOut');
    T.classList.remove('animateIn');
    T.classList.remove('slideIn');
    T.style.display = "none";

  } else {
    T.style.display = "block";
    T.classList.add('animateIn');
    T.classList.add('slideIn');
    T.classList.remove('slideOut');
    T.classList.remove('animateOut')

  }
}

function flip() {
  var T = document.getElementById('cards');
  if (T.style.transform =='rotateY(180deg)') {
    T.style.transform = 'rotateY(0deg)';
    T.style.webkitTransform = 'rotateY(0deg)';
  } else {
    T.style.transform = 'rotateY(180deg)';
    T.style.webkitTransform = 'rotateY(180deg)';
  }
}

function SinglePage() {
  return (
    <div className="single-page">
        <button onclick="TestsFunction()">Appear</button>
          <label id="TestsDiv">
              <input type="checkbox"  />
              <div id="cards" class="card">
                <div class="front">
                  <h2 className="single-page-dog-name">Dog Name Prop</h2>
                  <div id="single-page-card">
                    <img
                      className="single-page-dog-img"
                      src="https://edit-files-prod.s3.us-west-1.amazonaws.com/2019/FREE-T~1.JPG"
                      alt="Brown and white dog with tounge sticking out"
                    ></img>
                    <div className="single-page-about-dog">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                    </div>
                    <div className="single-page-button-div">
                      <button className="single-page-button" onclick="flip()">Interested</button>
                    </div>
                  </div>
                      {/* <button className="single-page-button" onclick="flip()">Interested?</button> */}
                  </div>
                  <div class="back">
                    <img src="https://hips.hearstapps.com/ghk.h-cdn.co/assets/17/30/pembroke-welsh-corgi.jpg" class="clip-circle"/> 
                    <div>
                      <form>
                        <label>Your Name</label>
                        <input type='text' />
                      </form>
                    </div>
                    <button className="single-page-button" onclick="flip()">Back To Details</button>
                  </div>    
              </div>
          </label>
    </div>
  );
}

export default SinglePage;
