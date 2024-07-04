import HomePage from "./routes/homePage/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListPage from "./routes/listPage/ListPage";
import SinglePage from "./routes/singlePage/SinglePage";
import Login from "./routes/login/Login";
import Layout from "./routes/layouts/Layout";
import AboutPage from "./routes/aboutPage/AboutPage";
import ProfilePage from "./routes/profilePage/ProfilePage";
import ContactUs from "./routes/contactUs/ContactUs";
import Register from "./routes/register/Register";

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
                {
                    path: "/register",
                    element: <Register />,
                },
                {
                    path: "/about",
                    element: <AboutPage />,
                },
                {
                    path: "/profile",
                    element: <ProfilePage />,
                },
                {
                    path: "/contactus",
                    element: <ContactUs />,
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;
