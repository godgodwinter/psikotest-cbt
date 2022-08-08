import { Outlet, ReactLocation, Router } from "@tanstack/react-location";
import routes from "@/routes/indexRoutes";
const location = new ReactLocation();
function App() {
  return (
    <>
      <div>
        <Router location={location} routes={routes}>
          <div data-theme="winter">
            <Outlet />
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
