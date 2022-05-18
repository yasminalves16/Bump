import { ConteClose, ConteCloseTask } from "./styled";
import X from "./X.svg";

export const Close = ({ close, addTesk }) => {
    return (
        <>
            {addTesk ? (
                <ConteCloseTask onClick={close}>
                    <div>
                        <img src={X} />
                    </div>
                </ConteCloseTask>
            ) : (
                <ConteClose onClick={close}>
                    <div>
                        <img src={X} />
                    </div>
                </ConteClose>
            )}
        </>
    );
};