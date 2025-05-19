import { useEffect, useState } from "react";

const AgentList = () => {
  const [agents, setAgents] = useState([]);
  const [unauthorized, setUnauthorized] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAgents = async () => {
      const token = localStorage.getItem("token");

      // If no token, immediately mark as unauthorized
      if (!token) {
        setUnauthorized(true);
        setLoading(false);
        return;
      }

      try {
        const response = await fetch("http://localhost:3000/api/agents/", {
          headers: {
            Authorization: token,
          },
        });

        const data = await response.json();

        if (!response.ok) {
          setUnauthorized(true);
        } else if (Array.isArray(data.agents)) {
          setAgents(data.agents);
        } else {
          console.log("No agents found.");
        }
      } catch (error) {
        console.error("Error fetching agents:", error.message);
        setUnauthorized(true);
      } finally {
        setLoading(false);
      }
    };

    fetchAgents();
  }, []);

  if (loading) {
    return <p className="p-6 text-center text-lg">Loading...</p>;
  }

  if (unauthorized) {
    return <p className="p-6 text-red-600 text-center text-xl font-semibold">Unauthorized Access. Please login.</p>;
  }

  return (
    <div className="p-6">
      <h2 className="text-xl text-center font-bold mb-4">All Agents</h2>
      {agents.length === 0 ? (
        <p className="text-center">No agents found.</p>
      ) : (
        <table className="w-full border border-gray-300 text-left">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">Sl No</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Mobile</th>
              <th className="px-4 py-2">Assigned Tasks</th>
            </tr>
          </thead>
          <tbody>
            {agents.map((agent, index) => (
              <tr key={agent._id} className="border-t">
                <td className="px-4 py-2 align-top">{index + 1}</td>
                <td className="px-4 py-2 align-top">{agent.name}</td>
                <td className="px-4 py-2 align-top">{agent.email}</td>
                <td className="px-4 py-2 align-top">{agent.mobile}</td>
                <td className="px-4 py-2">
                  {agent.assignedTasks && agent.assignedTasks.length > 0 ? (
                    <ul className="list-disc list-inside space-y-1">
                      {agent.assignedTasks.map((task, taskIndex) => (
                        <li key={taskIndex}>
                          <strong>{task.firstName}</strong> ({task.phone}) - {task.notes}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <span>No tasks assigned</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AgentList;
