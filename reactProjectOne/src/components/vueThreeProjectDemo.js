import React, { useEffect, useRef } from 'react';
import { mount } from 'vueThreeProject/VueThreeProjectApp';
import { useHistory } from 'react-router-dom';

export default function VueThreeProjectApp() {
  const ref = useRef();
  const history = useHistory();

  useEffect(() => {
    mount(ref.current,"vue-three-project-app");
  }, []);

  return <div ref={ref}></div>;
}
