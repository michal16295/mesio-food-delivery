import React, {useState, useEffect, useCallback} from 'react';
import {Image, StyleSheet, Platform} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import * as ImagePicker from 'react-native-image-picker';

import {COLORS, images} from '../../constants';

const createFormData = photo => {
  const data = new FormData();

  data.append('photo', {
    name: photo.fileName,
    type: photo.type,
    uri: Platform.OS === 'ios' ? photo.uri.replace('file://', '') : photo.uri,
  });

  return data;
};

const ImageUploader = ({handlePress}) => {
  const [pickerResponse, setPickerResponse] = useState(null);

  useEffect(() => {
    if (pickerResponse && pickerResponse.assets) {
      handlePress(createFormData(pickerResponse.assets[0]));
    }
  }, [pickerResponse]);

  const onImageLibraryPress = useCallback(() => {
    const options = {
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false,
    };
    ImagePicker.launchImageLibrary(options, setPickerResponse);
  }, []);

  const onCameraPress = useCallback(() => {
    const options = {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
    };
    ImagePicker.launchCamera(options, setPickerResponse);
  }, []);

  const uri = pickerResponse?.assets && pickerResponse.assets[0].uri;

  return (
    <TouchableOpacity style={styles.camera} onPress={onImageLibraryPress}>
      {!pickerResponse ? (
        <Image source={images.camera} />
      ) : (
        <Image source={{uri}} style={styles.camera} />
      )}
    </TouchableOpacity>
  );
};
export default ImageUploader;

const styles = StyleSheet.create({
  camera: {
    borderRadius: 50,
    width: 99,
    height: 99,
    backgroundColor: COLORS.lightGray,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
});
