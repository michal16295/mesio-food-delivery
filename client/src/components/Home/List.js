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
import {Divider} from '../Form';

const List = ({data, title}) => {
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.item}>
        <View style={styles.innerItem}>
          <Image source={item.image} resizeMode="cover" style={styles.img} />
          <View style={styles.textContainer}>
            <Text
              style={{
                color: COLORS.black,
                ...FONTS.caption1,
              }}>
              {item.title}
            </Text>
            <Text
              style={{
                color: COLORS.black,
                ...FONTS.caption2,
              }}>
              {item.categotyId}
            </Text>
          </View>

          <Divider />

          <View style={styles.row}>
            <Text
              style={{
                color: COLORS.black,
                ...FONTS.caption3,
              }}>
              {item.delivery}$
            </Text>
            <Text
              style={{
                color: COLORS.black,
                ...FONTS.caption3,
              }}>
              {item.time} min
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={{...FONTS.h3}}>{title}</Text>
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
export default List;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
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
    borderRadius: SIZES.radius,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: SIZES.padding,
    flex: 1,
  },
  innerItem: {
    width: SIZES.width * 0.5,

    borderRadius: 10,
    backgroundColor: COLORS.lightGray,
    justifyContent: 'space-between',
    display: 'flex',
  },
  img: {
    width: '100%',
    height: 120,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
  },
  textContainer: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
});
