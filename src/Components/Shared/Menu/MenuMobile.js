import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MenuCloseIcon from "../../../assets/icons/Brella_Web-refresh_menu-X-icon.png";
import BrellaLogo from "../../../assets/img/logo-nav.svg";
import OpenMenuButton from "./CloseMenuButton.js";
import { getTextWidth, px2vw } from "../../../Utilities/util.js";
import { BiCaretDown, BiCaretUp } from "react-icons/bi/index.js";

/*Top Nav Bar Container*/
const MenuTopContainer = styled.div`
  padding: 10px 0 10px 10px;
  overflow: hidden;
  z-index: 999;
  position: fixed;
  width: 100vw;
  background: linear-gradient(530deg, black, rgb(245, 128, 58, 0.2));
`;

const MenuTopRow = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  z-index: 15;
  align-items: center;
`;

const TopMenuButton = styled.div`
  text-align: center;
  /*background-color: #282828;*/
  color: white;
  display: block;
  cursor: pointer;
  width: 50px;
  margin-right: 10px;
`;

const ModalBackgroundStyled = styled.div`
  background: linear-gradient(90deg, rgba(11, 11, 11, 1), transparent);
  /*backdrop-filter: blur(2px);*/
  position: fixed;
  height: 100%;
  width: 50%;
  z-index: 998;

  @media (max-width: 425px) {
    background: linear-gradient(90deg, rgb(11, 11, 11), rgba(11, 11, 11, 0.45));
    width: 100%;
  }
`;

const MenuModuleContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const MenuModuleRow = styled.div`
  text-align: left;
  color: white;
  font-family: "FuturaStd-Condensed", Futura, Helvetica, Arial, sans-serif;
  font-size: 1.8rem;
  transition: color 0.25s;
  display: block;
  width: ${px2vw(250)};
  cursor: pointer;
  margin-left: ${px2vw(25)};

  @media (max-width: 768px) {
    margin-left: ${px2vw(50)};
  }
  @media (max-width: 600px) {
    font-size: 1.5rem;
  }

  @media (max-width: 425px) {
    margin-left: ${px2vw(80)};
  }

  @media (max-width: 375px) {
    margin-left: ${px2vw(100)};
  }

  @media (max-width: 320px) {
    margin-left: ${px2vw(120)};
  }
`;

const RowTitle = styled.div`
  width: ${(props) => px2vw(props.size)};
  border-bottom: ${(props) => (props.active ? "#f5803a" : "none")} 2px solid;
  white-space: nowrap;
  transition: color 0.25s;
  &:hover {
    color: #f5803a;
  }
`;

const MenuModuleSubRow = styled(MenuModuleRow)`
  margin-left: ${px2vw(40)};
  transition: color 0.25s;
  &:hover {
    color: #f5803a;
  }

  @media (max-width: 768px) {
    margin-left: ${px2vw(70)};
  }
  @media (max-width: 600px) {
    font-size: 1.5rem;
  }

  @media (max-width: 425px) {
    margin-left: ${px2vw(120)};
  }

  @media (max-width: 375px) {
    margin-left: ${px2vw(140)};
  }

  @media (max-width: 320px) {
    margin-left: ${px2vw(160)};
  }
`;

const MenuModuleSecondSubRow = styled(MenuModuleRow)`
  margin-left: ${px2vw(40)};
  transition: color 0.25s;
  &:hover {
    color: #f5803a;
  }

  @media (max-width: 768px) {
    margin-left: ${px2vw(70)};
  }
  @media (max-width: 600px) {
    font-size: 1.5rem;
  }

  @media (max-width: 425px) {
    margin-left: ${px2vw(120)};
  }

  @media (max-width: 375px) {
    margin-left: ${px2vw(140)};
  }

  @media (max-width: 320px) {
    margin-left: ${px2vw(160)};
  }
`;

const CaretContainer = styled.span`
  svg {
    margin-bottom: 10px;
  }
