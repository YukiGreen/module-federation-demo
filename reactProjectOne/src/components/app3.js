import React, { useEffect, useRef } from 'react';
import { obj } from 'appVue2/appVue2';
import { useHistory } from 'react-router-dom';

export default function MumeApp() {
  // const ref = useRef();
  // const history = useHistory();
  // useEffect(() => {
  //   mount(ref.current, 'app3==hahaha');
  // }, []);

  // return <div ref={ref}></div>;
  const test = JSON.stringify(obj);
  return <div>aaa</div>
}
