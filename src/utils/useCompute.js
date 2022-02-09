import { 
  useState, 
  useCallback, 
  useRef 
} from "react";

export function useCompute() {
  const [operator, setOperator] = useState("");
  const [displayValue, setDisplayValue] = useState(0);
  const [flag, setFlag] = useState(0);
  const operands = useRef([]);

  const calculateExpression = useCallback(() => {
    operands.current = [operands.current[0], displayValue];
    let x = parseInt(operands.current[0]);
    let y = parseInt(operands.current[1]);
    switch(operator) {
      case "+":
        setDisplayValue(x + y);
        break;
      case "-":
        setDisplayValue(x - y);
        break;
      case "/":
        setDisplayValue(x / y);
        break;
      case "x":
        setDisplayValue(x * y);
        break;
      default:
        throw new Error("Invalid Operator.");
    }
    operands.current = [displayValue];
  }, [displayValue, operator]);

  const parseOperands = useCallback((value) => {
    if (isNaN(value)) return;
    const handleValue = (oldValue) => {
      // Keep in mind, `oldValue` return a string.
      if (oldValue !== 0) {
        return `${oldValue}${value}`;
      }
      return value;
    }

    if (flag) {
      setDisplayValue(0);
      setFlag(0);
    }
    setDisplayValue(handleValue);
  }, [flag]);

  const handleOperators = useCallback((value) => {
    // Shouldn't be allowed to set the operator before the first operand.
    if (displayValue < 1) return;
    // As the user selects an operator, we store the first operand.
    operands.current = [displayValue];
    setOperator(value);
    setFlag(1);
  }, [displayValue]);

  const handleTokens = useCallback((value) => {
    switch(value) {
      case "+":
      case "-":
      case "/":
      case "x":
        handleOperators(value);
        break;
      case "=":
        calculateExpression();
        break;
      case "+/-":
        // setDisplayValue(displayValue * -1);
        break;
      case "AC":
        setDisplayValue(0);
        break;
      case "%":
        break;
      case ".":
        break;
      default:
        parseOperands(value);
    }
  }, [calculateExpression, parseOperands, handleOperators]);

  const getButtonProps = useCallback((props) => {
    const { value } = props;
    const handleOnClick = () => {
      handleTokens(value);
    }

    return {
      ...props,
      onClick: handleOnClick,
    }
  }, [handleTokens]);

  return {
    displayValue,
    getButtonProps
  };
}