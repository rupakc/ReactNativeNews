import React from 'react';
import {Button, Text} from 'native-base';

const CustomButton = (props) => {
  return (
    <Button rounded success onPress={props.handleClick}>
     <Text> {props.buttonText} </Text>
    </Button>
  );
}

export default CustomButton;
