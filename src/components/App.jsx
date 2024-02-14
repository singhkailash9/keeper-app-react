import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateNote from './CreateNote';

function App(){

    const [notes, setNotes] = useState([]);

    useEffect(() => {
        fetch('/notes')
        .then(response => response.json())
        .then(data => {
            setNotes(data);
        });
    }, []);

    function addNote(newNote) {
        fetch('/notes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newNote),
        })
        .then(response => response.json())
        .then(data => {
            // console.log('Success:', data);
            setNotes(prevNotes => [...prevNotes, data]);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
    
    function deleteNote(noteId) {
        fetch(`/notes/${noteId}`, {
            method: 'DELETE',
        })
        .then(response => response.json())
        .then(() => {
            setNotes(prevNotes => prevNotes.filter(note => note._id !== noteId));
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
    
    return <div>
        <Header />
        <CreateNote onAdd={addNote}/>
        {/* <Notes/> */}
        {notes.map( (noteItem, index)=>{
            return <Note 
            key={noteItem._id}
            id={noteItem._id}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
            />
        } )}
        <Footer />
    </div>
}

export default App;