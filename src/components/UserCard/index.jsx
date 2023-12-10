
export default function UserCard({ user }) {
  const { firstName, lastName, image, address, phoneNumber, age} = user
  return (

     <div className="frame">
      <div className="image"><img src={image} /></div>
      <div className="name">{firstName} {lastName}</div>
      <div className="phone"><strong>Tel:</strong> {phoneNumber}</div>
      <div className="age"><strong>Age:</strong> {age}</div>
      <div className="address"><strong>Address:</strong> {address}</div>
    </div>
   
  )
}