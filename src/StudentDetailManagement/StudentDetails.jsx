export default function StudentDetails(props) {
    const student = props.student;

    return (
        <div className="mt-3">
            <p className="mb-2">
                Department: {student.department}
            </p>

            <p className="mb-2">
                Year: {student.year}
            </p>

            <p className="mb-0">
                Attendance Status:{" "}
                <span
                    className={
                        student.attendance === "Present"
                            ? "text-success fw-bold"
                            : "text-danger fw-bold"
                    }
                >
                    {student.attendance}
                </span>
            </p>
        </div>
    );
}

