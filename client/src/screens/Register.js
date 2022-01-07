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

const Register = ({navigation}) => {
  const [formData, setFormData] = useState({
    email: null,
    password: null,
    name: null,
    phone: null,
    secondPassword: null,
  });

  const [tos, setTos] = useState(false);

  const handleChange = (k, val) => {
    setFormData({
      ...formData,
      [k]: val,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <View style={styles.camera}>
          <Image source={images.camera} />
        </View>
        <View style={{...FONTS.body1, ...styles.inputView}}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={formData.email}
            onChangeText={text => handleChange('email', text)}
          />
        </View>
        <View style={{...FONTS.body1, ...styles.inputView}}>
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            value={formData.name}
            onChangeText={text => handleChange('name', text)}
          />
        </View>
        <View style={{...FONTS.body1, ...styles.inputView}}>
          <TextInput
            style={styles.input}
            placeholder="Phone"
            value={formData.phone}
            onChangeText={text => handleChange('phone', text)}
          />
        </View>
        <View style={{...FONTS.body1, ...styles.inputView}}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={formData.password}
            secureTextEntry={true}
            onChangeText={text => handleChange('password', text)}
          />
        </View>
        <View style={{...FONTS.body1, ...styles.inputView}}>
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            value={formData.secondPassword}
            secureTextEntry={true}
            onChangeText={text => handleChange('secondPassword', text)}
          />
        </View>

        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => setTos(prev => !prev)}
            style={styles.checkBox}>
            {tos && <Image source={images.v} />}
          </TouchableOpacity>
          <Text>
            By creating an account you agree to our Terms of Use and Privacy
            Policy
          </Text>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={{...FONTS.body1, color: COLORS.white}}>Sign up</Text>
        </TouchableOpacity>
      </View>

      <Text>
        Already have an account?{' '}
        <Text
          onPress={() => navigation.navigate(routes.LOGIN)}
          style={{...FONTS.caption2, color: COLORS.primary}}>
          Sign In
        </Text>
      </Text>
    </SafeAreaView>
  );
};
export default Register;

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
    marginRight: 5,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
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

  camera: {
    borderRadius: 50,
    width: 99,
    height: 99,
    backgroundColor: COLORS.lightGray,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
