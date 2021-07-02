import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Animated,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styled from 'styled-components/native';
import Data from '../Data';
import {width, height} from '../constants/layout';
import {DefaultText, Container, Heading} from '../constants';

import {CategoriesPreview} from '../components/CategoriesPreview/CategoriesPreview';

const Title = styled.Text`
  font-size: 20px;
  text-align: center;
  font-family: Montserrat-bold;
`;

const renderHeader = () => {
  return (
    <View>
      <Title> Esco Kicks </Title>
    </View>
  );
};

const renderMainPreview = (data, navigation) => {
  const transformed = Object.values(data);

  return (
    <Animated.ScrollView
      horizontal
      pagingEnabled
      scrollEventThrottle={16}
      showsHorizontalScrollIndicator={false}>
      {transformed.map(item => {
        return (
          <TouchableOpacity
            style={{
              width,
              height: '100%',
            }}
            key={item.title}
            onPress={() => navigation.navigate('Items', {item})}>
            <Heading> {item.title} </Heading>

            <Image
              source={item.items[0].images[0]}
              style={{
                width: '100%',
                height: '100%',
              }}
              resizeMode="cover"
            />
          </TouchableOpacity>
        );
      })}
    </Animated.ScrollView>
  );
};

export const Home = ({navigation}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(Data);
  });

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <ScrollView>
        <Container>
          {renderHeader()}

          <View
            style={{
              height: height * 0.4,
            }}>
            {renderMainPreview(data, navigation)}
          </View>

          {/* categories preview */}
          <View>
            <CategoriesPreview
              title="jordan"
              data={data['jordan']}
              navigation={navigation}
            />
            <CategoriesPreview
              title="adidas"
              data={data['adidas']}
              navigation={navigation}
            />

            <CategoriesPreview
              title="women"
              data={data['women']}
              navigation={navigation}
            />

            <CategoriesPreview
              title="kids"
              data={data['kids']}
              navigation={navigation}
            />
          </View>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};
