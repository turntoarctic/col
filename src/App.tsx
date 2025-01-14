import "./App.css";
import Layout from "./layout/layout";
import { Outlet } from "react-router";

function App() {
  return (
    <main className="w-screen h-screen">
      <Layout>
        <Outlet></Outlet>
      </Layout>
    </main>
  );
}

export default App;
