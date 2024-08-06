import { useContext } from 'react';
import './FilterTasks.css'
import { taskContext } from '../../Context/Context';

export const FilterTask = () => {
    const { tasks, setFilteredTasks } = useContext(taskContext);


    const handleFilters = (event) => {
        const currentOption = event.target.value;

        if (currentOption === 'Pendientes') {
            setFilteredTasks(tasks.filter(task => !task.status));
        } else if (currentOption === 'Realizadas') {
            setFilteredTasks(tasks.filter(task => task.status));
        } else {
            setFilteredTasks(tasks);
        }
    };

    return (
        <div className='container-filters'>
            <label>Filtrar Por</label>
            <select onChange={handleFilters}>
                <option value="Todas" className="opt opt1">Todas</option>
                <option value="Pendientes" className="opt opt2">Pendientes</option>
                <option value="Realizadas" className="opt opt3">Realizadas</option>
            </select>
        </div>
    );
};
