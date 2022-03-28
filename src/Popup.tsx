import React, { Component, useEffect, useState } from "react";

import "../style/popup.css";

interface Props {
  trigger: boolean;
  setTrigger: (s: boolean) => void;
}

const PopUp: React.FC<Props> = ({ trigger, setTrigger, children }) => {
  const [childList, setChildList] = useState([]);
  const [closeWithoutWarn, setCloseWithoutWarn] = useState(true);
  const [warnCount, setWarnCount] = useState(1);

  const closePopup = () => {
    if (warnCount > 0 && !closeWithoutWarn) {
      setWarnCount((s) => s - 1);
      setTimeout(() => setWarnCount(1), 3000);
    } else {
      setTrigger(false);
      setWarnCount(1);
    }
  };

  useEffect(() => {
    let _children = React.Children.map(children, (child: React.Component) => ({
      ...child,
      props: {
        ...child.props,
        callBack: setCloseWithoutWarn,
      },
    }));
    setChildList(_children);
  }, []);

  return trigger ? (
    <div
      className="popup"
      onClick={(event) => {
        event.preventDefault();
        if (event.target === event.currentTarget) {
          closePopup();
        }
      }}
    >
      <div className="popup-inner">{childList}</div>
    </div>
  ) : (
    <></>
  );
};

export { PopUp };
