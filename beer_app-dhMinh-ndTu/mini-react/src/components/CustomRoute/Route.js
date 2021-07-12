import CartProduct from "../CartProduct";
import Login from "../Login"
import PageErr from "../PageErr";
import ProcessProduct from "../ProcessProduct";
import ProductDetails from "../ProductDetails";
import Products from "../Products"
import Register from "../Register"



const routes = [
    {
        path: '/register',
        exact: false,
        privateRoute: false,
        components: <Register />
    },
    {
        path: '/login',
        exact: false,
        privateRoute: false,
        components: <Login />
    },
    {
        path: '/products/:slug',
        exact: false,
        privateRoute: true,
        components: <ProductDetails />
    },
    {
        path: '/cartproduct',
        exact: false,
        privateRoute: true,
        components: <CartProduct />
    },
    {
        path: '/processpro',
        exact: false,
        privateRoute: true,
        components: <ProcessProduct />
    },
    {
        path: '/:slug',
        exact: false,
        privateRoute: true,
        components: <PageErr />
    },
    {
        path: '/',
        exact: true,
        privateRoute: true,
        components: <Products />
    },
]


export default routes