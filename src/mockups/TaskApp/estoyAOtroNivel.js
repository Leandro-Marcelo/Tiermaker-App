const mockup = {
    tasks: [
        { id: "task-1", content: "Take out the garbage" },
        { id: "task-2", content: "Watch my favorite show" },
        { id: "task-3", content: "Charge my phone" },
        { id: "task-4", content: "Cook dinner" },
        { id: "task-5", content: "Cook breakfast" },
    ],
    columns: [
        {
            id: "column-1",
            title: "To do",
            taskIds: ["task-1", "task-2", "task-3", "task-4"],
        },
        {
            id: "column-2",
            title: "To do",
            taskIds: ["task-5"],
        },
    ],
    // Facilitate reordering of the columns
    /* los columId / listId */
    columnOrder: ["column-1"],
};

console.log(mockup.columns.length);

let acaEstanTodosLosEnUnSoloArray = [];

for (let i = 0; i < mockup.columns.length; i++) {
    // primero que todo sé cual es la columna la cual quiero obtener su arreglo de id de tareas por eso el [i]
    const tasksIds = mockup.columns[i].taskIds;

    // retorna un arreglo que contiene arreglos que dentro de esos arreglos esta nuestra info de la tarea

    const loQueImprimeArriba = tasksIds.map((taskId) => {
        return mockup.tasks.filter((task) =>
            task.id === taskId ? task : null
        );
    });

    let enUnSoloArray = [];

    // dejamos todo los objetos en un solo arreglo
    loQueImprimeArriba.forEach((el) => {
        enUnSoloArray.push({ ...el[0] });
    });

    acaEstanTodosLosEnUnSoloArray.push(enUnSoloArray);
}

/* 
[
    [
        { id: "task-1", content: "Take out the garbage" },
        { id: "task-2", content: "Watch my favorite show" },
        { id: "task-3", content: "Charge my phone" },
        { id: "task-4", content: "Cook dinner" },
    ],
    [{ id: "task-5", content: "Cook breakfast" }],
];
 */
console.log(acaEstanTodosLosEnUnSoloArray);
