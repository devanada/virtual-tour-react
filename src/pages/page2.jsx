import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Pannellum } from "pannellum-react";

const Page1 = () => {
  let navigate = useNavigate();
  const [yaw, setYaw] = useState(0);
  const [pitch, setPitch] = useState(0);
  const [image] = useState("https://pannellum.org/images/jfk.jpg");
  const [hotspots] = useState([
    {
      name: "page1",
      type: "custom",
      pitch: 2.7,
      yaw: 122.7,
      navigate: "/",
    },
    {
      name: "page3",
      type: "custom",
      pitch: 0.7,
      yaw: -151,
      navigate: "/page3",
    },
    {
      name: "info1",
      type: "info",
      pitch: 3.13,
      yaw: -13.7,
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
        {hotspots.map((hotspot, index) => {
          return (
            <Pannellum.Hotspot
              name={hotspot.name}
              type={hotspot.type}
              pitch={hotspot.pitch}
              yaw={hotspot.yaw}
              handleClick={(evt, name) =>
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

export default Page1;
