import React from "react";
import { Draggable } from "react-beautiful-dnd";

import episode1 from "../assets/T1/1.webp";
import episode2 from "../assets/T1/2.webp";
import episode3 from "../assets/T1/3.webp";
import episode4 from "../assets/T1/4.webp";
import episode5 from "../assets/T1/5.webp";
import episode6 from "../assets/T1/6.webp";
import episode7 from "../assets/T1/7.webp";
import episode8 from "../assets/T1/8.webp";
import episode9 from "../assets/T1/9.webp";
import episode10 from "../assets/T1/10.webp";
import episode11 from "../assets/T1/11.webp";

export default function Task({ task, index }) {
    const episodes = {
        "task-1": episode1,
        "task-2": episode2,
        "task-3": episode3,
        "task-4": episode4,
        "task-5": episode5,
        "task-6": episode6,
        "task-7": episode7,
        "task-8": episode8,
        "task-9": episode9,
        "task-10": episode10,
        "task-11": episode11,
    };
    return (
        <Draggable draggableId={task.id} index={index}>
            {(provided, snapshot) => {
                return (
                    <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className={`task-container `}
                    >
                        <img src={episodes[task.id]} alt="" className="img" />
                    </div>
                );
            }}
        </Draggable>
    );
}
