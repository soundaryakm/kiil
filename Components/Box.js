import { View,Text, StyleSheet } from "react-native";
export default function Box({children,style}){
    return(
        <View style={[styles.boxstyle,style]}>
            <Text style={styles.textstyle}>{children}</Text>
        </View>

    );
}
const styles=StyleSheet.create({
    boxstyle:{
        backgroundColor:"yellow",
        padding:20,
    },
    textstyle:{
        fontSize:18,
        fontWeight:"bold",
        textAlign:"center",
        color:"white"
      }
})