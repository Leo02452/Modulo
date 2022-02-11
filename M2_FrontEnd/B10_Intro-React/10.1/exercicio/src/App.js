
const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tasksArray = ['Acordar', 'Tomar café', 'Estudar', 'Almoçar', 'Ver vídeos'];

function App() {
  return (
    tasksArray.map(Task)
  );
}

export default App;
