export const SubmitButton = ({nodes,edges}) => {
    const handleSubmit = async () => {
    try {
        if (nodes.length === 0) {
          alert("Please add at least one node before submitting.");
          return;
        }

        const response = await fetch(
            "http://localhost:8000/pipelines/parse",
            {
              method: "POST",
              headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                nodes,
                edges,
            }),
            }
        );

        const data = await response.json();

        alert(`
            Pipeline Analysis
            Nodes: ${data.num_nodes}
            Edges: ${data.num_edges}
            Is Dag: ${data.is_dag ?  "Yes ✅" : "No ❌"}
            `);
    } catch (error) {
        console.error(error);
        alert("Something went wromg while submitting pipeline.");
    }
    };


  return (
    <div className="flex items-center justify-center mt-6">
      <button
        onClick={handleSubmit}
        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg shadow transition"
      >
        Submit
      </button>
    </div>
  );
};