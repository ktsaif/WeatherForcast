import React,{useState} from 'react';
import { useBoundStore } from '../../zustand/store';
import DropDownPicker from 'react-native-dropdown-picker';
import { page1Styles } from './Page1.style';
import {View, Text, Image} from 'react-native';

export const LocationSearch = () => {
    const {locations, locationFetch, weatherFetch } = useBoundStore();
    const [locationList, setLocationList] = useState(false);
    const [locationIds, setLocationIds] = useState('');

    const onchangeLocation = (item:string) => {        
        weatherFetch(item['name']);        
    }

    return(
        <DropDownPicker
            open={locationList}
            value={locationIds}
            items={locations}
            listMode='MODAL'
            searchable={true}
            autoScroll={true}
            closeAfterSelecting={true}
            setOpen={setLocationList}
            setValue={setLocationIds}
            schema={{ label: 'name', value: 'id' }}
            placeholder={'Select your location'}
            disableLocalSearch={true}
            onChangeSearchText={(text:string)=>{
            locationFetch(text)
            }}
            onSelectItem={(item:any)=>onchangeLocation(item)}
            searchPlaceholder={'Search locations...'}
            modalProps={{
            animationType: "fade"
            }}
            placeholderStyle={page1Styles.placeholderStyle}
            style={page1Styles.dropdown}
            listItemContainerStyle={page1Styles.dropcontainer}
            labelStyle={page1Styles.label}
            listItemLabelStyle={page1Styles.label}
            dropDownContainerStyle={page1Styles.dropcontainer1}
            searchContainerStyle={page1Styles.search}
            min={0}
        />
    )
}

export const WeatherBox = () => {
    const {weather } = useBoundStore();
    return(
        <View style={page1Styles.container1}>
            <Image source={{uri:`https:${weather.current.condition.icon}`}} style={{width:85, height:85}}/>
            <Text style={page1Styles.temp}>{weather.current.temp_c} ℃</Text>
            <View style={page1Styles.textBox}>
                <Image source={{uri:`https:${weather.current.condition.icon}`}} style={{width:30, height:30}}/>
                <Text style={page1Styles.condition}>{weather.current.condition.text}</Text>
            </View>
            <Text style={page1Styles.bottom}>{weather.location.name}, {weather.location.region}, {weather.location.country}</Text>
            <Text style={page1Styles.bottom}>{new Date(weather.location.localtime).toLocaleString()}</Text>
        </View>
    )
}