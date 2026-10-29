import { useState } from "react";
import StudentDetails from "./StudentDetails";

export default function StudentCard(props) {
    const [showDetails, setShowDetails] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editData, setEditData] = useState({ ...props.student });

    const handleEdit = () => {
        setEditData({ ...props.student });
        setIsEditing(true);
        setShowDetails(true);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setEditData({
            ...editData,
            [name]: value
        });
    };

    const handleSave = () => {
        props.onSave(props.student.id, editData);
        setIsEditing(false);
    };

    return (
        <div className="card p-3 mb-3">
            {isEditing ? (
                <>
                    <h5>Edit Student</h5>

                    <div className="mb-2">
                        <label className="form-label">Student Name</label>
                        <input
                            name="studentName"
                            className="form-control"
                            value={editData.studentName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-2">
                        <label className="form-label">Roll Number</label>
                        <input
                            type="number"
                            name="rollNumber"
                            className="form-control"
                            value={editData.rollNumber}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-2">
                        <label className="form-label">Department</label>
                        <input
                            name="department"
                            className="form-control"
                            value={editData.department}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-2">
                        <label className="form-label">Year</label>
                        <select
                            name="year"
                            className="form-select"
                            value={editData.year}
                            onChange={handleChange}
                        >
                            <option>First Year</option>
                            <option>Second Year</option>
                            <option>Third Year</option>
                            <option>Final Year</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Attendance</label>
                        <select
                            name="attendance"
                            className="form-select"
                            value={editData.attendance}
                            onChange={handleChange}
                        >
                            <option>Present</option>
                            <option>Absent</option>
                        </select>
                    </div>
                </>
            ) : (
                <>
                    <h5>{props.student.studentName}</h5>

                    <p className="mb-0">
                        Roll Number: {props.student.rollNumber}
                    </p>
                </>
            )}

            {!isEditing && showDetails && (
                <StudentDetails student={props.student} />
            )}

            {!isEditing && (
                <div className="mt-3 d-flex gap-2">
                    <button
                        className="btn btn-outline-primary"
                        onClick={() => setShowDetails(!showDetails)}
                    >
                        {showDetails ? "Hide Details" : "Details"}
                    </button>

                    <button
                        className="btn btn-warning"
                        onClick={handleEdit}
                    >
                        Edit
                    </button>
                </div>
            )}

            {isEditing && (
                <div className="d-flex gap-2">
                    <button
                        className="btn btn-success"
                        onClick={handleSave}
                    >
                        Save
                    </button>

                    <button
                        className="btn btn-secondary"
                        onClick={() => setIsEditing(false)}
                    >
                        Cancel
                    </button>
                </div>
            )}
        </div>
    );
}

