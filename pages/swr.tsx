import { StudentDetail } from '@/components/swr';
import React, { useState } from 'react';

type Props = {};

const SwrPage = (props: Props) => {
  const [detail, setDetail] = useState([1, 2, 3]);
  const handleAdd = () => {
    setDetail((pre) => [...pre, 1]);
  };
  return (
    <div>
      <p>SWR PAGE</p>
      <button onClick={handleAdd}>ADD DETAIL</button>
      <ul>
        {detail.map((item, idx) => (
          <li key={idx}>
            <StudentDetail studentId={'lea11ziflg8xoizf'} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SwrPage;
