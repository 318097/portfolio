import React, { forwardRef, memo } from "react";
import toast, { Toaster } from "react-hot-toast";
import { copyToClipboard } from "@codedrops/lib";
// import ReactMapGL from 'react-map-gl';
import DATA from "../DATA";
const {
  basic: { email, website },
  social,
} = DATA;

const SocialIcons = ({ type }) => (
  <div className="social-icons">
    {social
      .filter((item) => item.visible && (type ? item.type === type : true))
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
      {/* <ReactMapGL
        mapboxApiAccessToken={'pk.eyJ1IjoiMzE4MDk3IiwiYSI6ImNqdDJhbzhqZDB6YjkzeWxqbXpqZWVyNGgifQ._HOcF0YmpvJ7eAl4JQtFqA'}
        {...viewport}
      /> */}
      <div className="contact-details">
        <div className="block">
          <span className="mb-4"> Reach me at</span>
          <span className="email" onClick={copyEmail}>
            {email}
          </span>
        </div>

        <div className="block">
          <span className="mb-12"> Social profiles</span>
          <SocialIcons type="social" />
        </div>

        <div className="block">
          <span className="mb-12">Work profiles</span>
          <SocialIcons type="work" />
        </div>

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
