import { useState } from "react"
import reactLogo from "../src/assets/react.svg"
function App() {
  //
  const [author, setAuthor] = useState("")
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [isPublic, setIsPublic] = useState(false)

  //API
  const url = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts"

  //fetch + funzione
  /*Blocca il comportamento standard del form
  (che sarebbe ricaricare la pagina quando premi il button).*/
  function handleSubmit(e) {
    e.preventDefault()
    /* variabile + creazione oggeti con le opzioni di richiesta */
    const requestOptions = {
      /* method POST = voglio inviare dati(non sono leggerli) */
      method: 'POST',
      /* headers = dico al server che sto mandando dati in formato JSON */
      headers: {
        'Content-Type': 'application/json'
      },
      /* body = qui metto i dati che voglio inviare(nome,titolo,ecc) */
      /* JSON.stringify = trasforma l'oggetto in una stringa che il server capisce */
      body: JSON.stringify({
        author: author,
        title: title,
        body: body,
        public: isPublic
      })
    };
    /* fetch = invia la r3ichiesta all'indirizzo dell api"url" + variabile  */
    fetch(url, requestOptions)
      /* Server risponde, prende la risposta e la trasforomo in un oggetto leggibile da JS  */
      .then(response => response.json())
      /* - **Quando ho i dati della risposta**:
  - Scrivo "sono qui" in console (per vedere che ci sono arrivato).
  - Scrivo anche i dati ricevuti dal server (così puoi vedere cosa ha risposto). */
      .then(data => {
        console.log("sono qui")
        console.log(data)
      });
  }

/* Sintesi:
Blocco refresh della pagina
Prepari i dati da inviare
Mandi i dati all'API
Aspetti la risposta
Stampi la risposta in console  */
  
/* Gestori di evento "event handler o handler" */
  function handleCheck(e) {
    setIsPublic(e.target.checked)
  }
  function handleAuthor(e) {
    setAuthor(e.target.value)
  }
  function handleTitle(e) {
    setTitle(e.target.value)
  }
  function handleBody(e) {
    setBody(e.target.value)
  }


  return (
    <>
      <div className="container">
        <div className="d-flex align-items-center justify-content-center gap-2 mt-5 mb-3">
          <h1 className="m-0">API + REACT</h1>
          <img src={reactLogo} alt="React Logo" style={{ width: 40, height: 40 }} />
          <h1>+
            <img width="40" height="40" src="https://img.icons8.com/officel/40/wasp.png" alt="wasp" />
          </h1>
        </div>
        <form className="card p-4 mx-auto mt-4" style={{ maxWidth: "400px" }} onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" name="author" className="form-control" placeholder="Type your name" value={author} onChange={handleAuthor} />
          </div>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input type="text" name="title" className="form-control" placeholder="Type your title" value={title} onChange={handleTitle} />
          </div>
          <div className="mb-3">
            <label className="form-label">Post</label>
            <textarea className="form-control" name="body" placeholder="Type your post" value={body} onChange={handleBody} />
          </div>
          <div className="mb-3 form-check">
            <label className="form-check-label">Published</label>
            <input type="checkbox" name="published" className="form-check-input" checked={isPublic} onChange={handleCheck} />
          </div>
          <button type="submit">
            Invia
          </button>
        </form>
      </div>
    </>
  )
}

export default App

