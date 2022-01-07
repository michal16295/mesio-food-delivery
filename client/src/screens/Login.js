import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TextInput,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {COLORS, SIZES, FONTS, images} from '../constants';

import routes from '../routes';
import {Button} from '../components/Form';

const Login = ({navigation}) => {
  const [formData, setFormData] = useState({
    email: null,
    password: null,
  });

  const [rememberMe, setRememberMe] = useState(false);

  const handleChange = (k, val) => {
    setFormData({
      ...formData,
      [k]: val,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <Text style={{...FONTS.h1, color: COLORS.primary}}>Login</Text>
        <Text style={{...FONTS.body2}}>Sign in to continue</Text>
        <View style={{...FONTS.body1, ...styles.inputView}}>
          <View style={{flex: 0.15}}>
            <Image source={images.email} />
          </View>
          <TextInput
            style={styles.input}
            placeholder="johndoe@mail.com"
            value={formData.email}
            onChangeText={text => handleChange('email', text)}
          />
        </View>
        <View style={{...FONTS.body1, ...styles.inputView}}>
          <View style={{flex: 0.15}}>
            <Image source={images.lock} />
          </View>
          <TextInput
            style={styles.input}
            placeholder="*********"
            value={formData.password}
            secureTextEntry={true}
            onChangeText={text => handleChange('password', text)}
          />
        </View>
        <View style={styles.row}>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => setRememberMe(prev => !prev)}
              style={styles.checkBox}>
              {rememberMe && <Image source={images.v} />}
            </TouchableOpacity>
            <Text>Remember me</Text>
          </View>

          <Text style={{color: COLORS.yellow}}>Forgot password?</Text>
        </View>
        <Button text="Sign in" color={COLORS.primary} />
      </View>

      <Text>
        Don't have an account yet?{' '}
        <Text
          onPress={() => navigation.navigate(routes.REGISTER)}
          style={{...FONTS.caption2, color: COLORS.primary}}>
          Sign Up
        </Text>
      </Text>
    </SafeAreaView>
  );
};
export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  inner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  checkBox: {
    backgroundColor: COLORS.primary,
    height: 16,
    width: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    marginRight: 3,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: SIZES.width * 0.75,
    margin: 15,
  },
  button: {
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    width: SIZES.width * 0.8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },

  inputView: {
    margin: 10,
    borderRadius: 10,
    width: SIZES.width * 0.8,
    backgroundColor: COLORS.lightGray,
    padding: 13,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  input: {
    flex: 1,
  },
});
