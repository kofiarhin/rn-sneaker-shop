import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {AuthContext} from '../../context/AuthContext';
export const UserProfile = () => {
  const {user, setUser} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={[styles.text, {textAlign: 'center'}]}>
        {' '}
        Welcome {user.name}{' '}
      </Text>

      {/* logout */}
      <TouchableOpacity style={styles.btn} onPress={() => setUser(null)}>
        <Text style={styles.btnText}> Logout </Text>
      </TouchableOpacity>
    </View>
  );
};

// transform globlal styling later
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  text: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 20,
    marginBottom: 20,
  },
  btn: {
    backgroundColor: 'black',
    paddingVertical: 20,
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
  },
});
