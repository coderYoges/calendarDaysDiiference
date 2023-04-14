import "./styles.css";
import { differenceInCalendarDays } from "date-fns";

export default function App() {
  return (
    <div className="App">
      <h1>Hello Coders</h1>
      <h2>Start editing to see some magic happen!</h2>

      {JSON.stringify(
        differenceInCalendarDays(new Date(2007, 5, 1), new Date())
      )}
    </div>
  );
}
