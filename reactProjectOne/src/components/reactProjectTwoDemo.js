import React, { useEffect, useRef } from 'react';
import { mount } from 'reactProjectTwo/ReactProjectTwoApp';
import { useHistory } from 'react-router-dom';
import { createBrowserHistory } from 'history';

export default function ReactProjectTwoApp() {
  const ref = useRef();
  const history = useHistory();

  useEffect(() => {
    mount(ref.current, {
      defaultHistory: createBrowserHistory()
    });
  }, []);
  
  return <div ref={ref}></div>;
}