import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {COLORS, SIZES, FONTS, ICONS, images} from '../constants';

import routes from '../routes';
import {Search} from '../components/Form';
import {Categories, List} from '../components/Home';

const data = [
  {
    id: '1',
    title: 'Hard Rock Cafe',
    image: images.burger_restaurant_2,
    categotyId: 'Burger',
    delivery: '10.00',
    time: '20-30',
  },
  {
    id: '2',
    title: 'Pizza Hut',
    image: images.pizza_restaurant,
    categotyId: 'Pizza',
    delivery: '12.00',
    time: '60',
  },
  {
    id: '3',
    title: 'Yo-Ku',
    image: images.sushi2,
    categotyId: 'Sushi',
    delivery: 'FREE',
    time: '30-40',
  },
  {
    id: '4',
    title: 'Chick Fille',
    image: images.crispy_chicken_burger,
    categotyId: 'Burger',
    delivery: '15.00',
    time: '15-20',
  },
  {
    id: '5',
    title: 'Noodeli',
    image: images.noodle_shop,
    categotyId: 'Noodel',
    delivery: 'FREE',
    time: '15-20',
  },
];

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{paddingBottom: 50}}>
        <View style={styles.heading}>
          <View>
            <Text style={{...FONTS.h2}}>Hello</Text>
            <Text style={{...FONTS.body2}}>Michal Barski</Text>
          </View>
          <View style={styles.cartIcon}>
            <Image
              source={ICONS.cart}
              style={{tintColor: COLORS.primary, height: 20, width: 20}}
            />
          </View>
        </View>
        <View style={{paddingHorizontal: 20}}>
          <Search placeholder="Search..." />
        </View>
        <Categories />
        <List title="Most popular" data={data} />
        <List title="Newest" data={data} />
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
  heading: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    padding: 20,
  },
  cartIcon: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(29, 191, 115, 0.2)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
