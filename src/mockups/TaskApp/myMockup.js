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
    ],
    // Facilitate reordering of the columns
    /* los columId / listId */
    columnOrder: ["column-1"],
};

export default mockup;

const verMejor = [
    {
        id: "column-1",
        title: "To do",
        tasks: [[Object], [Object], [Object], [Object]],
    },
    { id: "column-2", title: "To do", tasks: [[Object]] },
];

/* Obtener la data de las tareas de una columna en específico

// primero que todo sé cual es la columna la cual quiero obtener su arreglo de id de tareas por eso el [0]
const tasksIds = mockup.columns[0].taskIds

// retorna un arreglo que contiene arreglos que dentro de esos arreglos esta nuestra info de la tarea
console.log(tasksIds.map((taskId) => {
  return mockup.tasks.filter((task) => task.id === taskId ? task : null)
}));


const loQueImprimeArriba = [
    [{ id: "task-1", content: "Take out the garbage" }],
    [{ id: "task-2", content: "Watch my favorite show" }],
    [{ id: "task-3", content: "Charge my phone" }],
    [{ id: "task-4", content: "Cook dinner" }],
];

let enUnSoloArray =[]

// dejamos todo los objetos en un solo arreglo
loQueImprimeArriba.forEach((el) => {
    enUnSoloArray.push({ ...el[0] });
});

console.log(enUnSoloArray);

Y si quisiera la data de la lista de estamisma de recién es simplemente

console.log(mockup.columns[0]); xd

*/
