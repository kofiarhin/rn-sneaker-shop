import React, { useEffect, useState} from 'react'
import { View, Text, SafeAreaView, Image, ScrollView } from 'react-native';
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/Ionicons"
import Data from "./src/Data"


const Title = styled.Text`
    font-family:  Montserrat-Bold;
    font-size: 30px;
`;

const Container = styled.View`
    padding: 20px;
`


const App = () => {

  
  let [data, setData ] = useState(Data);

  useEffect(() => {
    setData(Data)
  }, [])

  return (
        <SafeAreaView>

            <ScrollView>
                   <Container> 

                  <Title> New Content</Title>
                   </Container>
            </ScrollView>
         
        </SafeAreaView>
  )
}

export default App
