import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView} from 'react-native';

export const Cart = ({navigation, route}) => {
  console.log(route);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const cartItem = route.params.cartItem;
    let newCartData = [...cartData, cartItem];

    setCartData(newCartItem);
  }, []);

  const renderCart = cartData => {};

  return (
    <SafeAreaView>
      <View>
        <Text> {cartData.length} </Text>
      </View>
    </SafeAreaView>
  );
};
