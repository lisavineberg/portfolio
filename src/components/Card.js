const Card = ({ card }) => {
  return (
    <li>
      <a href={card.url}>
        <h2>{card.title}</h2>
      </a>
      <p>{card.desc}</p>
    </li>
  )
}

export default Card;