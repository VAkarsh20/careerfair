import React from "react";

class PageHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="wave-info">
        <div className="waveWrapper waveAnimation">
          <div className="waveWrapperInner bgTop">
            <div
              className="wave waveTop"
              style={{
                backgroundImage: `url(
                  ${"http://front-end-noobs.com/jecko/img/wave-top.png"}
                )`
              }}
            />
          </div>
          <div className="waveWrapperInner bgMiddle">
            <div
              className="wave waveMiddle"
              style={{
                backgroundImage: `url(
                  ${"http://front-end-noobs.com/jecko/img/wave-mid.png"}
                )`
              }}
            />
          </div>
          <div className="waveWrapperInner bgBottom">
            <div
              className="wave waveBottom"
              style={{
                backgroundImage: `url(
                  ${"http://front-end-noobs.com/jecko/img/wave-bot.png"}
                )`
              }}
            />
          </div>
          <div className="info-facts">
            <img src="./images/expo.png"></img>
            <div className="main-logo">
              Illinois Engineering <span className="orange">Career Fair</span>
            </div>
            <div className="date-location">
              <div>February 17, 2021</div>

              <div>Virtual - CareerEco</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PageHeader;

// <div>9:00 am – 6:00 pm</div>
