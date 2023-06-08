import {StyleSheet} from 'react-native'
import COLORS from './colors.js'

export default Contains = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:COLORS.black
    },
    title:{
        color:COLORS.goldLeaf,
        fontWeight:'600',
        fontSize:18
    }
}) 