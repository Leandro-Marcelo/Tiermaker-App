import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import Task from "./Task";

export default function Column({ column, tasks, index }) {
    return (
        <Draggable draggableId={column.id} index={index}>
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    className="column-container"
                >
                    <div
                        {...provided.dragHandleProps}
                        className={`column-title ${
                            column.title === "S"
                                ? "bg-S"
                                : column.title === "A"
                                ? "bg-A"
                                : column.title === "B"
                                ? "bg-B"
                                : column.title === "C"
                                ? "bg-C"
                                : column.title === "D"
                                ? "bg-D"
                                : "bg-images"
                        }`}
                    >
                        {column.title}
                    </div>
                    {/* by default, direction is vertically */}
                    <Droppable droppableId={column.id} direction="horizontal">
                        {(provided) => {
                            return (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                    className={`task-list `}
                                >
                                    {tasks.map((task, index) => (
                                        <Task
                                            key={task.id}
                                            task={task}
                                            index={index}
                                        />
                                    ))}

                                    {provided.placeholder}
                                </div>
                            );
                        }}
                    </Droppable>
                </div>
            )}
        </Draggable>
    );
}
