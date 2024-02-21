import {createContext, useState} from "react";

const Context = createContext(null);
const ContextProvider = ({children}) => {
    const [trigger, setTrigger] = useState(null);
    const [chapter, setChapter] = useState()
    const changeTrigger = () => {
       setTrigger(prev => !prev)
    }


        return (
        <Context.Provider value={{trigger, changeTrigger, chapter,setChapter}}>
            {children}
        </Context.Provider>
    );
};

export {
    ContextProvider,
    Context
};