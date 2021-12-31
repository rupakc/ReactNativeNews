import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,View} from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body } from "native-base";
import InputBox from './components/inputbox.js';
import CustomButton from './components/button.js';
import {useEffect, useState} from "react";
import NewsCard from './components/card.js';
import useFetch from './components/fetchHook.js';
import parseNewsArticles from './parse/parsenews.js';

export default function App() {
  const [searchText, setSearchText] = useState("");
  const [dataList, setDataList] = useState([]);
  const [{ data, isLoading, isError }, setUrl] = useFetch("");
  const handleTextChange = (text) => {
    setSearchText(text);
  };
  const baseUrl = "http://newsapi.org/v2/everything?apiKey=1cae75bc848e4056878432e5ae3fdb31&q="
  const clickHandler = () => {
    let url = baseUrl;
    if (searchText === "") {
      url = url + "a";
    } else {
      url = url + encodeURIComponent(searchText);
    }
    setDataList([]);
    //alert(url);
    setUrl(url);
  }
  useEffect(()=> {
    let parsedDataList = parseNewsArticles(data);
    setDataList(parsedDataList);
  },[data]);

  const cardDataList = [
    {title:"Is Preemptive Pardoning a Real Thing a President Can Do?",
    text:"The second the clock strikes noon on January 20, 2021, Donald Trump will no longer be the sitting president, but a man standing before an unprecedented set of legal issues. Staggering debts to a foreign bank and looming investigations from the New York Attorn…",
    footer:"Sam Blum"},
    {title:"Is Preemptive Pardoning a Real Thing a President Can Do?",
    text:"The second the clock strikes noon on January 20, 2021, Donald Trump will no longer be the sitting president, but a man standing before an unprecedented set of legal issues. Staggering debts to a foreign bank and looming investigations from the New York Attorn…",
    footer:"Sam Blum"},
    {title:"Is Preemptive Pardoning a Real Thing a President Can Do?",
    text:"The second the clock strikes noon on January 20, 2021, Donald Trump will no longer be the sitting president, but a man standing before an unprecedented set of legal issues. Staggering debts to a foreign bank and looming investigations from the New York Attorn…",
    footer:"Sam Blum"},
    {title:"Is Preemptive Pardoning a Real Thing a President Can Do?",
    text:"The second the clock strikes noon on January 20, 2021, Donald Trump will no longer be the sitting president, but a man standing before an unprecedented set of legal issues. Staggering debts to a foreign bank and looming investigations from the New York Attorn…",
    footer:"Sam Blum"}
  ];

    return (
      <Container>
        <Header />
        <Text> {'\n'} </Text>
        <InputBox placeholder="Enter a search term" textChangeHandler={handleTextChange}/>
        <Text>{'\n'}</Text>
        <View style={{display:"flex", justifyContent:"center", marginLeft:"auto", marginRight:"auto"}}>
          <CustomButton buttonText="Search" handleClick={clickHandler}/>
        </View>
        <Content padder>
          {dataList.map((value,index) => <NewsCard key={index} cardTitle={value.title}
          cardText={value.text} cardFooter={value.footer} link={value.url}/>
        )}
        </Content>

      </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
