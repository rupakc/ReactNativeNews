import React from 'react';
import {Card, CardItem, Text, Body} from 'native-base';
import {Linking} from 'react-native';

const NewsCard = (props) => {
  return (
    <Card>
      <CardItem header bordered>
        <Text onPress={()=>{Linking.openURL(props.link)}}>{props.cardTitle}</Text>
      </CardItem>
      <CardItem bordered>
        <Body>
          <Text>{props.cardText}</Text>
        </Body>
      </CardItem>
      <CardItem footer bordered>
        <Text onPress={()=>{Linking.openURL(props.link)}}>{props.cardFooter}</Text>
      </CardItem>
    </Card>
  );
}

export default NewsCard;
