import { reviews } from "./data";
import "./index.css";
import Testimonals from "./components/Testimonals";
function App() {
  return (
    <div className="bg-gray-300 min-h-screen flex flex-col justify-center items-center">
      <div className="text-center">
        <h4 className="font-bold text-2xl">Our Testimonials</h4>
        <div className="h-[5px] w-[1/10] bg-violet-600 text-center"></div>
        <Testimonals reviews={reviews} />
      </div>
    </div>
  );
}

export default App;

