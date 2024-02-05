import React from 'react';
import Headers from './Header';
import Content from './Content';
import Total from './Total';

function Course(props) {
  const { course } = props;
  return (
    <div>
      <Headers header={course.name} />
      <Content parts={course.parts} />
      <Total total={course.parts} />
    </div>
  );
}

export default Course;