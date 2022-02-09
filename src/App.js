import { 
  Button 
} from "./components";

import { 
  Row 
} from "./assets/styles";

function App() {
  return (
    <div className="App">
      <Row>
        <Button value="AC"/>
        <Button value="+/-"/>
        <Button value="%"/>
        <Button value="/"/>
      </Row>
      <Row>
        <Button value="7"/>
        <Button value="8"/>
        <Button value="9"/>
        <Button value="x"/>
      </Row>
      <Row>
        <Button value="4"/>
        <Button value="5"/>
        <Button value="6"/>
        <Button value="-"/>
      </Row>
      <Row>
        <Button large value="0"/>
        <Button value="."/>
        <Button value="="/>
      </Row>
    </div>
  );
}

export default App;
