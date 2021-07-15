import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {CartContext} from '../context/CartContext';
import {colors} from '../constants';
import Icon from 'react-native-vector-icons/Ionicons';

export const Cart = ({navigation, route}) => {
  const {cartData, setCartData} = useContext(CartContext);

  const getSummary = cartData => {
    console.log({cartData});
    let total = 0;
    cartData.forEach(item => {
      total += item.price * item.qty;
    });

    return total;
  };

  const increaseQty = item => {
    const filtered = cartData.find(cartItem => cartItem.name === item.name);

    if (filtered) {
      filtered.qty += 1;
    }

    setCartData([...cartData]);
  };

  const reduceQty = item => {
    const filtered = cartData.find(cartItem => cartItem.name === item.name);

    if (filtered && filtered.qty > 1) {
      filtered.qty -= 1;
      setCartData([...cartData]);
    } else if (filtered.qty === 1) {
      const newCartData = cartData.filter(
        cartItem => cartItem.name !== item.name,
      );

      setCartData([...newCartData]);
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        {/* container */}
        <View style={styles.container}>
          {cartData.length > 0 ? (
            <View>
              {/* cart header */}
              <Text style={styles.heading}> Your Cart </Text>

              {
                // render Cart Content
                cartData.map((item, index) => {
                  return (
                    <View
                      key={index}
                      style={{
                        flexDirection: 'row',
                      }}>
                      <TouchableOpacity
                        onPress={() => navigation.navigate('Details', {item})}>
                        <Image
                          source={item.images[0]}
                          style={{
                            width: 200,
                            height: 200,
                          }}
                        />
                      </TouchableOpacity>

                      {/* text wrapper */}
                      <View
                        style={{
                          flex: 1,
                        }}>
                        {/* item info */}
                        <View
                          style={{
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                          }}>
                          {/* item name */}
                          <Text
                            style={{
                              fontSize: 15,
                              marginBottom: 10,
                            }}>
                            {' '}
                            {item.name}
                          </Text>
                        </View>

                        <View>
                          <Text
                            style={{
                              fontSize: 18,
                              marginBottom: 10,
                            }}>
                            ${item.price}
                          </Text>

                          {/* qty cta */}
                          <View
                            style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              width: 60,
                              height: 50,
                            }}>
                            <TouchableOpacity onPress={() => reduceQty(item)}>
                              <Text style={[styles.text, {fontSize: 20}]}>
                                -
                              </Text>
                            </TouchableOpacity>
                            <Text style={styles.text}>{item.qty} </Text>

                            <TouchableOpacity onPress={() => increaseQty(item)}>
                              <Text style={[styles.text, {fontSize: 20}]}>
                                +
                              </Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                      </View>
                    </View>
                  );
                })
              }

              {/* order summary */}
              <View>
                <View>
                  <Text style={styles.summary}>Order Summary</Text>
                </View>

                {/* sub total */}
                <View style={styles.row}>
                  <Text style={styles.subTotal}>Sub Total</Text>
                  <Text style={styles.subTotal}> $0</Text>
                </View>

                {/* total */}

                {/* total */}
                <View style={styles.row}>
                  <Text style={styles.total}> Total</Text>
                  <Text style={styles.total}> ${getSummary(cartData)} </Text>
                </View>
              </View>

              {/* place order - note changed design concept to show bottom tab indicator instead */}

              {/* cta */}
              <View>
                {/* place order */}

                {/* redirect to success screen  and clear cart */}
                <TouchableOpacity
                  style={styles.btn}
                  onPress={() => navigation.navigate('Success')}>
                  <Text style={styles.btnText}> Place Order</Text>
                </TouchableOpacity>

                {/* clear cart */}
                <TouchableOpacity
                  style={[
                    styles.btn,
                    {
                      backgroundColor: '#CF0000',
                    },
                  ]}
                  onPress={() => setCartData([])}>
                  <Text style={styles.btnText}> Clear Cart</Text>
                </TouchableOpacity>
              </View>
              {/* end cta */}
            </View>
          ) : (
            <View>
              <Text style={styles.heading}> Your Cart is empty</Text>
            </View>
          )}
        </View>
        {/* end container */}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  summary: {
    fontSize: 20,
    fontFamily: 'Montserrat-Bold',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  subTotal: {
    fontSize: 18,
    fontFamily: 'Montserrat-Regular',
  },
  total: {
    fontSize: 25,
    fontFamily: 'Montserrat-Bold',
  },
  btn: {
    backgroundColor: colors.primary,
    paddingVertical: 20,
    marginBottom: 20,
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },

  text: {
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
  },
  heading: {
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
    fontSize: 20,
    textTransform: 'capitalize',
    marginBottom: 20,
  },
});
