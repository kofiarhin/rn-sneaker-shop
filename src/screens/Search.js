import {transform} from '@babel/core';
import React, {useContext} from 'react';
import {View, Text, SafeAreaView, TextInput, StyleSheet} from 'react-native';
import {Searchbar} from 'react-native-paper';
import {DataContext} from '../context/DataContext';

const renderCategories = () => {
  return <Text>Render cat</Text>;
};

export const Search = () => {
  const {data} = useContext(DataContext);
  const values = Object.values(data);

  let transformed = [];

  values.forEach(val => {
    const {items} = val;

    items.forEach(item => {
      console.log(item);
      transformed.push(item);
    });
  });

  // flatten array
  const categories = Object.keys(data);

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View style={styles.container}>
        <View style={styles.spacer}>
          <Searchbar placeholder="Search" />
        </View>

        <View>
          {categories.map(item => {
            return (
              <View>
                <Text style={styles.text}> {item} </Text>
              </View>
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    height: 50,
    marginBottom: 20,
    paddingHorizontal: 20,
    fontSize: 18,
  },
  text: {
    fontSize: 20,
    fontFamily: 'Montserrat-Regular',
    marginBottom: 10,
  },
  spacer: {
    marginBottom: 10,
  },
});
