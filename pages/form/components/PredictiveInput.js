import { useState, useEffect, useRef } from 'react';
import {
  Box,
  Grid,
  Flex,
  Text,
  FormControl,
  FormHelperText,
  InputGroup,
  Input,
  InputRightElement,
  useOutsideClick,
} from '@chakra-ui/react';


/**
 * 
 * @param {*} options an Array of the selectable options that will appear in the dropdown list. 
 * @param {*} callback function called with input.value as argument whenever input.value changes.
 * @returns A component that includes an input box with a Search icon and a dropdown list that activates upon focus of the input box.
 */

function PredictiveInput({ options, callback }) {
  const highlightColour = "rgba(229, 239, 245)";
  const borderColour = "#DFDFDF";
  const activeColour = "var(--chakra-colors-blue-500)";

  const [inputValue, setInputValue] = useState(""); // input field's value
  const [selected, setSelected] = useState(-1);     // selected index on droplist
  const [isFocus, setIsFocus] = useState(false);    // is PredictiveInput component in user focus

  useEffect(() => {
    callback(inputValue);
  }, [inputValue])

  useEffect(() => {
    if (!isFocus) setInputToSelected();
  }, [isFocus]);

  const container = useRef();
  useOutsideClick({
    ref: container,
    handler: () => setIsFocus(false)
  });


  const changeHandler = e => {
    setInputValue(e.target.value);
    if (e.target.value.length > 0) {
      const searchTerm = e.target.value.toLowerCase();
      setSelected(options.findIndex(option => option.toLowerCase().includes(searchTerm)));
    }
    else {
      setSelected(null);
    }
  }

  const keyDownHandler = e => {
    setIsFocus(true);
    switch (e.keyCode) {
      case 40: // Down key
        setSelected((selected + 1) % options.length);
        break;
      case 38: // Up key
        setSelected((selected > 0) ? selected - 1 : options.length - 1);
        break;
      case 13: // Enter key
        setIsFocus(false);
        break;
      case 9: // Tab key
        setIsFocus(false);
        break;
    }
  }

  const setInputToSelected = () => {
    if (selected && selected >= 0) setInputValue(options[selected]);
    else if (inputValue) setInputValue("");
  };

  // dropdown list component
  const Dropdown = () => {
    return (
      <Grid border={`1px solid ${borderColour}`} borderRadius="4px" pos="absolute" zIndex={1}>
        {options.map((mode, i) => (
          <Text
            bgColor={(i === selected) ? highlightColour : "white"}
            px={5}
            key={mode}
            cursor="default"
            _hover={{ background: highlightColour }}
            onClick={() => {
              setSelected(i);
              setIsFocus(false);
            }}
          >
            {mode}
          </Text>
        )
        )}
      </Grid>
    )
  };
  // end - dropdown list component

  return (
    <Flex direction="column" ref={container} justifySelf="left" width="280px">
      <FormControl maxWidth="280px">
        <InputGroup>
          <Input
            placeholder="Search travel method"
            autoComplete="off"
            isRequired={true}
            value={inputValue}
            onKeyDown={keyDownHandler}
            onChange={changeHandler}
            onFocus={() => setIsFocus(true)}
            id="predictive-input"
          />
          <InputRightElement>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill={isFocus ? activeColour : borderColour} className="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </InputRightElement>
        </InputGroup>
        {isFocus && <Dropdown />}
        <FormHelperText id="predictive-helper-text">*Required</FormHelperText>
      </FormControl>
    </Flex>
  );
}

export default PredictiveInput;