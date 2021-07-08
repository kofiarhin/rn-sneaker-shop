import {transform} from '@babel/core';
import React, {useContext} from 'react';
import {View, Text, SafeAreaView, TextInput, StyleSheet} from 'react-native';
import {Searchbar} from 'react-native-paper';
import {DataContext} from '../context/DataContext';
import {Categories} from '../components/Categories/Categories.component';

const renderCategories = () => {
  return <Text>Render cat</Text>;
};

export const Search = otherProps => {
  const {data} = useContext(DataContext);
  const values = Object.values(data);

  // flatten array
  const flattenArray = data => {
    let transformed = [];

    data.forEach(item => {
      const {items} = item;

      items.forEach(item => {
        transformed.push(item);
      });
    });

    return transformed;
  };

  let transformed = flattenArray(values);

  // flatten array
  const categoriesData = Object.keys(data);

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
          <Categories data={categoriesData} {...otherProps} />
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
