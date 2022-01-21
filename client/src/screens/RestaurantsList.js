import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  FlatList,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {COLORS, SIZES, FONTS, ICONS, images} from '../constants';

import routes from '../routes';
import {Divider, Stars} from '../components/Form';
import Svg, {Path} from 'react-native-svg';

const RestaurantsList = ({route, navigation}) => {
  const {title, orderBy, data} = route.params;

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.item} onPress={() => setSelected(item)}>
        <View style={styles.innerItem}>
          <Image source={item.image} resizeMode="cover" style={styles.img} />
        </View>
        <View style={styles.content}>
          <View style={styles.row}>
            <View>
              <Text style={{...FONTS.caption1}}>{item.title}</Text>
              <Text style={{...FONTS.caption2}}>{item.categotyId}</Text>
            </View>
            <View style={styles.timeContainer}>
              <Text
                style={{
                  fontSize: 12,
                  color: COLORS.primary,
                  textAlign: 'center',
                }}>
                {item.time}
              </Text>
              <Text
                style={{
                  fontSize: 8,
                  color: COLORS.primary,
                  textAlign: 'center',
                }}>
                Min
              </Text>
            </View>
          </View>

          <Divider />

          <View style={{...styles.row, padding: 5}}>
            <View
              style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Text style={{...FONTS.caption2, color: COLORS.darkgray}}>
                {item.delivery === 'FREE' ? item.delivery : `${item.delivery}$`}
              </Text>
              <Image
                source={ICONS.box}
                style={{marginLeft: 5, width: 15, tintColor: COLORS.darkgray}}
                resizeMode="contain"
              />
            </View>
            <Stars total={item.rating} size={10} />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <Text style={{...FONTS.h1}}>{title}</Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={item => `${item.id}`}
        renderItem={renderItem}
        contentContainerStyle={{
          paddingHorizontal: 20,
        }}
      />
    </SafeAreaView>
  );
};
export default RestaurantsList;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: COLORS.mediumGray,
    flex: 1,
  },
  inner: {
    padding: 20,
    display: 'flex',
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
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'space-between',
    flex: 1,
    backgroundColor: COLORS.white,
    marginBottom: 20,
  },
  innerItem: {
    width: SIZES.width * 0.9,
  },
  img: {
    width: '100%',
    height: 180,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
  },
  content: {
    paddingTop: 10,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },

  timeContainer: {
    borderRadius: 5,
    backgroundColor: COLORS.lightGray,
    padding: 5,
    color: COLORS.primary,
    textAlign: 'center',
    width: 50,
  },
});
