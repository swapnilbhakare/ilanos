import { useState } from "react";

const Layout = (props) => {
  const [contaierBackground, setContaierBackground] = useState("#fff");

  const containerBackgroundStyle = {
    background: `${contaierBackground}`,
    margin: "2rem auto",
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: "95%",
  };

  return (
    <>
      <div
        className={"container"}
        style={setContaierBackground ? containerBackgroundStyle : ""}
      >
        {props.children}
      </div>
    </>
  );
};

export default Layout;
