import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FileUploadForm = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!file) {
      setMessage("Please select a file to upload.");
      return;
    }

    const token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:3000/api/files/upload", {
        method: "POST",
        headers: {
          Authorization: token,
        },
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("File uploaded and tasks assigned successfully!");
        navigate('/api/agents');
        setFile(null);
      } else {
        setMessage(data.message || "Upload failed.");
      }
    } catch (error) {
      setMessage("Error: " + error.message);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white border border-gray-200 rounded-lg shadow-xl mt-24">
      <h2 className="text-xl font-semibold mb-4">Upload Leads File</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="file"
        //   accept=".csv, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
          onChange={handleFileChange}
          className="block w-full border border-gray-300 p-2 rounded"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Upload
        </button>
      </form>

      {message && <p className="mt-4 text-center text-sm text-red-500">{message}</p>}
    </div>
  );
};

export default FileUploadForm;
