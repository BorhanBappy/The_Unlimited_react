import StarRating from "./Components/StarRating.jsx";
import ListedMovie from "./Components/ListedMovie.jsx";
import TextArea from "./Components/TextArea.jsx";
import CrazyButton from "./Components/Button.jsx";
import ToolBar from "./Components/ToolBar.jsx";
import Popcorn from "./Pages/Popcorn.jsx";
import Composition from "./Components/Composition.jsx";
import Succes from "./Components/Succes.jsx";
function Test() {
  const [ratings, setRating] = useState(0);
  console.log(ratings);
  return (
    <div>
      <StarRating
        maxRating={7}
        color="blue"
        onsetRating={setRating}
        size={30}
      />
      <StarRating maxRating={10} color="green" onsetRating={setRating} />
      <p className=" pl-10">Your Movie Rating is {ratings}</p>
    </div>
  );
}
export default function App() {
  return (
    <div>
      {" "}
      {/* <Test /> */}
      <StarRating
        maxRating={8}
        messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      />
      {/* <StarRating maxRating={5} size={20} color="red" defaultRating={3} /> */}
      {/* <ListedMovie />*/}
      <TextArea />
      {/* <CrazyButton /> */}
      {/* <ToolBar /> */}
      {/* <Popcorn />
      <Composition>
        <Succes />
      </Composition> */}
    </div>
  );
}
