import "./App.css";
import IntervalHookCounter from "./Components/UseEffect/IntervalHookCounter";
import HookCounterFour from "./Components/UseState/HookCounerFour";
import HookCounter from "./Components/UseState/HookCounter";
import HookCounterThree from "./Components/UseState/HookCounterThree";
import HookCounterTwo from "./Components/UseState/HookCounterTwo";

function App() {
  return (
    <>
      <HookCounter />
      <br />
      <HookCounterTwo />
      <br />
      <HookCounterThree />
      <br />
      <HookCounterFour />
      <br />
      <IntervalHookCounter />
    </>
  );
}

export default App;
