import {StyleSheet} from 'react-native';

export const colors = {
    backgroundColor: '#FFFFFF',
    buttonColor: '#014ED0',
    headerTitle: '#505078',
    subTitle: '#757575',
    inputTitle: '#00000099',
    borderColor: '#D3D3D3',
    borderColor1: '#E5E5E5',
    sidebarBg: '#F8FAFB'
  }

export const page1Styles = StyleSheet.create({
    container:{flex:1,padding:10,backgroundColor:colors.backgroundColor},
    container1:{flex:1, marginTop:10,padding:20, borderColor:colors.borderColor,borderRadius:10, borderWidth:0.5},
    temp:{paddingVertical:10, fontSize:40, fontWeight:"bold", color:colors.headerTitle},
    textBox:{flexDirection:"row", alignItems:"center", paddingBottom:20, borderBottomColor:colors.borderColor, borderBottomWidth:0.8},
    condition:{marginLeft:10, fontSize:15, fontWeight:"500", color:colors.inputTitle},
    bottom:{paddingTop:10, color:colors.inputTitle},

    placeholderStyle:{
        color: colors.subTitle,
    },
    dropdown:{
        backgroundColor:colors.sidebarBg,
        borderColor:colors.borderColor1,
    },
    label:{color:colors.subTitle},
    dropcontainer:{backgroundColor:colors.sidebarBg,borderColor:colors.borderColor1},
    dropcontainer1:{backgroundColor: colors.backgroundColor,borderColor:colors.borderColor},
    search:{backgroundColor:colors.backgroundColor,borderColor:colors.borderColor1,borderBottomColor:colors.borderColor1}

});
