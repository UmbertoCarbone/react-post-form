import { useState } from "react"
function App() {

  const [name, setName] = useState("")

  function handleName(e) {
    setName(e.target.value)
  }

  return (
    <>
      <div className="container">
        {/* input nome + funzione handleName */}
        <div
          className="card p-3 mx-auto mt-5"
          style={{ maxWidth: "400px" }}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" placeholder="Type your name" value={name} onChange={handleName} />
          </div>
        </div>
      </div>
      
    </>
  )
}

export default App


{/*  <div className="mb-3">
          <label className="form-label">Titolo</label>
          <input type="text" className="form-control" required>
        </div>
        <div className="mb-3">
          <label className="form-label">Testo</label>
          <textarea className="form-control" required></textarea>
        </div>
        <div className="form-check mb-3">
          <input className="form-check-input" type="checkbox" id="publicCheck">
            <label className="form-check-label" for="publicCheck">
              Pubblico
            </label>
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Invia
        </button> */}