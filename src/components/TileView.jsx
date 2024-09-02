import React, { useState } from "react";
import { FaEdit, FaFlag, FaTrash } from "react-icons/fa";

const TileView = ({ students, onViewChange, onStudentSelect }) => {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const openModal = (student) => {
    setSelectedStudent(student);
  };

  const closeModal = () => {
    setSelectedStudent(null);
  };
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Student Tile View</h2>
      <button
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded  bg-gradient-to-r from-gray-700 to-black text-white text-center"
        onClick={() => onViewChange("grid")}
      >
        Switch to Grid View
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {students.map((student) => (
          <div
            key={student.id}
            className="border p-4 rounded shadow cursor-pointer hover:bg-blue-100  bg-gradient-to-r from-blue-300 to-yellow-300 text-center"
            onClick={() => openModal(student)}
          >
            <p>
              <strong>Name:</strong> {student.name}
            </p>
            <p>
              <strong>Email:</strong> {student.email}
            </p>
            <p>
              <strong>Phone:</strong> {student.phone}
            </p>

            <div className="flex justify-end space-x-2 mt-2">
              <button className="text-blue-600 hover:text-blue-800">
                <FaEdit />
              </button>
              <button className="text-yellow-600 hover:text-yellow-800">
                <FaFlag />
              </button>
              <button className="text-red-600 hover:text-red-800">
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
      </div>
      {selectedStudent && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 text-center ">
          <div className="bg-white p-6 rounded shadow-lg w-11/12 md:w-1/2 lg:w-1/3 bg-gradient-to-r from-blue-300 to-yellow-300">
            <h2 className="text-2xl font-bold mb-4">Student Details</h2>
            <p>
              <strong>ID:</strong> {selectedStudent.id}
            </p>
            <p>
              <strong>Name:</strong> {selectedStudent.name}
            </p>
            <p>
              <strong>Username:</strong> {selectedStudent.username}
            </p>
            <p>
              <strong>Email:</strong> {selectedStudent.email}
            </p>
            <p>
              <strong>Phone:</strong> {selectedStudent.phone}
            </p>
            <p>
              <strong>Website:</strong> {selectedStudent.website}
            </p>
            <p>
              <strong>Company:</strong> {selectedStudent.company.name}
            </p>
            <p>
              <strong>City:</strong> {selectedStudent.address.city}
            </p>
            <p>
              <strong>Street:</strong> {selectedStudent.address.street}
            </p>
            <p>
              <strong>Suite:</strong> {selectedStudent.address.suite}
            </p>
            <p>
              <strong>Zipcode:</strong> {selectedStudent.address.zipcode}
            </p>
            <button
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded  bg-gradient-to-r from-gray-700 to-black text-white text-center "
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TileView;
