import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Button,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {width} from '../constants/layout';
import {colors} from '../constants/colors';
import Icon from 'react-native-vector-icons/Ionicons';

// render sizes

const renderSizes = sizes => {
  return sizes.map((size, index) => {
    return (
      <View key={index} style={{}}>
        <Text
          style={{
            fontSize: 20,
          }}>
          {size}
        </Text>
      </View>
    );
  });
};

// render images
const renderImages = (images, setImgSource, imgIndex, setImgIndex) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginBottom: 20,
      }}>
      {images.map((item, index) => {
        console.log(imgIndex);
        return (
          <TouchableOpacity
            key={index}
            style={{
              width: width / 4 - 20,
              marginRight: 10,
              borderWidth: 2,
              borderRadius: 5,
              borderColor: `${
                imgIndex === index ? colors.grey : 'transparent'
              }`,
            }}
            onPress={() => {
              setImgSource(item);
              setImgIndex(index);
            }}>
            <Image
              source={item}
              style={{
                width: '100%',
                height: 70,
              }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export const Details = ({navigation, route}) => {
  const data = route.params.item;
  const [imgSource, setImgSource] = useState(route.params.item.images[0]);
  const [imgIndex, setImgIndex] = useState(0);
  const [cartData, setCartData] = useState([]);

  const addItemToCart = item => {
    console.log(item);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <ScrollView>
        <View
          style={{
            paddingHorizontal: 20,
          }}>
          {/* go Back */}
          <TouchableOpacity
            style={{
              backgroundColor: 'black',
              borderRadius: 15,
              position: 'absolute',
              left: 10,
              zIndex: 4000,
            }}
            onPress={() => navigation.goBack()}>
            <Icon name="chevron-back-outline" color="white" size={25} />
          </TouchableOpacity>

          {/* item image */}
          <Image
            source={imgSource}
            style={{
              width: '100%',
              height: 400,
              marginTop: 20,
            }}
            resizeMode="contain"
          />

          {/* renderImages */}

          <View>
            {renderImages(data.images, setImgSource, imgIndex, setImgIndex)}
          </View>

          <Text
            style={{
              fontSize: 20,
              fontFamily: 'Montserrat-Bold',
              marginBottom: 10,
            }}>
            {data.name}
          </Text>

          {/* price */}
          <Text
            style={{
              fontSize: 20,
              fontFamily: 'Montserrat-Bold',
              marginBottom: 20,
            }}>
            {' '}
            ${data.price}
          </Text>

          {/* sizes */}
          <Text
            style={{
              fontSize: 20,
            }}>
            Sizes:
          </Text>

          <View
            style={{
              flexDirection: 'row',
              marginBottom: 20,
              alignItems: 'center',
            }}>
            {renderSizes(data.sizes)}
          </View>

          {/* cta - add to cart */}

          <TouchableOpacity
            style={{
              backgroundColor: 'black',
              padding: 20,
              borderRadius: 40,
              marginBottom: 20,
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 15,
                fontFamily: 'Montserrat-Bold',
                marginRight: 10,
              }}>
              Add to Favourite
            </Text>

            <Icon name="heart-outline" size={20} color="white" />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: colors.primary,
              padding: 20,
              borderRadius: 40,
            }}
            onPress={() => navigation.navigate('Cart', {cartItem: data})}>
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
        </View>

        {/* decortive */}
        <View
          style={{
            paddingTop: 100,
          }}></View>
      </ScrollView>
    </SafeAreaView>
  );
};
