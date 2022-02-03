import "./SinglePage.css";

function SinglePage() {
  return (
    <div className="single-page">
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
          <button className="single-page-button">Interested</button>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
