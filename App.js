/* eslint-disable react/self-closing-comp */
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Platform,
} from 'react-native';

import Torch from 'react-native-torch';

const App = () => {
  const [isTorchOn, setIsTorchOn] = useState(false);

  const handlePress = () => {
    Torch.switchState(!isTorchOn);
    setIsTorchOn(!isTorchOn);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={
          isTorchOn
            ? require('./pictures/light_on.jpeg')
            : require('./pictures/light_off.jpeg')
        }
        resizeMode="cover"
        style={styles.image}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={handlePress}></TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonStyle: {
    width: '41.8%',
    height: 210,
    backgroundColor: '#0000',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    borderRadius: 150,
    bottom: 0,
  },
  image: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },
});
