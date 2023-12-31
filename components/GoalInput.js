import { View, TextInput, Button, StyleSheet } from "react-native";
import { useState } from "react";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoal() {
    props.addGoalHandler(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Your goal"
        style={styles.textInput}
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <Button title="Add Goal" onPress={addGoal} />
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});
