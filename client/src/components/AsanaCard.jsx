
import React from 'react';
/*interface AsanaCardProps {
    asana: {
        id: number;
        english_name: string;
        sanskrit_name: string;
        notes: string;
    };
    onEdit: void;
    onDelete: void;
*/
const AsanaCard= ({ asana, onEdit, onDelete }) => {
    const { english_name, sanskrit_name, notes } = asana;

    return (
        <div>
        <h1>{english_name} / {sanskrit_name}</h1>  
        <p>{notes}</p>

        <button type="submit" onClick={() => onEdit()} className="btn btn-primary">Edit</button>
        <button onClick={() => onDelete()} className="btn btn-danger">Delete</button>
       
    </div>
    );
}

export default AsanaCard
