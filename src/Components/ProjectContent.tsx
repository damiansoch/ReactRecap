import React from 'react';

const ProjectContent = (props: projectContentProps) => {
  return (
    <>
      <h2>Top part</h2>
      {props.children}
      <h2>Bottom part</h2>
      {props.bottomPart}
    </>
  );
};
interface projectContentProps {
  children: React.ReactNode;
  bottomPart: React.ReactNode;
}
export default ProjectContent;
