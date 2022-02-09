import { useMemo, useState } from "react";

import { 
  Button,
  Display
} from "./components";

import { 
  Row
} from "./assets/styles";

import { ComputeContext, useCompute } from "./utils";

function App() {

  const { displayValue, getButtonProps } = useCompute();

  const value = useMemo(() => {
    return {
      getButtonProps,
    }
  }, [getButtonProps]);
  
  return (
    <ComputeContext.Provider value={value}>
      <div className="App">
        <Display value={displayValue}/>
        <Row>
          <Button value="AC"/>
          <Button value="+/-"/>
          <Button value="%"/>
          <Button isOperator value="/"/>
        </Row>
        <Row>
          <Button value="7"/>
          <Button value="8"/>
          <Button value="9"/>
          <Button isOperator value="x"/>
        </Row>
        <Row>
          <Button value="4"/>
          <Button value="5"/>
          <Button value="6"/>
          <Button isOperator value="-"/>
        </Row>
        <Row>
          <Button large value="0"/>
          <Button value="."/>
          <Button isOperator value="="/>
        </Row>
      </div>
    </ComputeContext.Provider>
  );
}

export default App;
