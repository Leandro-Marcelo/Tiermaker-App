import React, { useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "../components/TaskApp/Column";
import mockup from "../mockups/TaskApp/myMockup";
import initialData from "../mockups/TaskApp/initialData";

const TaskApp = () => {
    let stateInitial = initialData;
    const [mockup, setMockup] = useState(stateInitial);

    const reorder = (taskIds, startIndex, endIndex) => {
        const result = Array.from(taskIds);
        //hace una copia del array de tareas xd que acá en el ejemplo de tzuzul lo llamo lista
        //console.log(result);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        return result;
    };

    const move = (
        source,
        destination,
        droppableSource,
        droppableDestination
    ) => {
        const sourceClone = Array.from(source);
        const destClone = Array.from(destination);
        /* se saca de su lista, es decir, se elimina de donde se encontraba en su lista */
        const [removed] = sourceClone.splice(droppableSource.index, 1);
        /* y ahora ese elemento que se sacó de su lista, se pone en la otra linea sin eliminar ningun elemento de la nuevo lista de destino */
        destClone.splice(droppableDestination.index, 0, removed);
        /* finalmente retorna las dos listas clone que ya estan listas para solo pegarle un set y era */
        return [sourceClone, destClone];
    };

    const onDragEnd = ({ source, destination }) => {
        if (!destination) {
            return;
        }

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        if (source.droppableId === destination.droppableId) {
            // obtengo la data de la columna que se movió
            const column = mockup.columns[source.droppableId];

            const newTaskIds = reorder(
                // envio el arreglo que contiene los id de las tasks y el reorder lo reordena y me lo devuelve igual como un arreglo
                column.taskIds,
                source.index,
                destination.index
            );

            const newColumn = {
                ...column,
                taskIds: newTaskIds,
            };

            const newState = {
                ...mockup,
                columns: {
                    /* esto no es necesario pero se hace por buena práctica */
                    ...mockup.columns,
                    /* este newColumn.id lo hace porque el id se llama igual que la propiedad */
                    [newColumn.id]: newColumn,
                },
            };

            console.log(newState);

            setMockup(newState);
        } else {
            console.log();
            const listaOrigen = mockup.columns[source.droppableId];
            const listaDestino = mockup.columns[destination.droppableId];
            const startTaskIdsClone = Array.from(listaOrigen.taskIds);
            const [removed] = startTaskIdsClone.splice(source.index, 1);
            console.log(`remove`, removed);
            const newStart = {
                ...listaOrigen,
                taskIds: startTaskIdsClone,
            };

            const finishTaskIdsClone = Array.from(listaDestino.taskIds);
            finishTaskIdsClone.splice(destination.index, 0, removed);

            console.log(startTaskIdsClone, finishTaskIdsClone);

            const newFinish = {
                ...listaDestino,
                taskIds: finishTaskIdsClone,
            };

            const newState = {
                ...mockup,
                columns: {
                    ...mockup.columns,
                    [newStart.id]: newStart,
                    [newFinish.id]: newFinish,
                },
            };

            setMockup(newState);
        }
    };

    const [homeIndex, setHomeIndex] = useState(null);

    const onDragStart = (start) => {
        /* el indexOf te dice en que posición esta del arreglo dicho elemento */
        /* te va a imprimir 0 si su origen es la primera lista, 1 si es la segunda y 2 si es la tercera */
        /* basicamente el columnOrder son column-1", "column-2", "column-3 y el start.source.droppableId es column-2 si al momento de agarrarlo su origen es column-2 xd, sabiendo esto el indexOf lo va a buscar en el arreglo y va a decir que este se encuentra en el indice 1 ya que en los array empiezan del 0 */
        console.log(`antes:`, homeIndex);
        setHomeIndex(mockup.columnOrder.indexOf(start.source.droppableId));
        console.log(`despues`, homeIndex);
    };
    return (
        /* onDragStart el cual es llamado cuando el drag empieza, onDragUpdate cuando es llamado cuando un draggable es actualizado, por ejemplo, el item ha sido movido a una nueva position y finalmente el onDragEnd / cb requerido el cual se ejecuta cuando finaliza el draggable, es decir, cuando lo moves a un lugar no ocurre nada cuando lo soltas y termina su movimiento recién se ejecuta este cb */
        <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
            <div className="flex m-2">
                {mockup.columnOrder.map((columId, index) => {
                    /* la data de las columns, como el id, title, y su arreglo de id que hacen referencia a las tareas */
                    const column = mockup.columns[columId];
                    console.log(column);
                    /* la data de las tasks, como el id y el content de la column de recién */
                    const tasks = column.taskIds.map(
                        (taskId) => mockup.tasks[taskId]
                    );
                    console.log(tasks);
                    console.log(`que valor tiene`, homeIndex);
                    const isDropDisabled = index < homeIndex;
                    return (
                        <Column
                            key={column.id}
                            column={column}
                            tasks={tasks}
                            isDropDisabled={isDropDisabled}
                        />
                    );
                })}
            </div>
        </DragDropContext>
    );
};

export default TaskApp;
