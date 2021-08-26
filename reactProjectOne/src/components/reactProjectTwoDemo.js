import React, { useEffect, useRef } from 'react';
// import { mount } from 'reactProjectTwo/ReactProjectTwoApp';
import { useHistory } from 'react-router-dom';
import { createBrowserHistory } from 'history';

export default function ReactProjectTwoApp() {
  import('reactProjectTwo/ReactProjectTwoApp').then(res => {
    const ref = useRef();
    const history = useHistory();

    useEffect(() => {
      res.mount(ref.current, {
        defaultHistory: createBrowserHistory()
      });
    }, []);
    
    return <div ref={ref}></div>;
  });
}