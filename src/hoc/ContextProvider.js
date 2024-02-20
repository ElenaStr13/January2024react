import {createContext, useState} from "react";

const Context = createContext({});
const ContextProvider = ({children}) => {
    //const [trigger, setTrigger] = useState(null);
    //{trigger, changeTrigger}
    //const changeTrigger = () => {
     //   setTrigger(prev => !prev)
    //}
    const [state] = useState({});

        return (
        <Context.Provider value={state}>
            {children}
        </Context.Provider>
    );
};

export {
    ContextProvider,
    Context
};