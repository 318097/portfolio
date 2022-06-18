import React, { forwardRef, memo } from "react";
import toast, { Toaster } from "react-hot-toast";
import { copyToClipboard } from "@codedrops/lib";
// import ReactMapGL from 'react-map-gl';
import DATA from "../DATA";
const {
  basic: { email, website },
  social,
} = DATA;

const SocialIcons = () => (
  <div className="social">
    {social
      .filter((item) => item.visible)
      .map(({ name, url, classname }) => (
        <a key={name} title={name} href={url} target="__blank">
          <i className={classname}></i>
        </a>
      ))}
  </div>
);

// const viewport = {
//   width: 400,
//   height: 400,
//   // center: [12.9716, 77.5946],
//   latitude: 12.9716,
//   longitude: 77.5946,
//   // sprite: 'mapbox://styles/mapbox/dark-v9',
//   zoom: 12,
// };

const Contact = forwardRef(({ label, value }, ref) => {
  const copyEmail = () => {
    copyToClipboard(email);
    toast("Copied!!");
  };

  return (
    <section ref={ref} id={value} name={value}>
      <Toaster />
      <h2>{label}</h2>
      {/* <ReactMapGL
        mapboxApiAccessToken={'pk.eyJ1IjoiMzE4MDk3IiwiYSI6ImNqdDJhbzhqZDB6YjkzeWxqbXpqZWVyNGgifQ._HOcF0YmpvJ7eAl4JQtFqA'}
        {...viewport}
      /> */}
      <div className="contact-details">
        <span classname="mb-8"> Reach out to me at:</span>
        <p className="email pt-2" onClick={copyEmail}>
          {email}
        </p>

        <SocialIcons />

        {/* <div className="website">
          <a href={website.url} target="__blank">
            {website.label}
          </a>
        </div> */}
      </div>
    </section>
  );
});

export default memo(Contact);
