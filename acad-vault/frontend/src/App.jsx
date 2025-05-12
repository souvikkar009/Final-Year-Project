import { RouterProvider } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import { AuthProvider } from "./routes/AuthContext";

function App() {
    return (
        <AuthProvider>
            <RouterProvider router={AppRouter} />
        </AuthProvider>
    );
}
export default App;
