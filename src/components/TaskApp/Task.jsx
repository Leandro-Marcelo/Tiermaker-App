import React from "react";
import { Draggable } from "react-beautiful-dnd";
import Handle from "./Handle";

const Task = ({ task, index }) => {
    /* console.log(task); */
    /* con esto se puede desarrollar cosas como, si no tenes el rol necesario estas tareas van a estar con el isDragDisabled true boeee, o un admin va a poder poner esto a true las tareas que quiera, o que despues de que el rol normal lo ponga en esperando validación, no pueda sacarlo de ahí */
    const isDragDisabled = task.id === "task-1";
    return (
        /* podemos ponerle un focus y que tenga un borde rojo por ejemplo */
        <div className="">
            <Draggable
                draggableId={task.id}
                index={index}
                /* si task.id es igual a task-1 entonces no podes moverla, tambien podríamos hacer la condición en una variable y poner esa variable acá abajo xd */
                isDragDisabled={isDragDisabled}
            >
                {/* snapshot contiene un numero de propiedades que puedes utilizar para darle estilo a tu draggable durante hace el drag */}
                {(provided, snapshot) => {
                    /* esta prop es necesario aplicarla a el componente  que queres que se mueva */
                    return (
                        <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            /* para que no se vea que el segundo elemento esta por debajo del primero que se esta moviendo, le pone un fondo blanco */
                            className={`flex border-2 p-2 border-black ${
                                snapshot.isDragging
                                    ? "bg-[lightgreen]"
                                    : "bg-[white]"
                            } ${isDragDisabled ? "bg-[lightgrey]" : "white"}`}
                        >
                            {/* con esto ahora solo podemos mover las task con este coso naranja, ojito si importamos algo de afuera no funciona, si ponemos directamente el componente acá todo bien */}
                            <div
                                {...provided.dragHandleProps}
                                className="w-5 h-5 rounded-md bg-[orange] mr-2"
                            ></div>
                            {task.content}
                        </div>
                    );
                }}
            </Draggable>
        </div>
    );
};

export default Task;
