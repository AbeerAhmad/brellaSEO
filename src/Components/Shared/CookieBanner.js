import React, { useState, useEffect } from "react";
import { RichText } from "prismic-reactjs";
import styled from "styled-components";
import useFetchApi from "../../CustomHooks/useFetchApi.js";
import { fetchSingle } from "../../prismicApi.js";

const CookieBannerOverlay = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(259px, auto);
  justify-content: space-between;
  align-content: center;
  background-color: #020202;
  position: fixed;
  bottom: 0;
  font-family: "FuturaStd-Book", Futura, Helvetica, Arial, sans-serif;
  z-index: 9999;
  width: 100%;
  @media (max-width: 1018px) {
    grid-template-columns: 1fr minmax(92px, auto);
    width: initial;
  }
`;

const CookieContent = styled.div`
  padding: 10px 20px;
  h2 {
    text-transform: uppercase;
    color: #f5803a;
    font-family: "FuturaStd-Book", Futura, Helvetica, Arial, sans-serif;
    font-size: 14px;
    margin-bottom: 0;
  }
  p {
    padding-top: 0;
    color: #ffffff;
    font-weight: bold;
    font-size: 12px;
  }
`;

const CookieActions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-content: center;
  grid-column-gap: 20px;
  justify-content: space-evenly;
  padding: 10px 20px;
  @media (max-width: 1018px) {
    grid-template-columns: 1fr;
    grid-row-gap: 20px;
  }
`;

const CookieButton = styled.div`
  text-align: center;
  border-radius: 4px;
  padding: 2px 25px;
  color: #ffffff;
  cursor: pointer;
  transition: background-color 0.2s;
  background-color: #f4803b;
  font-size: 14px;
  &.decline {
    align-self: self-start;
    background-color: #838788;
  }
  &.accept {
  }
`;

const linkResolver = (doc) => {
  if (doc.type === "privacy") return `/${doc.slug}`;
};

const CookieBanner = () => {
  const { response } = useFetchApi(fetchSingle, "cookie_consent");
  const [banner, setBaner] = useState(true);

  const allowCookies = (e) => {
    e.preventDefault();
    var expiration = new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 30);
    window.vgo("process", "allowTracking");
    document.cookie = "accept_cookies=1; expires=" + expiration + "; path=/";
    setBaner(false);
  };

  const declineCookies = (e) => {
    e.preventDefault();
    setBaner(false);
  };

  useEffect(() => {
    if (document.cookie.match(/^(.*;)?\s*accept_cookies\s*=\s*[^;]+(.*)?$/)) {
      setBaner(false);
    }
  }, []);

  if (!response) {
    return false;
  }
  const { data } = response;

  return (
    banner && (
      <>
        <CookieBannerOverlay>
          <CookieContent>
            <RichText render={data.content} linkResolver={linkResolver} />
          </CookieContent>
          <CookieActions>
            <CookieButton className="accept">
              <div onClick={allowCookies}>Accept</div>
            </CookieButton>
            <CookieButton className="decline">
              <div onClick={declineCookies}>Decline</div>
            </CookieButton>
          </CookieActions>
        </CookieBannerOverlay>
      </>
    )
  );
};

export default CookieBanner;
