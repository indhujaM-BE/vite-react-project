import { useState } from "react";
import StudentForm from "./StudentAdd";
import StudentCard from "./StudentEdit";

export default function StudentList() {
    const [students, setStudents] = useState([]);

    const handleAdd = (student) => {
        const newStudent = {
            ...student,
            id: Date.now()
        };

        setStudents([...students, newStudent]);
    };

    const handleSave = (id, updatedStudent) => {
        setStudents(
            students.map((student) =>
                student.id === id
                    ? { ...student, ...updatedStudent }
                    : student
            )
        );
    };

    return (
        <div>
            <h2 className="text-center mb-4 text-info">
                STUDENT DETAILS MANAGEMENT
            </h2>

            <StudentAdd onAdd={handleAdd} />

            <h3 className="mt-4 mb-3 text-info">Student List</h3>

            {students.length === 0 ? (
                <p>No students added yet.</p>
            ) : (
                students.map((student) => (
                    <StudentEdit
                        key={student.id}
                        student={student}
                        onSave={handleSave}
                    />
                ))
            )}
        </div>
    );
}

