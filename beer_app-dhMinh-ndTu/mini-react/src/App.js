import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

// import Register from './components/Register';

// import Login from './components/Login';

// import Products from './components/Products';

// import ProductDetails from './components/ProductDetails';

// import AddProduct from './components/AddProduct';

// import ProcessProduct from './components/ProcessProduct';

// import CartProduct from './components/CartProduct';

// import PageErr from './components/PageErr';

import PrivateRoute from './components/PrivateRoute';


import routes from './components/CustomRoute/Route'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AuthAdminLogin from './components/AuthAdminLogin';

function App() {
  return (
    <div className="App">

      {/* <QueryClientProvider client={queryClient} contextSharing={true}> */}
      <Router>
        <Switch>
          {routes.map((route, indexRoute) => {

            if (route.privateRoute) {
              return (
                <PrivateRoute key={indexRoute} exact={route.exact} path={route.path}>
                  {route.components}
                </PrivateRoute>
              )
            }
            else if (route.authLogin) {
              return (
                <AuthAdminLogin key={indexRoute} exact={route.exact} path={route.path}>
                  {route.components}
                </AuthAdminLogin>
              )
            }
            else {
              return (
                <Route key={indexRoute} path={route.path} exact={route.exact}>
                  {route.components}
                </Route>
              )
            }
          }

          )}
          {/*
            <Route
              path="/products/:slug"
              render={({ match }, ...rest) => {
                return <ProductDetails rest={rest} match={match} />;
              }}
            />
            <Route path='/register' >
              <Register />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            <PrivateRoute exact path="/">
              <Products />
            </PrivateRoute>
            <PrivateRoute exact path="/products">
              <Products />
            </PrivateRoute>
            <PrivateRoute path="/addpro">
              <AddProduct />
            </PrivateRoute>
            <PrivateRoute path="/cartproduct">
              <CartProduct />
            </PrivateRoute>
            <PrivateRoute user={user} path="/processpro">
              <ProcessProduct handleUpdateState={handleUpdateState} handleClick={handleClick} />
            </PrivateRoute>
            <Route path="/:slug">
              <PageErr />
            </Route> */}
        </Switch>
      </Router>
      {/* </QueryClientProvider> */}

    </div>
  );
}

export default App;







