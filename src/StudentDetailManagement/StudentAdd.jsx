import { useState } from "react";

export default function StudentForm(props) {
    const [formData, setFormData] = useState({
        studentName: "",
        rollNumber: "",
        department: "",
        year: "Final Year",
        attendance: "Present"
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        props.onAdd(formData);

        setFormData({
            studentName: "",
            rollNumber: "",
            department: "",
            year: "Final Year",
            attendance: "Present"
        });
    };

    return (
        <div className="card p-3">
            <h4 className="mb-3">Add Student</h4>

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Student Name</label>
                    <input
                        type="text"
                        name="studentName"
                        className="form-control"
                        value={formData.studentName}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Roll Number</label>
                    <input
                        type="number"
                        name="rollNumber"
                        className="form-control"
                        value={formData.rollNumber}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Department</label>
                    <input
                        type="text"
                        name="department"
                        className="form-control"
                        value={formData.department}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Year</label>
                    <select
                        name="year"
                        className="form-select"
                        value={formData.year}
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
                        value={formData.attendance}
                        onChange={handleChange}
                    >
                        <option>Present</option>
                        <option>Absent</option>
                    </select>
                </div>

                <button type="submit" className="btn btn-primary">
                    Add Student
                </button>
            </form>
        </div>
    );
}

