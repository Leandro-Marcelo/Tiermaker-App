import React from "react";
import { Droppable } from "react-beautiful-dnd";
import Task from "./Task";

const Column = ({ column, tasks, isDropDisabled }) => {
    return (
        <div className="w-[220px] mr-4">
            <p className="mb-2">{column.title}</p>
            {/* el droppable tiene una props required la cual es el droppableId, este id necesita ser único,  */}
            {/* un mecanismo para controlar donde podemos droppear nuestros draggables es el type, yo le puedo definir una condición donde si el id de la column es column-3 entonces no podes droppearlo en done (no tiene nada que ver con el nombre de la lista / column) (es decir, en esa columna) en caso contrario "active" dando la señal de que si podes droppearlo ahí */}
            <Droppable
                droppableId={column.id}
                /* type={column.id === "column-3" ? "done" : "active"} */
                /* otro metodo que nos servirá para controlar donde podemos droppear es isDroppableDisabled*/
                isDropDisabled={isDropDisabled}
                /* horizontal or vertical */
                direction="vertical"
            >
                {/* provided es un objeto,  */}
                {(provided, snapshot) => {
                    return (
                        <div
                            ref={provided.innerRef}
                            /* style={{
                                backgroundColor: snapshot.isDraggingOver
                                    ? "green"
                                    : "white",
                            }} */
                            className={`flex flex-col gap-4 border-2 border-[red] ${
                                snapshot.isDraggingOver
                                    ? "bg-[skyblue]"
                                    : "bg-[white]"
                            } transition ease-in-out delay-200`}
                        >
                            {tasks.map((task, index) => (
                                <Task key={task.id} task={task} index={index} />
                            ))}
                            {/* es un elemento de React, que es utilizado para incrementar el espacio disponible en un droppable, para cuando sea necesario para el draggable */}
                            {provided.placeholder}
                        </div>
                    );
                }}
            </Droppable>
        </div>
    );
};

export default Column;
