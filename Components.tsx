import React, { useState } from "react";

function ChildComponent() {
  // counter?
  // setCounter?
  return (
    <>
      <p>Counter = {counter}</p>
      <button type="button" onClick={() => setCounter(10)} />
    </>
  );
}

function SomeComponent() {
  return <ChildComponent />;
}

export function ParentComponent() {
  const [counter, setCounter] = useState(0);
  return <SomeComponent />;
}
