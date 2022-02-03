/* eslint-disable jsx-a11y/img-redundant-alt */

export default function Shelf({dogInfo}) {
  return (
    <div class="shelf">
      <div id="text-content">
        <p class="name">{dogInfo.name}</p>
        <p class="detail">{dogInfo.detail}</p>
      </div>
      <div class="photo">
        <img src={dogInfo.imageUrl} alt={`picture of ${dogInfo.name}`}/>
      </div>
    </div>
  )
}