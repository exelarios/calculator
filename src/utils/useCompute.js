import { useEffect, useState, useRef, useCallback } from "react";

const initialExpression = {
  operands: [4, 2],
  operator: "+"
}

export function useCompute() {
  const [history, setHistory] = useState([]);
  const [expression, setExpression] = useState(initialExpression);
  const [display, setDisplay] = useState(0);

  const getButtonProps = useCallback((props) => {
    const { value, isOperator } = props;
    const handleOnClick = (event) => {
      if (!isOperator && !isNaN(value)) {
        const handleValue = (oldValue) => {
          // Keep in mind, `oldValue` return a string.
          if (oldValue !== 0) {
            return `${oldValue}${value}`;
          }
          return value;
        }
        setDisplay(handleValue);
      }
    }

    return {
      ...props,
      onClick: handleOnClick
    }
  }, []);

  return {
    displayValue: display,
    getButtonProps
  };
}