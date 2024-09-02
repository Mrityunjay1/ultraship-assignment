import { useEffect, useState } from "react";
import Header from "./components/Header";
import Grid from "./components/Grid";
import TileView from "./components/TileView";
import DetailView from "./components/DetailView";

function App() {
  const [view, setView] = useState("grid");
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch student data from a public API
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setStudents(data));
  }, []);

  console.log(students);

  return (
    <div className="min-h-screen bg-slate-300">
      <div className="container mx-auto p-4">
        <Header />
        {view === "grid" && (
          <Grid
            students={students}
            onViewChange={setView}
            onStudentSelect={setSelectedStudent}
          />
        )}
        {view === "tile" && (
          <TileView
            students={students}
            onViewChange={setView}
            onStudentSelect={setSelectedStudent}
          />
        )}
        {view === "detail" && (
          <DetailView
            student={selectedStudent}
            onBack={() => setView("tile")}
          />
        )}
      </div>
    </div>
  );
}

export default App;
