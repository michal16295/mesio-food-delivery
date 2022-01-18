import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';

import {COLORS, FONTS, SIZES, images} from '../../constants';

const data = [
  {
    id: '1',
    title: 'Pizza',
    image: images.pizza,
    count: 10,
  },
  {
    id: '2',
    title: 'Burger',
    image: images.burger,
    count: 20,
  },
  {
    id: '3',
    title: 'Noodle',
    image: images.noodle,
    count: 12,
  },
  {
    id: '4',
    title: 'Sushi',
    image: images.sushi,
    count: 17,
  },
  {
    id: '5',
    title: 'Salad',
    image: images.salad,
    count: 17,
  },
  {
    id: '6',
    title: 'Donut',
    image: images.donut,
    count: 17,
  },
  {
    id: '7',
    title: 'Drinks',
    image: images.drink,
    count: 17,
  },
];

const Categories = () => {
  const [selected, setSelected] = useState(data[0]);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={{
          ...styles.item,
          backgroundColor:
            selected?.id == item.id ? COLORS.primary : COLORS.white,
        }}
        onPress={() => setSelected(item)}>
        <View
          style={{
            ...styles.innerItem,
            color: selected?.id == item.id ? COLORS.white : COLORS.lightGray,
          }}>
          <Image
            source={item.image}
            style={{width: 30, height: 30}}
            resizeMode="contain"
          />
        </View>
        <Text
          style={{
            color: selected.id === item.id ? COLORS.white : COLORS.black,
          }}>
          {item.title}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={{...FONTS.h3}}>Categories</Text>
        <TouchableOpacity style={styles.moreBtn}>
          <Text style={{color: COLORS.white}}>See All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => `${item.id}`}
        renderItem={renderItem}
        contentContainerStyle={{
          paddingVertical: SIZES.padding * 2,
          paddingHorizontal: 20,
        }}
      />
    </View>
  );
};
export default Categories;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
  heading: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  moreBtn: {
    backgroundColor: COLORS.primary,
    padding: 5,
    borderRadius: 7,
  },
  item: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    padding: SIZES.padding,
    paddingBottom: SIZES.padding * 2,
    borderRadius: SIZES.radius,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: SIZES.padding,
  },
  innerItem: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.lightGray,
  },
});
