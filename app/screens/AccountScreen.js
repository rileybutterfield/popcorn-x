import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import ListItem from "../components/ListItem";
import Icon from "../components/Icon";
import Screen from "../components/Screen";
import colors from "../config/colors";
import ListItemSeparatorComponent from "../components/ListItemSeparator";

const menuItems = [
  {
    title: "My Matches",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Friends",
    icon: {
      name: "account-heart",
      backgroundColor: colors.darkBlue,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];

function AccountScreen(props) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Riley Butterfield"
          subtitle="rileybutterfield1@gmail.com"
          image={require("../assets/riley.png")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.title}
          ItemSeparatorComponent={ListItemSeparatorComponent}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor={colors.lightGold} />}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.light,
  },
});

export default AccountScreen;
