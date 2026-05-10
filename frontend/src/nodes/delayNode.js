import BaseNode from "./baseNode";

export const DelayNode = ({id}) => {
    return (
        <BaseNode 
           title="Delay"
           inputs={[`${id}-input`]}
           outputs={[`${id}-delayed`]}
        >
            <div>
                <span>
                    Delays the data
                </span>
            </div>
        </BaseNode>
    );
};