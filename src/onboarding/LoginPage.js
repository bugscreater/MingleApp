import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";

const LoginPage = ({navigation}) => {
  
  return (
    <View className="flex-1 flex justify-end">
      <StatusBar style="light" />
      <Image
        className="absolute h-full w-full"
        source={require("../../assets/welcomeImg.png")}
      />

      <LinearGradient
        colors={["transparent", "#18181b"]}
        style={{ width: wp(100), height: hp(100) }}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.8 }}
        className="flex justify-end pb-12 space-y-8"
      >
        <View className="flex items-center justify-center">
          <Text className="text-white text-lg">
            Mingle Mingle  <Text className="text-rose-500">No More Single 💞</Text>
          </Text>
        </View>
        <View style={styles.container}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text} onPress={() => navigation.navigate('MobileInput')}>Login with Phone Number</Text>
          </TouchableOpacity>
        </View>

        <View className="flex items-center justify-center">
          <Text className="text-white text-justify" style={{ width: wp(80)}}>
            By signing up, you agree to our Terms.See how we use your data in
            our Privacy Policy.
          </Text>
        </View>
      </LinearGradient>
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#3C3248",
    width: "80%",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
