
import React, {useEffect} from 'react';
import {StyleSheet, Dimensions, View, ActivityIndicator} from 'react-native';
const {height, width} = Dimensions.get('screen');

interface Props {
    enable : boolean
}

const Spinner = (props: Props) => {
    return props.enable ? (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <ActivityIndicator size={'large'} color={'#1F87C9'} />
            </View>
        </View>
  ) : null;
};

const styles = StyleSheet.create({
  container: {
    height,
    width,
    position: 'absolute',
    zIndex: 100,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    width: 70,
    height: 70,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  icon: {
    width: 50,
    height: 50,
  },
});

export default Spinner;
