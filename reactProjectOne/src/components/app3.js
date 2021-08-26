import React, { useEffect, useRef } from 'react';
// import { obj } from 'appVue2/appVue2';
import { useHistory } from 'react-router-dom';

export default function MumeApp() {
  import('appVue2/appVue2').then(res => {
    const test = JSON.stringify(res.obj);
  });
  // const ref = useRef();
  // const history = useHistory();
  // useEffect(() => {
  //   mount(ref.current, 'app3==hahaha');
  // }, []);

  // return <div ref={ref}></div>;
  
  return <div>aaa</div>
}
