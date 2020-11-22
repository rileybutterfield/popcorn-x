import React, { useContext } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import ListItem from "../components/ListItem";
import Icon from "../components/Icon";
import Screen from "../components/Screen";
import colors from "../config/colors";
import ListItemSeparatorComponent from "../components/ListItemSeparator";
import AuthContext from "../auth/context";
import { USER_FACING_NOTIFICATIONS } from "expo-permissions";

const menuItems = [
  {
    title: "My Matches",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
    targetScreen: "Matches"
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
    targetScreen: "Messages"
  },
];

function AccountScreen({navigation}) {
  const {user, setUser} = useContext(AuthContext)
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title={user.name}
          subtitle={user.email}
          image={require("../assets/riley.png")} //replace with image if we are seeding image/maybe add a default image?
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
              onPress={()=> navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor={colors.lightGold}
        />}
        onPress={() => setUser(null)}
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
