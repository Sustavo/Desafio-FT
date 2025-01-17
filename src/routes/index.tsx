import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Initial from "../pages/Initial";
import Product from "../pages/Product";
import SearchedProducts from "../pages/SearchedProducts";
import ShoppingCar from "../pages/ShoppingCar";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Initial />,
    },
    {
        path: '/product/:id',
        element: <Product />,
    },
    {
        path: '/searchedProducts/:searchQuery',
        element: <SearchedProducts />,
    },
    {
        path: '/shoppingCar',
        element: <ShoppingCar />,
    },
]);


const AppRouter: React.FC = () => {
    return (
        <RouterProvider router={router} />
    );
};

export default AppRouter;


