import React from "react"
import {
    View,
    Text,
    SafeAreaView,
    Button
} from "react-native"

export const Home = ({ navigation}) => {

    return <SafeAreaView>
        <View>
                <Text> Home </Text>
                <Button title="Go To Details" onPress={()=> navigation.navigate("Details")} /> 
         </View>
    </SafeAreaView>
}