import { StyleSheet, Text, View } from 'react-native'
import { Fonts, ScaleHeight, ScaleWidth } from '../../constants/foundation'



const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: ScaleHeight(35),
        paddingHorizontal: ScaleWidth(12)
    },
    title: {
        flexGrow: 1,
        textAlign: 'center',
        fontSize: ScaleWidth(16),
        fontFamily: Fonts.cairo_medium
    }
})
export default styles