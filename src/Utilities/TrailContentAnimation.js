import React from "react";
import { useTrail, animated } from "react-spring";
import uuidv4 from "uuid";

const TrailContentAnimation = ({ children }) => {
  const items = React.Children.toArray(children);
  const [open, setOpen] = React.useState();
  const trail = useTrail(items.length, {
    opacity: open ? 1 : 1,
    transform: open ? "translateX(0)" : "translateX(-10px)",
    transformOrigin: open ? "center center" : "center center",
  });
  React.useEffect(() => {
    if (!open) {
      setOpen(true);
    }
  }, [open]);

  return (
    <React.Fragment>
      {open &&
        trail.map(({ ...props }, index) => (
          <animated.div
            key={uuidv4()}
            className={"trails-text"}
            style={{ ...props }}
          >
            {items[index]}
          </animated.div>
        ))}
    </React.Fragment>
  );
};
export default TrailContentAnimation;
