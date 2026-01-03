import axios from "axios"
import { useEffect, useState } from "react"

type Todo = {
    user_id: number;
    title: string;
    description:string;
    status:string;
    priority:string;
    due_date:string;
    completed_at:null;
    created_at?:string;
    updated_at?: string; 
}

function Home() {

    const [todos, setTodos] = useState<Todo[]>([])
    

    useEffect ( () => {
        const fetchTodos = async () => {
            const res = await axios.get('/api/todo')
            setTodos(res.data)
        }
        fetchTodos()
    }, [])
    

    return (
        <>
        <div>
            {todos.map(task => (
                <div>
                    <p>
                        <span>{task.title}</span>:
                        <span>{task.user_id}</span>
                    </p>
                </div>
            ))}
        </div>
        </>
    )
}

export default Home