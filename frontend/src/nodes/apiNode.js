import BaseNode from "./baseNode";

export const APINode = ({ id }) => {
    return (
        <BaseNode
           title = "API"
           inputs = {[`${id}-url`]}
           outputs={[`${id}-response`]}
        >

            <div>
                <span>Fetch data from API</span>
            </div>
        </BaseNode>
        
    );
};