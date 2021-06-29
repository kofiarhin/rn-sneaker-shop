import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import {width} from '../constants/layout';

export const Details = ({navigation, route}) => {
  const data = route.params.item;
  return (
    <SafeAreaView>
      <View
        style={{
          padding: 20,
        }}>
        <Image
          source={data.images[0]}
          style={{
            width: width,
            height: 400,
          }}
          resizeMode="contain"
        />

        <Text
          style={{
            fontSize: 20,
            fontFamily: 'Montserrat-Bold',
            marginBottom: 10,
          }}>
          {' '}
          {data.name}{' '}
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontFamily: 'Montserrat-Bold',
          }}>
          {' '}
          ${data.price}
        </Text>

        {/* render sizes */}

        <TouchableOpacity
          style={{
            backgroundColor: 'black',
            padding: 20,
          }}>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontSize: 15,
              fontFamily: 'Montserrat-Bold',
            }}>
            Add to Cart
          </Text>
        </TouchableOpacity>

        {/* transform into a floating button */}
        <Button title="Go Back" onPress={() => navigation.goBack()} />
      </View>
    </SafeAreaView>
  );
};
