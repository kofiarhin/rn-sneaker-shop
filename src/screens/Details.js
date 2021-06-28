import React from "react"
import {
    View,
    Text,
    SafeAreaView,
    Button
} from "react-native"

export const Details = ({ navigation}) => {

    return <SafeAreaView>
        <View> 
        <Text>Details Screen</Text>
        <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
    </SafeAreaView>
}