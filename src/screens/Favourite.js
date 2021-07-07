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
              <Text
                style={[
                  styles.text,
                  {
                    marginBottom: 20,
                  },
                ]}>
                {' '}
                Saved Items
              </Text>
              {favData.map((item, index) => {
                return (
                  <View>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('Details', {item})}
                      style={{
                        marginBottom: 20,
                        flexDirection: 'row',
                      }}
                      key={index}>
                      {/* iamge wrapper */}
                      <View>
                        <Image
                          source={item.images[0]}
                          style={{
                            width: 200,
                            height: 200,
                          }}
                        />
                      </View>

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
                          <Text
                            style={{
                              fontSize: 15,
                              marginBottom: 10,
                              fontFamily: 'Montserrat-Regular',
                            }}>
                            {' '}
                            {item.name}
                          </Text>
                        </View>
                        <Text
                          style={{
                            fontSize: 15,
                            fontFamily: 'Montserrat-Bold',
                          }}>
                          {' '}
                          ${item.price}{' '}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
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
    borderRadius: 50,
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 15,
    fontFamily: 'Montserrat-Bold',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
});
