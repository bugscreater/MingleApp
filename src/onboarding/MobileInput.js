import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";

const MobileInput = () => {
  return (
    <View className="flex-1 flex justify-end">
    <StatusBar style="light" />
    <LinearGradient
      colors={["transparent", "#18181b"]}
      style={{ width: wp(100), height: hp(100) }}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 0.8 }}
      className="flex justify-end pb-12 space-y-8"
    >
      <View className="flex flex-1 items-center justify-center">
        <Text className="text-white text-lg">
           Enter Your Phone Number
        </Text>
      </View>
    </LinearGradient>
  </View>
  )
}

export default MobileInput

const styles = StyleSheet.create({})