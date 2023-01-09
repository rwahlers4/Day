import { Routes, Route} from "react-router-dom"
import { Container } from "react-bootstrap";
import { Home } from "./pages/home"
import { Summary } from "./pages/summary"

function App() {
  return (
    <Container>
      <Routes>
        <Route path = "/home" element = {<Home/>}/>
        <Route path = "/summary" element = {<Summary/>}/>
      </Routes>
    </Container>
  );
}

export default App;
