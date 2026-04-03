import { useState } from 'react' // this statement import the Hook to let React track data.

function App() {
  // state definitions
  //    [value, functionToUpdateValue] = useState(initialValue)
  const [todo, setTodo] = useState(""); // tracks what you are typing in the input field
  const [list, setList] = useState([]); // tracks the array of all your tasks
  // --- LOGIC FUNCTIONS ---

  // Function to add a new task.
  const addTodo = () => {
    if (todo.trim() !== "") { //prevent from adding empty tasks.
      setList([...list, todo]); // uses spread operator to create a new array with the new task
      setTodo(""); // reset the input field to empty.
    } else { // this shows a message when trying to add an empty task.
      alert("Don't be silly, you can't add an empty task! Please enter something to do.");
    }
  };
 
  //fubction to delete a task
  const deleteTodo = (indexToDelete) => {
    // .filter meethod creates a new array by skipping the item at the clicked index.
    const newList = list.filter((_, index) => index !== indexToDelete);
    setList(newList); //update the state with the filtered list.
  };
 
  // the UI(what is shown in the browser.)
  return (
     <div style={{ padding: '40px', maxWidth: '400px', margin: 'auto', fontFamily: 'Aria' }}>
      <h1 style={{ color: '#646cff' }}>Drelix's ToDo List ⚡</h1>

      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        {/* CONTROLLED INPUT: The value is linked directly to the "todo" state */}
        <input 
          type='text'
          value={todo}
          onChange={(e) => setTodo(e.target.value)} // updates the "todo" state as you type.
          placeholder="what's the plan, bro?"
          style={{ padding: '10px', flex: 1, borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <button 
          onClick={addTodo}
          style={{ padding: '10px 20px', cursor: 'pointer', backgroundColor: '#646cff', color: 'white', border: 'none', borderRadius: '5px' }} 
        >
          Add Task
        </button>
      </div>

    {/* RENDERING THE LIST: We loop through the "list" array and turn each item into a <li> */}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {list.map((item, index) => (
          <li key={index} style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '10px',
            borderBottom: '1px solid #eee',
            alignItems: 'center'
          }}>
            <span>{item}</span>
            <button
              onClick={() => deleteTodo(index)}
              style={{ color: '#ff4747', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {/* CONDITIONAL MESSAGE: If the list is empty, show a message */}
      {list.length === 0 && <p style={{ textAlign: 'center', color: '#888' }}>No tasks yet. Get to work!</p>}
     </div>
  )
}

export default App