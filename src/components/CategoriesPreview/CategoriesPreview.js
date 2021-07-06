import React, {useEffect, useState} from 'react';
import {View, Text, Image, Animated, TouchableOpacity} from 'react-native';
import {width, SubHeading} from '../../constants';

export const CategoriesPreview = ({title, data, navigation}) => {
  return data ? (
    <View
      style={{
        marginBottom: 20,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <SubHeading> {title} </SubHeading>

        <TouchableOpacity
          onPress={() => navigation.navigate('Items', {item: data})}>
          <Text
            style={{
              fontSize: 15,
              fontFamily: 'Montserrat-Bold',
            }}>
            See All
          </Text>
        </TouchableOpacity>
      </View>
      <Animated.ScrollView horizontal>
        {data.items.map(item => {
          return (
            <TouchableOpacity
              key={item.name}
              onPress={() => navigation.navigate('Details', {item})}>
              <Image
                source={item.images[0]}
                style={{
                  width: width * 0.4,
                  height: 250,
                  marginRight: 20,
                }}
                resizeMode="contain"
              />
            </TouchableOpacity>
          );
        })}
      </Animated.ScrollView>
    </View>
  ) : null;
  //   return (
  //
  //   );
};
