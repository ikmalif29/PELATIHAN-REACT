
function App() {
  const user = [
    {
      nama: "ikmal",
      age: 12
    },
    {
      nama: "imals",
      age: 12
    },
    {
      nama: "fauzaeni",
      age: 12
    },
    {
      nama: "tanjung",
      age: 12
    },
  ]

  return (
    <>
      <ul>
        {user.map((u, index) => (
          <li key={index}>{u.nama}</li>
        ))}
      </ul>
    </>
  )
}

export default App;