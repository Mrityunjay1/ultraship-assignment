import React from "react";

const Grid = ({ students, onViewChange, onStudentSelect }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Student Grid View</h2>
      <button
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded  bg-gradient-to-r from-gray-700 to-black text-white text-center"
        onClick={() => onViewChange("tile")}
      >
        Switch to Tile View
      </button>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {students.map((student) => (
          <div
            key={student.id}
            className="relative overflow-hidden rounded-lg shadow-md transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105 cursor-pointer bg-gradient-to-r from-blue-300 to-yellow-300   text-center p-4 "
            onClick={() => {
              onStudentSelect(student);
              onViewChange("detail");
            }}
          >
            <p>
              <strong>ID:</strong> {student.id}
            </p>
            <p>
              <strong>Name:</strong> {student.name}
            </p>
            <p>
              <strong>Username:</strong> {student.username}
            </p>
            <p>
              <strong>Email:</strong> {student.email}
            </p>

            <p>
              <strong>Suite:</strong> {student.address.suite}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
