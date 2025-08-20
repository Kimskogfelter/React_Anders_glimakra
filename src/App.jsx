import './App.css'

// funktion för att visa användare
function UserCard(props) {
  
  const user = props.user;

  return (<div className={user.isAdmin ? 'user-card admin-card' : 'user-card'}>

    <img src={user.imgUrl} alt={user.name} />
    <p>namn: {user.name} {user.isAdmin ? '(Admin)' : ''}</p>
    <p>ålder: {user.age} år</p>
    <p>email: {user.email}</p>
  </div>);
}



function App() {
  
  
// användare
const users = [{ name: "kim", age: 32, email: "kim@muppson.com", imgUrl: "https://placehold.co/200x100", isAdmin: true },
{ id: 1, name: "berra", age: 56, email: "berra@muppson.com", imgUrl: "https://placehold.co/200x100", isAdmin: false },
{ id: 2, name: "gurkan", age: 17, email: "gurkan@muppson.com", imgUrl: "https://placehold.co/200x100", isAdmin: false },
{ id: 3, name: "muppen", age: 55, email: "muppen@muppson.com", imgUrl: "https://placehold.co/200x100",isAdmin: false }];

  return (
    <>
      <body>


        <h1>Hello Glimåkra</h1>
        {users.map(user => <UserCard user={user} />)}
      </body>
    </>
  )
}

export default App
