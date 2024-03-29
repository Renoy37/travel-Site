import Footer from "./components/Footer";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Places from "./components/Places";
import SectionA from "./components/SectionA";
import SectionB from "./components/SectionB";
import SectionC from "./components/SectionC";
import SectionD from "./components/SectionD";

function App() {
  return (
    <div>
      <Navbar />
      <SectionA />
      <SectionB />
      <SectionC />
      <SectionD />
      <Places />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
