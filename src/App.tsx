import React, {useState} from 'react';
import './App.css';
import TodoList from "./Component/TodoList/TodoList";
import {v1} from 'uuid';

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type TodoListsType = {
    id: string
    title: string
    filter: FilterValuesType
}

export type FilterValuesType = "All" | "Active" | "Completed"

function App() {
    // BusinessLogicL... (BLL)

    const task1 = v1();
    const task2 = v1();
    let [tasksObj, setTasks] = useState({
        [task1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS/ES6", isDone: true},
            {id: v1(), title: "React", isDone: true},
            {id: v1(), title: "Redux", isDone: false},
            {id: v1(), title: "Bootstrap", isDone: false},
        ],
        [task2]: [
            {id: v1(), title: "Milk", isDone: true},
            {id: v1(), title: "Chips", isDone: true},
            {id: v1(), title: "Bread", isDone: true},
            {id: v1(), title: "Beer", isDone: false},
            {id: v1(), title: "Meat", isDone: false},
        ],
    })

    let [todolists, setTodolist] = useState<Array<TodoListsType>>([
        {id: task1, title: "What to learn", filter: "All"},
        {id: task2, title: "What to buy", filter: "All"},
    ])

    const removeTodolist = (todolistId: string) => {
        /*let filteredTodolist = todolists.filter(tl => tl.id !== todolistId);
        setTodolist(filteredTodolist)
        delete tasksObj[todolistId]
        setTasks({...tasksObj})*/

        setTodolist(todolists.filter(f => f.id !== todolistId ? delete tasksObj[todolistId] : setTasks({...tasksObj})))
    }

    const removeTask = (todolistId: string, taskID: string) => {
        setTasks({...tasksObj, [todolistId]: tasksObj[todolistId].filter(t => t.id !== taskID)})
    }

    let changeFilter = (todolistId: string, value: FilterValuesType) => {
        setTodolist(todolists.map((m) => m.id === todolistId ? {...m, filter: value} : m));
    }

    // add tasks in TASKS STATE
    const addTask = (todolistId: string, title: string) => {
        let newTask = {id: v1(), title, isDone: false}
        setTasks({...tasksObj, [todolistId]: [newTask, ...tasksObj[todolistId]]})
    }

    function changeStatus(todolistId: string, tasksId: string, isDone: boolean) {
        setTasks({
            ...tasksObj,
            [todolistId]: [...tasksObj[todolistId].map(t => t.id === tasksId ? {...t, isDone} : t)]
        });
    }

    //UI
    return (
        <div className={"App"}>
            {
                todolists.map((tl) => {

                    // Sam Filter
                    let tasksForRender = tasksObj[tl.id]
                    if (tl.filter === "Active") {
                        tasksForRender = tasksForRender.filter(t => !t.isDone)
                    } else if (tl.filter === "Completed") {
                        tasksForRender = tasksForRender.filter(t => t.isDone)
                    }

                    return (
                        <div className={"todolistBlock"}>
                            <TodoList
                                // ключи обязательны
                                key={tl.id}
                                // id
                                id={tl.id}
                                // name
                                titleOfTodo={tl.title}
                                // useState
                                tasks={tasksForRender}
                                // props na remove
                                removeTask={removeTask}
                                // props na button filter
                                changeFilter={changeFilter}
                                // addTask
                                addTask={addTask}
                                // changeStatus
                                changeTaskStatus={changeStatus}
                                // filter button style
                                filterBS={tl.filter}
                                // delete All todoLIST
                                removeTodolist={removeTodolist}
                            />
                        </div>
                    )
                })
            }
        </div>
    );
}

export default App;
