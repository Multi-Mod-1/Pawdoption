/* eslint-disable jsx-a11y/img-redundant-alt */
import SinglePage from "./SinglePage";

export default function Shelf({dogInfo}) {
  return (
    <div className="shelf">
      <div id="text-content">
        <p className="name">{dogInfo.name}</p>
        <p className="detail">{dogInfo.detail}</p>
      </div>
      <div className="photo">
        <a href="/dog">
          <img src={dogInfo.imageUrl} alt={`picture of ${dogInfo.name}`} />
        </a>
      </div>
    </div>
  );
}
