import React, { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Column from "../components/Column";
import initialData from "../mockups/initialData";

/* **********************************  Reordering draggables on the horizontal plane, droppable direction E11 ************************ */

export default function Tiermaker() {
    const [data, setData] = useState(initialData);

    const onDragEndApp1 = ({ destination, source, draggableId, type }) => {
        // dropped the task/list outside de su droppable area
        if (!destination) {
            return;
        }

        // dropped the task/list in the same place
        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        // Moving the list
        if (type === "column") {
            const newColumnOrder = Array.from(data.columnOrder);
            newColumnOrder.splice(source.index, 1);
            newColumnOrder.splice(destination.index, 0, draggableId);

            const newState = { ...data, columnOrder: newColumnOrder };

            setData(newState);
            return;
        }

        // Moving the task inside the same column
        const start = data.columns[source.droppableId];
        const finish = data.columns[destination.droppableId];

        if (start === finish) {
            const newTaskIds = Array.from(start.taskIds);
            // remove the item from the old position
            newTaskIds.splice(source.index, 1);
            // add the item in the new position
            newTaskIds.splice(destination.index, 0, draggableId);

            const newColumn = {
                ...start,
                taskIds: newTaskIds,
            };

            const newState = {
                ...data,
                columns: {
                    ...data.columns,
                    [newColumn.id]: newColumn,
                },
            };

            setData(newState);
            return;
        }

        // Moving the task from one list to another
        const startTaskIds = Array.from(start.taskIds);
        startTaskIds.splice(source.index, 1);
        const newStart = {
            ...start,
            taskIds: startTaskIds,
        };

        const finishTaskIds = Array.from(finish.taskIds);
        finishTaskIds.splice(destination.index, 0, draggableId);
        const newFinish = {
            ...finish,
            taskIds: finishTaskIds,
        };

        const newState = {
            ...data,
            columns: {
                ...data.columns,
                [newStart.id]: newStart,
                [newFinish.id]: newFinish,
            },
        };

        setData(newState);
    };

    return (
        <DragDropContext onDragEnd={onDragEndApp1}>
            <Droppable droppableId="all-columns" type="column">
                {(provided) => (
                    <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        className="container-fluid container-lean"
                    >
                        {data.columnOrder.map((columId, index) => {
                            const column = data.columns[columId];

                            const tasks = column.taskIds.map(
                                (taskId) => data.tasks[taskId]
                            );

                            return (
                                <Column
                                    key={column.id}
                                    column={column}
                                    tasks={tasks}
                                    index={index}
                                />
                            );
                        })}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
}
