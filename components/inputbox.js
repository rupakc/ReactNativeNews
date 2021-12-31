import React from 'react';
import {Content, Item, Input } from 'native-base';

const InputBox = (props) => {
    return (
          <Item rounded>
            <Input placeholder={props.placeholder} onChangeText={props.textChangeHandler} />
          </Item>
    );
}

export default InputBox
