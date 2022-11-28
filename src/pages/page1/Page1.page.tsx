import React from 'react';
import { View } from 'react-native';
import { page1Styles } from './Page1.style';
import { LocationSearch, WeatherBox } from './Page1.component';

const Page1 = (props: Props) => {
    return (
        <View style={page1Styles.container}>
            <LocationSearch/>
            <WeatherBox/>
        </View>
    );
};

export default Page1;
