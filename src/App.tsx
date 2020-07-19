import React from "react";
import { AppContainer } from "./styles";
import { Card } from "./Card";
import { Column } from "./Column";
import { useAppState } from "./AppStateContext";
import { AddNewItem } from "./AddNewItem";

function App() {
  const { state, dispatch } = useAppState();
  return (
    <AppContainer>
      {state.lists.map((list, i) => (
        <Column id={list.id} text={list.text} key={list.id} index={i} />
      ))}
      <AddNewItem
        onAdd={(text) => dispatch({ type: "ADD_LIST", payload: text })}
        toggleButtonText={"+Add another list"}
      />
    </AppContainer>
  );
}

export default App;
