import { useState } from "react"
function App() {
  //
  const [author, setAuthor] = useState("")
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")

  //API
  const url = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts"

  //fetch + funzione
  function handleSubmit(e) {
    e.preventDefault()

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        author: author,
        title: title,
        body: body
      })
    };
    fetch(url, requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log("sono qui")
        console.log(data)
      });
  }


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
        <form className="card p-3 mx-auto mt-5" style={{ maxWidth: "400px" }} onSubmit={handleSubmit}>
          {/* input nome + funzione handleName */}
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" name="author" className="form-control" placeholder="Type your name" value={author} onChange={handleAuthor} />
          </div>
          {/* input Title + funziona handleTitle */}
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input type="text" name="title" className="form-control" placeholder="Type your title" value={title} onChange={handleTitle} />
          </div>
          {/* body + button + funzione handleBody */}
          <div className="mb-3">
            <label className="form-label">Post</label>
            <textarea className="form-control" name="body" placeholder="Type your post" value={body} onChange={handleBody} />
          </div>
          <div className="mb-3 form-check">
            <label className="form-check-label">Published</label>
            <input type="checkbox" name="published" className="form-check-input" />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Invia
          </button>
          {/* fine container + card */}
        </form>
      </div>
    </>
  )
}

export default App


