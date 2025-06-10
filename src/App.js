import { useState } from 'react';
import './App.css';

function App() {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [addNotes, setAddNotes] = useState([]);

  const handleAddNote = () => {
    if (title.trim() !== "" && note.trim() !== "") {
      const newNote = { title, note };
      setAddNotes([...addNotes, newNote]);
      setTitle("");
      setNote("");
    }
  };

  return (
    <div className="App">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <div>
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Add your notes"
          rows="4"
          cols="50"
        />
      </div>
      <button onClick={handleAddNote}>Add Data</button>

      <ul>
        {addNotes.map((n, index) => (
          <li key={index}>
            <h4>{n.title}</h4>
            <p>{n.note}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
