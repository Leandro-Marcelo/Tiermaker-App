import { BrowserRouter, Routes, Route } from "react-router-dom";
import TaskApp from "./pages/TaskApp";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="taskapp" element={<TaskApp />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
