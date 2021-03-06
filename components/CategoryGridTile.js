import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const CategoryGridTile = ({ title, color }) => {
  return (
    <View>
      <Pressable>
        <View>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({});
