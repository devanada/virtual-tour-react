import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Pannellum } from "pannellum-react";

const Page3 = () => {
  let navigate = useNavigate();
  const [yaw, setYaw] = useState(0);
  const [pitch, setPitch] = useState(0);
  const [image] = useState("https://pannellum.org/images/cerro-toco-0.jpg");
  const [hotspots] = useState([
    {
      name: "page2",
      type: "custom",
      pitch: -2.5,
      yaw: 164.6,
      navigate: "/page2",
    },
    {
      name: "INI AKU",
      type: "info",
      pitch: 1.6,
      yaw: 177,
      navigate: "",
    },
  ]);
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
        {hotspots.map((hotspot) => {
          return (
            <Pannellum.Hotspot
              name={hotspot.name}
              type={hotspot.type}
              pitch={hotspot.pitch}
              yaw={hotspot.yaw}
              handleClick={() =>
                hotspot.type === "custom" && navigate(hotspot.navigate)
              }
              text={hotspot.name}
            />
          );
        })}
      </Pannellum>
    </div>
  );
};

export default Page3;
