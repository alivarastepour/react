import React from "react";

const Generators = () => {
  function* myGenerator() {
    yield 2000;
    yield 20000;
    yield 200;
    yield 20;
  }
  const t = myGenerator();
  //   const a = [...t];
  return (
    <div>
      {/* {a.map((b) => (
        <div key={b}>{b}</div>
      ))} */}
      {t.next().value}
      <br />
      {t.next().value}
      <br />

      {t.next().value}
      <br />

      {t.next().value}
      <br />
    </div>
  );
};

export default Generators;
