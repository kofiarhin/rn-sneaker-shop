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
import {CartContext} from '../services/CartContext';
import {colors} from '../constants';

export const Cart = ({navigation, route}) => {
  const {cartData} = useContext(CartContext);

  const getSummary = cartData => {
    let total = 0;
    cartData.forEach(item => {
      total += item.price;
    });

    return total;
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
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
                <View
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
          <View>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnText}> Place Order</Text>
            </TouchableOpacity>
          </View>
        </View>
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
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
});
