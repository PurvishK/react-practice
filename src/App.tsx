import ListGroup from "./components/ListGroup";

function App() {
  let items: string[] = ["Games", "Sports", "Tv Shows", "Movies"];
  const handleSelectItem = (item: string, index: number) =>
    console.log(item, index);

  return (
    <ListGroup items={items} heading={"App"} onSelectItem={handleSelectItem} />
  );
}

export default App;
