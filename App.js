import React, { useEffect, useState} from 'react'
import { View, Text, SafeAreaView, Image } from 'react-native';

import Data from "./src/Data"


const App = () => {

    const url = Data.nike.items[0].images[0]



  return (
        <SafeAreaView>

    <Text>Hello Worldxxxx</Text>

    <Image 
    
            source={url}
          style={{
            width: "100%",
            height: 400
          }}
    />

        </SafeAreaView>
  )
}

export default App
