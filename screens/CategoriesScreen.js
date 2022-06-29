import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { CATEGORIES } from "../data/dummy-data";

function renderCategoryItem(itemData) {
  return (
    <CategoriesScreen title={itemData.item.title} color={itemData.item.color} />
  );
}

const CategoriesScreen = () => {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
    />
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({});
