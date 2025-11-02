"use client"
import { createContext, Dispatch, ReactNode, useContext, useReducer } from "react";

type SearchState = {
    query: string;
    results: any[];
    loading: boolean;
    error?: string;
};

type SearchAction =
    | { type: "SET_QUERY"; payload: string }
    | { type: "START_SEARCH", payload: any }
    | { type: "SEARCH_SUCCESS"; payload: any }
    | { type: "SEARCH_ERROR"; payload: string }
    | { type: "CLEAR_RESULTS" };


const initialSearchState: SearchState = {
    query: '',
    results: [],
    loading: false,
    error: undefined,
};

type SearchContextType = {
    state: SearchState;
    dispatch: Dispatch<SearchAction>;
};

const SearchContext = createContext<SearchContextType | undefined>(undefined);

function searchReducer(state: SearchState, action: SearchAction): SearchState {
    switch (action.type) {
        case "SET_QUERY":
            return { ...state, query: action.payload };
        case "START_SEARCH":
            return { ...state, loading: true, error: undefined };
        case "SEARCH_SUCCESS":
            return { ...state, loading: false, results: action.payload };
        case "SEARCH_ERROR":
            return { ...state, loading: false, error: action.payload };
        case "CLEAR_RESULTS":
            return { ...state, results: [] };
        default:
            return state;
    }
}


export const SearchProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(searchReducer, initialSearchState);

    return <SearchContext.Provider value={{ state, dispatch }}>{children}</SearchContext.Provider>;
};

export const useSearch = (): SearchContextType => {
    const context = useContext(SearchContext);
    if (!context) {
        throw new Error("useSearch must be used inside SearchProvider");
    }
    return context;
};
