import React, { useState, useRef } from "react";

export default function Todolist() {
  const [jobList, setJobList] = useState(() => {
    return JSON.parse(localStorage.getItem("jobList")) || [];
  });

    const [newJob, setNewJob] = useState("");
    const jobRef = useRef(null);

  const handleAddJob = (e) => {
    e.preventDefault();
    if (newJob.trim() !== "") {
      const updateJob = [...jobList, newJob];
      localStorage.setItem("jobList", JSON.stringify(updateJob));
      setJobList(updateJob);
      setNewJob("");
      // focus vào ô inut khi thêm hàm thành công
        jobRef.current.focus()
      

    }
  };

  // xóa công việc
  //  b1 lấy đc vị trị cần xóa
    // b2 lọc công việc đó theo danh sách
    // ghi đè và gửi dữ liệu lên loacal

  const handleDelete = (index) => {
    const updatedJobList = jobList.filter((value, i) => i !== index);
    localStorage.setItem("jobList", JSON.stringify(updatedJobList));
    setJobList(updatedJobList);
  };

  

  return (
    <>
      <form onSubmit={handleAddJob}>
        <div className="input-group mb-3">
          <input
            ref={jobRef}
            type="text"
            className="form-control"
            placeholder="Thêm công việc"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            value={newJob}
            onChange={(e) => setNewJob(e.target.value)}
          />
          <button className="btn btn-danger" type="submit" id="button-addon2">
            Thêm
          </button>
        </div>
      </form>
      <ul>
        {jobList.map((job, index) => (
          <li
            key={index}
            className="d-flex align-content-center justify-content-between mb-3"
          >
            {job}{" "}
            <button
              className="btn btn-warning"
              onClick={() => handleDelete(index)}
            >
              xóa
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
