import React from "react";
import { View } from "react-native";
import Hello from "./src/component/Hello";

const App = () => {
  return (
    <View>
      <Hello name={"ss"} enthusiasmLevel={88} />
    </View>
  );
};

export default App;
