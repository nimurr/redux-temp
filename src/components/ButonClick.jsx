import { useDispatch, useSelector } from "react-redux"
import { decrement, increment , incrementByValue } from "../redux/features/counterSlice";

export default function ButonClick() {

    const { count } = useSelector((state) => state.counter)

    const dispatch = useDispatch();


    return (
        <div className="flex">
            <button
                onClick={() => dispatch(incrementByValue(5))}
                className="bg-red-500">Increment by Value</button>
            <button
                onClick={() => dispatch(increment())}
                className="bg-red-500">Click Increase </button>
            <h1>{count}</h1>
            <button
                onClick={() => dispatch(decrement())}
            >Click Decrease</button>
        </div>
    )
}
