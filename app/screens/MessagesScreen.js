import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import AppText from "../components/AppText";
import ListItem from "../components/ListItem";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";
import colors from "../config/colors";

const initialMessages = [
  {
    id: 1,
    title:
      "Batman",
    description:
      "Do you think I need to see all the other Batman movies before we watch this one? I am not very well versed in superhero movies!",
    image: require("../assets/riley.png"),
  },
  {
    id: 2,
    title: "Let's Watch Ratatouille",
    description: "A little rat that can cook?! Sign me up! Let's watch tonight!",
    image: require("../assets/riley.png"),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subtitle={item.description}
            image={item.image}
            onPress={() => console.log("message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() =>
          setMessages([
            {
              id: 2,
              title: "Let's Watch Ratatouille",
              description: "A little rat that can cook?! Sign me up! Let's watch tonight!",
              image: require("../assets/riley.png"),
            },
          ])
        }
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingVertical: 10,
    backgroundColor: colors.light,
  },
});

export default MessagesScreen;
