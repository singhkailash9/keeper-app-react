import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateNote from './CreateNote';

function App(){

    const [notes, setNote] = useState([]);

    function addNote(note){
        setNote( prevArray => {
            return [...prevArray, note]
        })
    }
    function deleteNote(id){
        setNote(prevArray => {
            return prevArray.filter((noteItem, index)=>{
                return index !== id;

            })
        })
    }
    return <div>
        <Header />
        <CreateNote onAdd={addNote}/>
        {/* <Notes/> */}
        {notes.map( (noteItem, index)=>{
            return <Note 
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
            />
        } )}
        <Footer />
    </div>
}

export default App;