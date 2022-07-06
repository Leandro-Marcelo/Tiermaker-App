import { BrowserRouter, Routes, Route } from "react-router-dom";

import Tiermaker from "./pages/Tiermaker";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Tiermaker />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
