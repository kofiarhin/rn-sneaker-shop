import React, { useEffect, useState} from 'react'
import { View, Text, SafeAreaView, Image, ScrollView } from 'react-native';
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/Ionicons"
import Data from "./src/Data"


import { PreviewUnits } from "./src/components/preview-units.component";


const App = () => {

  
  let [data, setData ] = useState(Data);

  useEffect(() => {
    setData(Data)
  }, [])

  return (
        <SafeAreaView>

            <ScrollView>
               <PreviewUnits data={data} type="women"/>
               <PreviewUnits data={data} type="jordan"/>
               <PreviewUnits data={data} type="kids"/>
               <PreviewUnits data={data} type="nike"/>
               <PreviewUnits data={data} type="adidas"/>
            </ScrollView>
         
        </SafeAreaView>
  )
}

export default App
