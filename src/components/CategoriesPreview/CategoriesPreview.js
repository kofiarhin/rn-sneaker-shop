import React, {useEffect, useState} from 'react';
import {View, Text, Image, Animated, TouchableOpacity} from 'react-native';
import {width, SubHeading} from '../../constants';

export const CategoriesPreview = ({title, data, navigation}) => {
  return data ? (
    <View
      style={{
        marginBottom: 20,
      }}>
      <SubHeading> {title} </SubHeading>
      <Animated.ScrollView horizontal>
        {data.items.map(item => {
          return (
            <TouchableOpacity
              key={item.name}
              onPress={() => navigation.navigate('Details', {item})}>
              <Image
                source={item.images[0]}
                style={{
                  width,
                  height: 300,
                }}
                resizeMode="cover"
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
