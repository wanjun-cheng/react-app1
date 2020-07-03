import React, { useRef, useState, useEffect } from 'react';
import Layout from '../../layouts/Layout';


function Page03() {
  const [index, setIndex] = useState(1);
  const useRefDiv = useRef();

  useEffect(() => {
    useRefDiv.current = index;
  }, []);

  const handleAlertClick = () => {
    setTimeout(() => {
      alert("You clicked on: " + useRefDiv.current);
    }, 1000);
  }

  return (
    <Layout>
      <div>
        <h2>这里是 page02</h2>
        <div>
          {/* <div>createRefDiv.current: {createRefDiv.current}</div> */}
          <div>useRefDiv.current: {useRefDiv.current}</div>
          <div>You clicked {index} times.</div>
          <div>
            <button onClick={() => setIndex(index + 1)}>改变Index</button>
            <button onClick={handleAlertClick}>改变Index</button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Page03;