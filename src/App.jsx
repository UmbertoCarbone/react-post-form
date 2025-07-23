import { useState } from "react"
function App() {
  //
  const [author, setAuthor] = useState("")
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  //
  function handleAuthor(e) {
    setAuthor(e.target.value)
  }
  function handleTitle(e) {
    setTitle(e.target.value)
  }
  function handleBody(e) {
    setBody(e.target.value)
  }
  /* function handleTitle(e) {
    setTitle(e.target.value)
   }
  */
  return (
    <>
      <div className="container">
        <div className="card p-3 mx-auto mt-5" style={{ maxWidth: "400px" }}>
          {/* input nome + funzione handleName */}
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" placeholder="Type your name" value={author} onChange={handleAuthor} />
          </div>
          {/* input Title + funziona handleTitle */}
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input type="text" className="form-control" placeholder="Type your tile" value={title} onChange={handleTitle} />
          </div>
          {/* body + button + funzione handleBody */}
          <div className="mb-3">
            <label className="form-label">Post</label>
            <textarea className="form-control" placeholder="Type your post" value={body} onChange={handleBody} />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Invia
          </button>
          {/* fine container + card */}
        </div>
      </div>
    </>
  )
}

export default App


