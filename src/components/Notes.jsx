import Note from "./Note";
import NotesData from "./NotesData"


export default function Notes() {
    return (
        NotesData.map(NewNote =>
            <Note
                key={NewNote.key}
                title={NewNote.title}
                content={NewNote.content} />
        )
    );
}