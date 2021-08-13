import React, { useEffect, useRef } from 'react';
import { mount } from 'vueTwoProject/VueTwoProjectApp';
import { useHistory } from 'react-router-dom';

export default function VueTwoProjectApp() {
  const ref = useRef();
  const history = useHistory();
  
  useEffect(() => {
    mount(ref.current,"vue-two-project-app");
  }, []);

  return <div ref={ref}></div>;
}
