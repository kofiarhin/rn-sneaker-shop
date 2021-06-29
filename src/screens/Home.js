import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Animated,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import styled from 'styled-components/native';
import Data from '../Data';
import {width} from '../constants/layout';

const Title = styled.Text`
  font-size: 20px;
  text-align: center;
  font-family: Montserrat-bold;
`;
const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

const ItemTitle = styled.Text`
  font-size: 20px;
  text-transform: capitalize;
  font-family: Montserrat-Bold;
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
            }}
            key={item.title}
            onPress={() => navigation.navigate('Items', {item})}>
            <ItemTitle> {item.title} </ItemTitle>
            <Image
              source={item.items[0].images[0]}
              style={{
                width: '100%',
                height: 400,
              }}
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
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <Container>
        {renderHeader()}
        {renderMainPreview(data, navigation)}
      </Container>
    </SafeAreaView>
  );
};
