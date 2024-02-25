import "./style/input.css";
import "./App.css";
// components
import MyContainer from "./components/MyContainer/MyContainer";
//
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <meta name="description" content="space web landing page" />
        <meta
          name="keywords"
          content="responsive design, landing page, space web"
        />
        <meta name="author" content="Shadow" />
      </Helmet>
      <MyContainer />
    </>
  );
}
export default App;
