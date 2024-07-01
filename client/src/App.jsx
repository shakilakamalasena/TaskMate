import HomePage from "./routes/homePage/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListPage from "./routes/listPage/ListPage";
import SinglePage from "./routes/singlePage/SinglePage";
import Login from "./routes/login/Login";
import Layout from "./routes/layouts/Layout";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "/",
                    element: <HomePage />,
                },
                {
                    path: "/list",
                    element: <ListPage />,
                },
                {
                    path: "/:id",
                    element: <SinglePage />,
                },
                {
                    path: "/login",
                    element: <Login />,
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;
