import React from 'react';
import useSWR from 'swr';
type Props = {
  studentId: any;
};

export const StudentDetail = (props: Props) => {
  const { data, error, mutate, isValidating } = useSWR(`students/${props.studentId}`, {
    revalidateOnMount: true,
    revalidateOnFocus: false,
    dedupingInterval: 1,
  });

  return (
    <div>
      <span>{data?.name}</span>
      <button onClick={() => mutate({ name: 'Phuoc Sanh' }, true)}>mutate</button>
    </div>
  );
};
