import React, { useEffect, useRef, useState } from 'react'

export const useFetch = (url) => {
    
    const IsMounted = useRef(true);
    const [state, setState] = useState({data:null, loading: true, error:null});

    useEffect(() =>{
        return() =>{
            IsMounted.current = false;
        }
    },[]);

    useEffect(() =>{

        setState({data:null, loading: true, error:null});

        fetch(url)
        .then(resp => resp.json())
        .then(data => {

            if(IsMounted.current){
                setState({
                    data,
                    loading: false, 
                    error:null
                });

            }else{
                console.log("Bla bla bla");
            }
            
        })

    },[url])

    return state;
}
