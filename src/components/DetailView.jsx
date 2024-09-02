import React from "react";
import { FaEdit, FaFlag, FaTrash } from "react-icons/fa";

const DetailView = ({ student, onBack }) => {
  if (!student) {
    return <p>No student selected</p>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Student Detail View</h2>
      <button
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded  bg-gradient-to-r from-gray-700 to-black text-white text-center"
        onClick={onBack}
      >
        Back to Tile View
      </button>
      <div className="border p-4 rounded shadow  bg-gradient-to-r from-blue-300 to-yellow-300 text-center">
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
          <strong>Phone:</strong> {student.phone}
        </p>
        <p>
          <strong>Website:</strong> {student.website}
        </p>
        <p>
          <strong>Company:</strong> {student.company.name}
        </p>
        <p>
          <strong>City:</strong> {student.address.city}
        </p>
        <p>
          <strong>Street:</strong> {student.address.street}
        </p>
        <p>
          <strong>Suite:</strong> {student.address.suite}
        </p>
        <p>
          <strong>Zipcode:</strong> {student.address.zipcode}
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
    </div>
  );
};

export default DetailView;
