import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Button,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {width} from '../constants/layout';

export const Items = ({navigation, route}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(route.params.item);
  }, []);

  const {items, title} = data;

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View
        style={{
          flex: 1,
          padding: 10,
        }}>
        <Text
          style={{
            fontSize: 30,
            textTransform: 'capitalize',
            textAlign: 'center',
          }}>
          {title}
        </Text>

        <FlatList
          key={`_`}
          numColumns={2}
          data={items}
          keyExtractor={item => item.name}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate('Details', {item})}
                style={{
                  width: width * 0.5 - 10,
                  padding: 5,
                }}>
                <Image
                  source={item.images[0]}
                  style={{
                    width: '100%',
                    height: 200,
                  }}
                  resizeMode="contain"
                />
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: 'Montserrat-Bold',
                    }}>
                    {item.name}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />

        <Button title="Go Back" onPress={() => navigation.goBack()} />
      </View>
    </SafeAreaView>
  );
};
