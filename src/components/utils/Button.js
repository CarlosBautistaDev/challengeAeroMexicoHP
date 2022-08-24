import React from "react";

export default function Button() {
  return (
    <>
      <button onClick={() => alert()} className={"button buttonActive"}>
        <p>Estudiantes</p>
      </button>

      <button onClick={() => alert()} className={"button button"}>
        <p>Staff</p>
      </button>
    </>
  );
}
