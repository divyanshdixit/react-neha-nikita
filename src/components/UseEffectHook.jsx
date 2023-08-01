import React, { useEffect, useState } from 'react'

const UseEffectHook = () => {
    // useEffect(()=> {

    //     return () => {} // cleanup function => unmounting phase => clearTimeout, clearTimeInterval, removeAdEventLISTENER
    // }, [props, state]) // callback, [dependency array]

    const [name, setName] = useState('divyansh');
    const [email, setEmail] = useState('div@gmail.com');

    // 1st case: no dependency => if any change happens this useEffect will run
    useEffect(() => {
        console.log(name, email)
    });

    // 2nd case: single state dependency
    useEffect(()=> {
        console.log(name, email);
    },[name]); // mounting, updating

    // 3rd case: double state dependency 

    useEffect(() => {
        console.log(name, email);
    }, [email]) // ounting , updating

    // 4th case : run for once during mounting 

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
            const pl = res.json();
            pl.then(result => console.log(result))
        })
        .catch(err => console.log(err))


        console.log('run for once')
    }, [])

    // for lifecycle methods - there you can perform side effects (apis calling, data fetching, setTimeout, setIntervals)
  return (
    <div>
        <button type='button' onClick={() => setName('neha')}> change name </button>
        <button type='button' onClick={() => setEmail('neha@gmail.com')}> change email </button>
    </div>
  )
}

// React.memo, useMemo, useCallback , pureComponent
export default UseEffectHook