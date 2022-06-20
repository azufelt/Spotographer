import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import ListItem from "../components/lists/ListItem";
import ListItemDelete from "../components/lists/ListItemDelete";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import Screen from "../components/Screen";

const initialMessages = [
  {
    id: 1,
    title: "Username",
    description: "A message from someone",
    image: require("../assets/profilepic.jpg"),
  },
  {
    id: 2,
    title: "Username",
    description: "A message from someone",
    image: require("../assets/profilepic.jpg"),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    // Delete the message from messages array
    // Call the server to Delete
    // state hook
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message Selected", item)} //this will take the user to a different screen
            renderRightActions={() => (
              <ListItemDelete onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "Username",
              description: "A message from someone",
              image: require("../assets/profilepic.jpg"),
            },
          ]);
        }} //this is where we call the backend to give us a list of messages
      />
    </Screen>
  );
}
const styles = StyleSheet.create({});

export default MessagesScreen;
