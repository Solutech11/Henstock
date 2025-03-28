import { Suspense, lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import ScrollTop from "../components/ScrollTop";

// layouts
import HomepageLayout from "../layouts/homepage";

// config
import { DEFAULT_PATH } from "../config";
import LoadingScreen from "../components/LoadingScreen";
import { ScrollToTopOnPageChange } from "../utils";

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return (
    <>
      <ScrollToTopOnPageChange />
      {useRoutes([
        {
          path: "/",
          element: <HomepageLayout />,
          children: [
            { element: <Navigate to={DEFAULT_PATH} replace /> },
            { path: "/", element: <Homepage /> },
            { path: "/about", element: <About /> },
            { path: "/contact", element: <Contact /> },
            { path: "/services", element: <Services /> },
            { path: "/products/sesame-seeds", element: <Sesame /> },
            { path: "/products/cashew-nut", element: <Cashew /> },
            { path: "/products/cassia-tora", element: <Cassia /> },
            { path: "/products/neem-seeds", element: <Neem /> },
            { path: "/products/dried-ginger", element: <Ginger /> },
            { path: "/products/cocoa", element: <Cocoa /> },
            { path: "/products/soya-beans", element: <Soya /> },

            { path: "404", element: <Page404 /> },
            { path: "*", element: <Navigate to="/404" replace /> },
          ],
        },
        { path: "*", element: <Navigate to="/404" replace /> },
      ])}
      <ScrollTop />
    </>
  );
}

const Homepage = Loadable(lazy(() => import("../pages/Homepage")));
const About = Loadable(lazy(() => import("../pages/About")));
const Services = Loadable(lazy(() => import("../pages/Services")));
const Contact = Loadable(lazy(() => import("../pages/Contact")));
const Sesame = Loadable(lazy(() => import("../pages/products/Sesame")));
const Cashew = Loadable(lazy(() => import("../pages/products/Cashaw")));
const Cassia = Loadable(lazy(() => import("../pages/products/Cassia")));
const Neem = Loadable(lazy(() => import("../pages/products/Neem")));
const Ginger = Loadable(lazy(() => import("../pages/products/Ginger")));
const Cocoa = Loadable(lazy(() => import("../pages/products/Cocoa")));
const Soya = Loadable(lazy(() => import("../pages/products/Soya")));

const Page404 = Loadable(lazy(() => import("../pages/Page404")));
