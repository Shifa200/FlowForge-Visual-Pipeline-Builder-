import { Handle, Position } from "reactflow";

function BaseNode({ title, inputs = [], outputs = [], children }) {
    return (
            <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-4 min-w-[180px] relative">

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
                {title}
            </h3>

            {/* Content */}
            <div className="text-sm text-gray-600 space-y-2">
                {children}
            </div>

            {/* Left side- Inputs */}
            {inputs.map((input, index) => (
                <Handle
                  key={index}
                  type="target"
                  position={Position.Left}
                  id={input}
                  className="!bg-blue-500"
                  style={{
                    top: `${(index + 1) * (100 / (inputs.length + 1))}%`,
                  }}
                />
            )
            )}

            {/* Right side- Outputs */}
            {outputs.map((output, index) => (
                <Handle
                  key={index}
                  type="source"
                  position={Position.Right}
                  id={output}
                  className="!bg-green-500"
                  style={{
                    top: `${(index + 1) * (100 / (outputs.length + 1))}%`,
                  }}
                />
            )
            )}

        </div>
    )
}

export default BaseNode