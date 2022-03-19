import React, { useEffect } from  "react";
import { StyleSheet, Image, SafeAreaView } from "react-native";

const image_url= 
"https://www.xtrafondos.com/wallpapers/vertical/rick-y-morty-fanart-2020-6344.jpg";

    export default function SplashScreen({ navigation }){
        useEffect(()=> {
            setTimeout(()=>{
                navigation.replace("Characters");
            }, 6000);
        });
        return (
            <SafeAreaView style={StyleSheet.image_container}>
                <Image source={{uri: image_url}} style={styles.image}/>
            </SafeAreaView>
        )
    }

    const styles=StyleSheet.create({
        image_container:{
            flex:1,
            justifyContent: "center",
            alignContent: "center",
        },
        image:{
            width: "100%",
            height: "100%",
        }
    })