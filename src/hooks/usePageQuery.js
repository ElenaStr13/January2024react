import {useContext} from "react";

import {Context} from "../hoc";

const usePageQuery = () => useContext(Context)

export {
    usePageQuery
}