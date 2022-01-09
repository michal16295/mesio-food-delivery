import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, SafeAreaView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {COLORS, SIZES, FONTS, images} from '../constants';

import routes from '../routes';
import {Button, Input, CheckBox} from '../components/Form';

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

        <Input
          placeholder="johndoe@mail.com"
          val={formData.email}
          func={handleChange}
          title="email"
          icon={images.email}
        />

        <Input
          placeholder="********"
          val={formData.password}
          func={handleChange}
          title="password"
          icon={images.lock}
          secure={true}
        />

        <View style={styles.row}>
          <CheckBox
            handlePress={() => setRememberMe(prev => !prev)}
            text="Remember me"
            display={rememberMe}
          />

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

  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: SIZES.width * 0.75,
    margin: 15,
  },
});
