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

  return (
    <SafeAreaView>
      <ScrollView>
        {/* container */}
        <View style={styles.container}>
          {cartData.length > 0 ? (
            <View>
              {/* cart header */}
              <Text
                style={{
                  fontSize: 30,
                  textAlign: 'center',
                  marginBottom: 20,
                }}>
                {' '}
                Your Cart{' '}
              </Text>

              {
                // render Cart Content
                cartData.map((item, index) => {
                  return (
                    <TouchableOpacity
                      onPress={() => navigation.navigate('Details', {item})}
                      key={index}
                      style={{
                        flexDirection: 'row',
                      }}>
                      <Image
                        source={item.images[0]}
                        style={{
                          width: 200,
                          height: 200,
                        }}
                      />

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
                            }}>
                            ${item.price}
                          </Text>

                          <Text
                            style={{
                              fontSize: 18,
                            }}>
                            Qty: {item.qty}{' '}
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
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
                <TouchableOpacity
                  style={styles.btn}
                  onPress={() => setCartData([])}>
                  <Text style={styles.btnText}> Place Order</Text>
                </TouchableOpacity>

                {/* clear cart */}
                <TouchableOpacity
                  style={[
                    styles.btn,
                    {
                      backgroundColor: 'red',
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
              <Text
                style={{
                  fontSize: 20,
                  textAlign: 'center',
                }}>
                {' '}
                Your Cart is empty
              </Text>
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
    borderRadius: 30,
    paddingVertical: 20,
    marginBottom: 20,
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
});
