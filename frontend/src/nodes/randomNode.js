import BaseNode from "./baseNode";

export const RandomNode = ({id}) => {
    return(
        <BaseNode
          title="Random"
          outputs={[`${id}-random`]}
        >
            <div>
                <span>
                    Generates random number
                </span>
            </div>
        </BaseNode>
    );

};