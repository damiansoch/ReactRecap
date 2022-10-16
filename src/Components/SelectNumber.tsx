import React from 'react';

const SelectNumber = (props: selectNumberProps) => {
  const arr = Array(props.maxValue).fill(0);
  return (
    <>
      <select
        onChange={(e) => {
          console.log(parseInt(e.currentTarget.value));
          props.onSetNumber(parseInt(e.currentTarget.value));
        }}
      >
        {arr.map((_, index) => (
          <option key={index + 1} value={index + 1}>
            {props.selectContent(index + 1)}
          </option>
        ))}
      </select>
    </>
  );
};

interface selectNumberProps {
  maxValue: number;
  onSetNumber(value: number): void;
  selectContent(value: number): React.ReactNode;
}
SelectNumber.defaultProps = {
  maxValue: 5,
};
export default SelectNumber;
