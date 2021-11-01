//recibira un elemento
export default function ListaTarea({tareas}) {
    return (
        <div>
            <ul className="list-group">
                {tareas.map((task, i)=>(
                    <li key={i} className="list-group-item">
                        {task}
                    </li>
                ))}
            </ul>
        </div>
    )
}