`;

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showServicesSubMenu, setShowServicesSubMenu] = useState(false);
  const [showEventsSubMenu, setShowEventsSubMenu] = useState(false);
  const [showStrategicSubMenu, setShowStrategicSubMenu] = useState(false);
  const [showInternalSubMenu, setShowInternalSubMenu] = useState(false);
  const [activeProductionTab, setActiveProductionTab] = useState(false);
  const [activeEventsTab, setActiveEventsTab] = useState(false);
  const [activeStrategicTab, setActiveStrategicTab] = useState(false);
  const [activeInternalTab, setActiveInternalTab] = useState(false);

  const ref = useRef();

  useEffect(() => {
    const handler = () => {
      setShowMenu(false);
    };
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref]);

  const getMenuModal = () => {
    if (showMenu) {
      return (
        <div ref={ref}>
          <ModalBackgroundStyled>
            <MenuModuleContainer style={{ top: "80px" }}>
              <MenuModuleRow>
                <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                  <RowTitle
                    size={getTextWidth("HOME", "FuturaStd-Condensed")}
                    onClick={() => {
                      setShowMenu(false);
                    }}
                  >
                    HOME
                  </RowTitle>
                </Link>
              </MenuModuleRow>
              <MenuModuleRow onClick={() => {}}>
                <RowTitle
                  size={getTextWidth(
                    "PRODUCTION_SERVICES",
                    "FuturaStd-Condensed"
                  )}
                  onClick={() => {
                    !showServicesSubMenu
                      ? setShowServicesSubMenu(true)
                      : setShowServicesSubMenu(false);
                    !activeProductionTab
                      ? setActiveProductionTab(true)
                      : setActiveProductionTab(false);
                    //setShowActiveHomeTab(false);
                  }}
                >
                  PRODUCTION SERVICES
                  <CaretContainer>
                    {activeProductionTab ? <BiCaretUp /> : <BiCaretDown />}
                  </CaretContainer>
                </RowTitle>
              </MenuModuleRow>
              {showServicesSubMenu && (
                <>
                  <MenuModuleSubRow onClick={() => {}}>
                    <Link
                      to="/events"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <RowTitle
                        onClick={() => {
                          setShowMenu(false);
                          !showEventsSubMenu
                            ? setShowEventsSubMenu(true)
                            : setShowEventsSubMenu(false);
                          !activeEventsTab
                            ? setActiveEventsTab(true)
                            : setActiveEventsTab(false);
                        }}
                      >
                        EVENTS
                      </RowTitle>
                    </Link>
                  </MenuModuleSubRow>
                  <MenuModuleSubRow onClick={() => {}}>
                    <Link
                      to="/video"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <RowTitle
                        onClick={() => {
                          setShowMenu(false);
                        }}
                      >
                        VIDEO
                      </RowTitle>{" "}
                    </Link>
                  </MenuModuleSubRow>
                  <MenuModuleSubRow onClick={() => {}}>
                    <Link
                      to="/design"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <RowTitle
                        onClick={() => {
                          setShowMenu(false);
                        }}
                      >
                        DESIGN
                      </RowTitle>
                    </Link>
                  </MenuModuleSubRow>
                  <MenuModuleSubRow onClick={() => {}}>
                    <Link
                      to="/elearning"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <RowTitle
                        onClick={() => {
                          setShowMenu(false);
                        }}
                      >
                        ELEARNING
                      </RowTitle>
                    </Link>
                  </MenuModuleSubRow>
                </>
              )}

              <MenuModuleRow onClick={() => {}}>
                <RowTitle
                  onClick={() => {
                    !showStrategicSubMenu
                      ? setShowStrategicSubMenu(true)
                      : setShowStrategicSubMenu(false);
                    !activeStrategicTab
                      ? setActiveStrategicTab(true)
                      : setActiveStrategicTab(false);
                  }}
                >
                  STRATEGIC SERVICES{" "}
                  <CaretContainer>
                    {activeStrategicTab ? <BiCaretUp /> : <BiCaretDown />}
                  </CaretContainer>
                </RowTitle>
              </MenuModuleRow>
              {showStrategicSubMenu && (
                <>
                  <MenuModuleSecondSubRow onClick={() => {}}>
                    <Link
                      to="/learning"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <RowTitle
                        onClick={() => {
                          setShowMenu(false);
                        }}
                      >
                        LEARNING
                      </RowTitle>
                    </Link>
                  </MenuModuleSecondSubRow>
                  <MenuModuleSecondSubRow onClick={() => {}}>
                    <Link
                      to="/meetingsevents"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <RowTitle
                        onClick={() => {
                          setShowMenu(false);
                        }}
                      >
                        MEETINGS & EVENTS
                      </RowTitle>
                    </Link>
                  </MenuModuleSecondSubRow>
                  <MenuModuleSecondSubRow onClick={() => {}}>
                    <Link
                      to="/corporate"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <RowTitle
                        onClick={() => {
                          setShowMenu(false);
                        }}
                      >
                        CORPORATE COMMUNICATIONS
                      </RowTitle>
                    </Link>
                  </MenuModuleSecondSubRow>
                  <MenuModuleSecondSubRow onClick={() => {}}>
                    <Link
                      to="/customer"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <RowTitle
                        onClick={() => {
                          setShowMenu(false);
                        }}
                      >
                        CUSTOMER EDUCATION
                      </RowTitle>
                    </Link>
                  </MenuModuleSecondSubRow>
                  <MenuModuleSecondSubRow onClick={() => {}}>
                    <Link
                      to="/internal"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <RowTitle
                        onClick={() => {
                          setShowMenu(false);
                          !showInternalSubMenu
                            ? setShowInternalSubMenu(true)
                            : setShowInternalSubMenu(false);
                          !activeInternalTab
                            ? setActiveInternalTab(true)
                            : setActiveInternalTab(false);
                        }}
                      >
                        INTERNAL AGENCY SUPPORT
                      </RowTitle>
                    </Link>
                  </MenuModuleSecondSubRow>
                </>
              )}
              <MenuModuleRow onClick={() => {}}>
                <Link
                  to="/portfolio"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <RowTitle
                    onClick={() => {
                      setShowMenu(false);
                    }}
                    size={getTextWidth("PORTFOLIO", "FuturaStd-Condensed")}
                  >
                    PORTFOLIO
                  </RowTitle>
                </Link>
              </MenuModuleRow>
              <MenuModuleRow onClick={() => {}}>
                <Link
                  to="/blog"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <RowTitle
                    size={getTextWidth("BLOG", "FuturaStd-Condensed")}
                    onClick={() => {
                      setShowMenu(false);
                    }}
                  >
                    BLOG
                  </RowTitle>
                </Link>
              </MenuModuleRow>
              <MenuModuleRow onClick={() => {}}>
                <Link
                  to="/about"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <RowTitle
                    onClick={() => {
                      setShowMenu(false);
                    }}
                    size={getTextWidth("ABOUT", "FuturaStd-Condensed")}
                  >
                    ABOUT
                  </RowTitle>
                </Link>
              </MenuModuleRow>
              <MenuModuleRow onClick={() => {}}>
                <Link
                  to="/contact"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <RowTitle
                    onClick={() => {
                      setShowMenu(false);
                    }}
                  >
                    CONTACT
                  </RowTitle>
                </Link>
              </MenuModuleRow>
              <MenuModuleRow onClick={() => {}}>
                <Link
                  to="/careers"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <RowTitle
                    onClick={() => {
                      setShowMenu(false);
                    }}
                  >
                    CAREERS
                  </RowTitle>
                </Link>
              </MenuModuleRow>
            </MenuModuleContainer>
          </ModalBackgroundStyled>
        </div>
      );
    }

    return null;
  };

  return (
    <>
      {getMenuModal()}
      <MenuTopContainer>
        <MenuTopRow>
          <TopMenuButton
            onClick={(e) => {
              !showMenu ? setShowMenu(true) : setShowMenu(false);
              sessionStorage.navScrollY = 0;
            }}
          >
            {showMenu ? (
              <img
                src={MenuCloseIcon}
                alt="Menu Close Button"
                style={{ width: "50%" }}
              ></img>
            ) : (
              <OpenMenuButton />
            )}
          </TopMenuButton>{" "}
          <Link to="/">
            <img
              src={BrellaLogo}
              alt="Brella Logo"
              style={{ width: "100%" }}
            ></img>{" "}
          </Link>
        </MenuTopRow>
      </MenuTopContainer>
    </>
  );
};

export default Menu;
