import { Suspense, lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";

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
            { path: "", element: <Homepage />},
            { path: "about", element: <About />},        
            { path: "contact", element: <Contact />},
            { path: "services", element: <Services />},
            { path: "404", element: <Page404 /> },
            { path: "*", element: <Navigate to="/404" replace /> },
          ],
        },
        { path: "*", element: <Navigate to="/404" replace /> },
      ])}
    </>
  );
}

const Homepage = Loadable(
  lazy(() => import("../pages/Homepage")),
);
const About = Loadable(
  lazy(() => import("../pages/About")),
);
const Services = Loadable(
  lazy(() => import("../pages/Services")),
);
const Contact = Loadable(
  lazy(() => import("../pages/Contact")),
);
const Page404 = Loadable(lazy(() => import("../pages/Page404")));
