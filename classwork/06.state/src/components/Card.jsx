

const Card = ({user}) => {
    console.log(user);
  return (
    <div className="card">
        <h1>{user.title}</h1>
    </div>
  )
}

export default Card