import HomePage from "./routes/homePage/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListPage from "./routes/listPage/ListPage";
import SinglePage from "./routes/singlePage/SinglePage";
import Login from "./routes/login/Login";
import { Layout, RequireAuth } from "./routes/layouts/Layout";
import AboutPage from "./routes/aboutPage/AboutPage";
import ProfilePage from "./routes/profilePage/ProfilePage";
import ContactUs from "./routes/contactUs/ContactUs";
import Register from "./routes/register/Register";
import ProfileUpdatePage from "./routes/profileUpdatePage/ProfileUpdatePage";
import NewPostPage from "./routes/newPostPage/NewPostPage";
import {
    listPageLoader,
    singlePageLoader,
    profilePageLoader,
} from "./lib/loaders";

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
                    loader: listPageLoader,
                },
                {
                    path: "/:id",
                    element: <SinglePage />,
                    loader: singlePageLoader,
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
                    path: "/contactus",
                    element: <ContactUs />,
                },
            ],
        },
        {
            path: "/",
            element: <RequireAuth />,
            children: [
                {
                    path: "/profile",
                    element: <ProfilePage />,
                    loader: profilePageLoader,
                },
                {
                    path: "/profile/update",
                    element: <ProfileUpdatePage />,
                },
                {
                    path: "/add",
                    element: <NewPostPage />,
                },
            ],
        },
    ]);

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
