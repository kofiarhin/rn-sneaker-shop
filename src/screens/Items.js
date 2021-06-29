import React, {
    useEffect,
    useState
} from "react"
import {
    View,
    Text,
    SafeAreaView,
    Button,
    
} from "react-native"

export const Items = ({ navigation, route }) => {

    const [ data, setData] = useState([])

    useEffect(() => {

                const items = route.params;

                setData(items)
    }, [])

    return <SafeAreaView>
        <View> 
        <Text>Items Screen</Text>
        <Button title="Go Back" onPress={() =>  navigation.goBack()}/>
    </View>
    </SafeAreaView>
}