import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

const ControlBtn = ({ next, previous }) => {
    return (
        <div className="flex items-center justify-center gap-2">
            <span className="p-2 rounded-full bg-gray-300 text-white hover:bg-gray-400 cursor-pointer" onClick={previous}>
                <GrPrevious />
            </span>
            <span className="p-2 rounded-full bg-gray-300 text-white hover:bg-gray-400 cursor-pointer" onClick={next}>
                <GrNext />
            </span>
        </div>
    );
};

export default ControlBtn;
