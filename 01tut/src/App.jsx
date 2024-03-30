function App() {
  const handleNameChange = () => {
    const names = ["John", "Jane", "Jim", "Ahmad"];
    const int = Math.floor(Math.random() * names.length);
    return names[int];
  };
  return (
    <>
      <h1>Hello from {handleNameChange()}</h1>
    </>
  );
}

export default App;
