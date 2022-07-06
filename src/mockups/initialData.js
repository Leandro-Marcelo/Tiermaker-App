const initialData1 = {
    /* tasks es episodes */
    /* task-1 es episode-1 */
    tasks: {
        "task-1": { id: "task-1", episode: "1" },
        "task-2": { id: "task-2", episode: "2" },
        "task-3": { id: "task-3", episode: "3" },
        "task-4": { id: "task-4", episode: "4" },
        "task-5": { id: "task-5", episode: "5" },
        "task-6": { id: "task-6", episode: "6" },
        "task-7": { id: "task-7", episode: "7" },
        "task-8": { id: "task-8", episode: "8" },
        "task-9": { id: "task-9", episode: "9" },
        "task-10": { id: "task-10", episode: "9" },
        "task-11": { id: "task-11", episode: "9" },
    },
    columns: {
        "column-1": {
            id: "column-1",
            title: "S",
            // first purpose is to indicate ownership, second purpose is to indicate the order of the tasks
            taskIds: [],
        },
        "column-2": {
            id: "column-2",
            title: "A",
            taskIds: [],
        },
        "column-3": {
            id: "column-3",
            title: "B",
            taskIds: [],
        },
        "column-4": {
            id: "column-4",
            title: "C",
            taskIds: [],
        },
        "column-5": {
            id: "column-5",
            title: "D",
            taskIds: [],
        },
        "column-6": {
            id: "column-6",
            title: "*",
            taskIds: [
                "task-1",
                "task-2",
                "task-3",
                "task-4",
                "task-5",
                "task-6",
                "task-7",
                "task-8",
                "task-9",
                "task-10",
                "task-11",
            ],
        },
    },
    // Facilitate reordering of the columns
    columnOrder: [
        "column-1",
        "column-2",
        "column-3",
        "column-4",
        "column-5",
        "column-6",
    ],
};

export default initialData1;
