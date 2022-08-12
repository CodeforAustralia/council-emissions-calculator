import React, { useState, createRef } from "react";

const useRefDimensions = (ref) => {
  const [dimensions, setDimensions] = useState({ width: 1, height: 2 });
  React.useEffect(() => {
    if (ref.current) {
      const { current } = ref;
      const boundingRect = current.getBoundingClientRect();
      const { width, height } = boundingRect;
      setDimensions({ width: Math.round(width), height: Math.round(height) });
    }
  }, [ref]);
  return dimensions;
};

export default function Home() {
  const divRef = createRef();
  const dimensions = useRefDimensions(divRef);

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <div
        ref={divRef}
        style={{
          margin: "50px",
          width: "70%",
          height: "70%",
          border: "1px solid black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Dimensions: {dimensions.width}w {dimensions.height}h
      </div>
    </div>
  );
}
