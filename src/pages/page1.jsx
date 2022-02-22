import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Pannellum } from "pannellum-react";

const Page1 = () => {
  let navigate = useNavigate();
  const [yaw, setYaw] = useState(0);
  const [pitch, setPitch] = useState(0);
  const [image] = useState("https://pannellum.org/images/alma.jpg");
  const panImage = useRef(null);

  return (
    <div>
      <div>
        <p> Pitch: {pitch} </p>
        <p> Yaw: {yaw} </p>
      </div>
      <Pannellum
        width="100%"
        height="100vh"
        image={image}
        title="Test"
        pitch={10}
        yaw={180}
        hfov={110}
        autoLoad
        disableKeyboardCtrl
        compass
        ref={panImage}
        onMouseup={(event) => {
          setPitch(panImage.current.getViewer().mouseEventToCoords(event)[0]);
          setYaw(panImage.current.getViewer().mouseEventToCoords(event)[1]);
        }}
      >
        <Pannellum.Hotspot
          type="custom"
          pitch={-1.4}
          yaw={113.6}
          handleClick={() => navigate("/page2")}
          name="image info"
        />
        <Pannellum.Hotspot type="info" pitch={75} yaw={73.2} text="SUN" />
      </Pannellum>
    </div>
  );
};

export default Page1;
