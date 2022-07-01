import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addTitleFromInput, changeTitle, clearTitle, inputChange} from "../../store/titleSlice";

const MainPage = () => {

    const dispatch = useDispatch();
    const title = useSelector(state => state.titleReducer.title)
    const input = useSelector(state => state.titleReducer.input)

    const changeTitleFunc = () =>{
        dispatch(changeTitle())
    }

    const  clearTitleFunc = ()=>{
        dispatch(clearTitle())
    }

    const inputChangeFunc = (e) => {
        dispatch(inputChange(e.target.value))
    }

    const createTitle = () =>{
        dispatch(addTitleFromInput(input))
    }


    return (
        <div>
           <h1>Main Page - {title}</h1>
            <div>
                <input type="text" onChange={inputChangeFunc} value={input}/>
                <button onClick={createTitle}>create title</button>
            </div>
            <button onClick={changeTitleFunc}>change title</button>
            <button onClick={clearTitleFunc}>clear title</button>
        </div>
    );
};

export default MainPage;