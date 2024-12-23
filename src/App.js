import "./App.css";
import Comparison from "./components/Comparison";
import CovidClass from "./components/CovidClass";
import FormClass from "./components/FormClass";
import HeroClass from "./components/HeroClass";
import HomeClass from "./components/HomeClass";
import Layout from "./components/Layout";
import ProfessionClass from "./components/ProfessionClass";
import ResourcesClass from "./components/ResourcesClass";
import ServiceClass from "./components/ServiceClass";

function App() {
  return (
    <div className="App">
      <Layout>
        <HeroClass />
        <ServiceClass />
        <Comparison />
        <ProfessionClass />
        <CovidClass />
        <HomeClass />
        <ResourcesClass />
        <FormClass />
      </Layout>
    </div>
  );
}

export default App;
