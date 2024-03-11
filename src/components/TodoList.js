// src/components/TodoList.js
import React, { useState } from 'react';

const TodoList = () => {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const handleInputChange = (e) => {
        setNewTask(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newTask.trim() !== '') {
            setTasks([...tasks, {id: Date.now(), text: newTask, completed: false }]);
            setNewTask('');
        }
    };

    const toggleTaskCompletion = (taskId) => {
        setTasks(
            tasks.map((task) =>
            task.id === taskId? {...task, completed:!task.completed } : task)
        );
    };

    const deleteTask = (taskId) => {
        setTasks(
            tasks.filter((task) => task.id!== taskId)
        );
    };

    const hasData = tasks && tasks.length > 0;

  return (
    <div>
      <h1>To-Do List</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" value={newTask} onChange={handleInputChange} placeholder='Ajouter une nouvelle tâche' />
            <button type="submit">Ajouter</button>
        </form>
        {hasData && (
        <ul>
            <table>
                <thead>
                    <tr>
                        <th>Valider la tâche</th>
                        <th>nom de la tâche</th>
                        <th>Supprimer la tâche</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task) => (
                        <tr key={task.id}>
                            <td className='unstyled'>                                
                                <input
                                type="checkbox"
                                className='styled-checkbox'
                                id={`styled-checkbox-${task.id}`}
                                checked={task.completed}
                                onChange={() => toggleTaskCompletion(task.id)}
                                />
                                <label for={`styled-checkbox-${task.id}`}></label>                                
                            </td>
                            <td><span style={{ color: task.completed ? '#319f31' : '#af2842' }}>{task.text}</span></td>
                            <td>
                                <button onClick={() => deleteTask(task.id)}>Supprimer</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </ul>
      )}
      {!hasData && <p>Entrez une nouvelle tâche pour l'afficher ici !</p>}
      <style jsx>{`
        *{
                border: 0;
                margin: 0;
                text-align: center;
                color: #E6B467;
                background: #575F66;
            }

            body {
                font-family: 'Source Sans Pro', sans-serif;
            }

            h1{
                margin: 5em 0 1em 0;
                text-shadow: 2px 2px 5px rgb(97, 97, 97);
            }

            p, table {
                margin-top: 2em;
            }

            input{
                width: 200px;
                height: 30px;
                border: none;
                box-shadow: 0 2px 15px;
                border-radius: 20px 0 0 20px;
            }

            input, button {
                background: #eee;
            }

            button{
                width: 100px;
                height: 32px;
                border: none;
                box-shadow: 0 2px 15px;
                border-radius: 0 20px 20px 0;
            }

            button:hover{
                cursor: pointer;
                background: #918471;
            }

            form, table{
                margin-left: 50%;
                transform: translateX(-50%);
            }

            thead tr{
                margin-bottom: 50px;
            }

            table {
                width: 50%;
                border-collapse: collapse;
                text-align: center;
                box-shadow: 0 2px 15px;
                list-style: none;
                text-align: center;
            }

            tr button{
                border-radius: 10px;
            }

            tr span{
                margin-top: 4px;
                font-size: 2rem;
            }

            input[type="checkbox"] {
                width: auto;
                height: auto;
                border: none;
                box-shadow: none;
                opacity: 0;
            
                & + label {
                    position: relative;
                    cursor: pointer;
                    padding: 0;
                  }
              
                & + label:before {
                    content: '';
                    margin-right: 10px;
                    display: inline-block;
                    vertical-align: text-top;
                    width: 20px;
                    height: 20px;
                    background: #eee;
                  }
              
                &:hover + label:before {
                    background: #918471;
                  }
              
                &:checked + label:before {
                    background: #E6B467;
                  }
              
                &:checked + label:after {
                    content: '';
                    position: absolute;
                    left: 5px;
                    top: 9px;
                    background: white;
                    width: 2px;
                    height: 2px;
                    box-shadow: 
                      2px 0 0 white,
                      4px 0 0 white,
                      4px -2px 0 white,
                      4px -4px 0 white,
                      4px -6px 0 white,
                      4px -8px 0 white;
                    transform: rotate(45deg);
                  }
            }

            td {
                margin: 20px 0;
              }

            .unstyled {
                margin: 0;
                padding: 0;
                list-style-type: none;
              }
          
            th, td {
                padding: 5px;
            }

            @media screen and (max-width: 1200px) {
                form{
                    width: 100%;
                }
            
                table{
                    width: 100%;
                    transform: translatex(0);
                    margin-left: -20px;
                }
            }
      `}</style>
    </div>
  );
};

export default TodoList;