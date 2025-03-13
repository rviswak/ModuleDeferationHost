import ReactDOM from "react-dom/client";
import ButtonAppBar from "./AppBar";
import "./index.css";
import Counter  from "remote/Counter";
import MediaCard from "remote/ImgMediaCard";
import ApiCollection from "remote/ApiCollection";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <ButtonAppBar />
      I am hosting Counter from remote
     <Counter />
     i am Hosting MediaCard from remote, which is used to display pdf and description.
     These Media cards can be updated from remote.
     <MediaCard title="SAPi's" description="SAPi  is used to get data" />
     <MediaCard title="MediaCard" description="MediaCard is used to  description" />
     <ApiCollection />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);