import { useContext } from "react";
import { NewTask } from "../NewTask/NewTask";
import { ItemTask } from "../ItemTask/ItemTask";
import { taskContext } from "../Context/Context";
import { Header } from "../Layouts/Header/Header";
import { Main } from "../Layouts/Main/Main";
import { ContainerTask } from "../Layouts/ContainerTask/ContainerTask";
import { InfoTasks } from "../Layouts/InfoTask/InfoTask";
import { FilterTask } from "../Layouts/FilterTask/FilterTasks";

export const Home = () => {
  const { filteredTasks } = useContext(taskContext);

  return (
    <>
      <Header>
        <h1>Gestor de tareas</h1>
        <NewTask/>
        <FilterTask/>
        <InfoTasks/>
      </Header>
      <Main>
      <ContainerTask> {filteredTasks.map((task) => (
            <ItemTask
              key={task.id}
              idTask={task.id}
              content={task.description}
              titleTask={task.title}
            />
          ))}
        </ContainerTask>
         
        
      </Main>
    </>
  );
}