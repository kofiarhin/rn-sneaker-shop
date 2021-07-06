import React, {useContext} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {FavouriteContext} from '../context/FavouriteContext';

export const Favourite = ({navigation}) => {
  const {favData, setFavData} = useContext(FavouriteContext);

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <ScrollView>
        <View style={styles.container}>
          {favData.length > 0 ? (
            <View>
              {favData.map((item, index) => {
                return (
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Details', {item})}
                    style={{
                      marginBottom: 20,
                    }}
                    key={index}>
                    <Image
                      source={item.images[0]}
                      style={{
                        width: '100%',
                        height: 200,
                      }}
                    />
                    <Text
                      style={{
                        fontSize: 18,
                        marginBottom: 10,
                      }}>
                      {' '}
                      {item.name}{' '}
                    </Text>
                    <Text
                      style={{
                        fontSize: 20,
                        fontFamily: 'Montserrat-Bold',
                      }}>
                      {' '}
                      Qty: {item.qty}{' '}
                    </Text>
                  </TouchableOpacity>
                );
              })}

              {/* clear fav */}
              <TouchableOpacity
                style={styles.btn}
                onPress={() => setFavData([])}>
                <Text style={styles.btnText}> Clear Favourite </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View>
              <Text style={styles.text}>You have not saved any item yet!</Text>
            </View>
          )}
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
  btn: {
    backgroundColor: 'black',
    paddingVertical: 20,
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
});
