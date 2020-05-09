import React from "react";
import "./PageSpeed.scss";
// components
import WelcomeCard from "app/shared/components/WelcomeCard/WelcomeCard";
// import { runPagespeedTest } from "app/shared/services/page-speed";
import { getPageSpeedHttp } from "app/shared/services/common-http";

class PageSpeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      isLoading: true,
    };
  }

  componentDidMount() {
    getPageSpeedHttp("haha")
      .then(({ data }) => {
        // returns an array of all page speed tests performed
        console.log(data);
        this.setState({
          isLoading: false,
          data: data[0],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    const { data, isLoading } = this.state;

    return (
      <div className="page-speed">
        <h2 className="heading">Page Speed</h2>
        <WelcomeCard
          title="Page speed test of your website"
          info="You haven't ran any audits yet. Learn more, below."
        />
        <PerformanceResults isLoading={isLoading} data={data} />
        {/* <PerformanceComparisionChart /> */}
        <h3>History</h3>
      </div>
    );
  }
}

function PerformanceResults({ isLoading, data }) {
  return (
    <div className="performance-results">
      <h3>Performance Results</h3>
      {/* <SectionToolbar /> */}
      {isLoading ? <AuditingLoader /> : <LighthouseMetricsComp data={data} />}
    </div>
  );
}

function SectionToolbar() {
  return (
    <div className="performance-results-toolbar">
      <p>
        Last Audit: <span className="color-red">Just now</span>
      </p>
      <div className="color-classification">
        <p>0-49 Red</p>
        <p>50-89 Orange</p>
        <p>90-100 Green</p>
      </div>
    </div>
  );
}
// function Performance
function LighthouseMetricsComp({ data }) {
  if (data === undefined || data.lighthouse === undefined) return null;

  const lightHouseResult = Object.keys(data.lighthouse.audits).map((key) => {
    return (
      // assigning key is important when creating list of elements -
      // Keys help React identify which items have changed, are added,
      // or are removed. Keys should be given to the elements inside the array to give the elements a stable identity
      <div className="card metrics-card" key={key.toString()}>
        {/* <div className="time-circle">&#128512;</div> */}
        <h3 className="metrics-data-point">{data.lighthouse.audits[key]}</h3>
        <h6>{key}</h6>
      </div>
    );
  });

  return (
    <>
      <div className="performance-score">
        <h2 className="card-circle-green">{data.performanceScore}</h2>
        <h5>{data.websiteUrl}</h5>
        <img src={data.lighthouse.finalScreenshot} />
      </div>

      <div className="metrics-container">{lightHouseResult}</div>
    </>
  );
}

function AuditingLoader() {
  return <p className="color-blue">Auditing your website</p>;
}

function PerformanceComparisionChart() {}

export default PageSpeed;
