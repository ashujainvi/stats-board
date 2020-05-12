import React from "react";
import "./PageSpeed.scss";
// components
import WelcomeCard from "app/shared/components/WelcomeCard/WelcomeCard";
import { getPageSpeedHttp } from "app/shared/services/common-http";

// CHARTS
import { Line } from "react-chartjs-2";

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
      <div className="page-speed content-wrapper">
        <h2 className="heading">Page Speed</h2>
        <WelcomeCard
          title="Page speed test of your website"
          info="You haven't ran any audits yet. Learn more, below."
        />
        <PerformanceResults isLoading={isLoading} data={data} />
        {/* <PerformanceComparisionChart /> */}
        {/* <PerformanceHistoryChart isLoading={isLoading} data={data} /> */}
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
// function Performance
function LighthouseMetricsComp({ data }) {
  if (data === undefined || data.lighthouse === undefined) return null;

  const lightHouseResult = Object.keys(data.lighthouse.audits).map((key) => {
    return (
      // assigning key is important when creating list of elements -
      // Keys help React identify which items have changed, are added,
      // or are removed. Keys should be given to the elements inside the array to give the elements a stable identity
      <div className="grid-card-4 grid-card-mobile-6 grid-margin-bottom">
        <div className="card metrics-card" key={key.toString()}>
          {/* <div className="time-circle">&#128512;</div> */}
          <h3 className="metrics-data-point">{data.lighthouse.audits[key]}</h3>
          <h6>{key}</h6>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="performance-score row">
        <div className="grid-card-8 grid-margin-bottom">
          <div
            className="card performance-score-card"
            style={{
              backgroundImage:
                "linear-gradient(120deg, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.8) 80%),url(" +
                data.lighthouse.finalScreenshot +
                ")",
            }}
          >
            <h6>Website Score</h6>
            <p className="font-muted">www.ashutoshjainvi.com</p>
            <h2 className="card-circle-green">{data.performanceScore}</h2>
          </div>
        </div>

        <div className="grid-card-4 grid-margin-bottom">
          <div className="card performance-score-cta-card">
            <h6>Analysis</h6>
            <p>You haven't ran analysis in a long time.</p>
            <p>Last analysis - May 3rd, 1999</p>
            <button className="button button-secondary">Run Analysis</button>
          </div>
        </div>
      </div>

      <div className="metrics-container row">{lightHouseResult}</div>
    </>
  );
}

function AuditingLoader() {
  return <p className="color-blue">Auditing your website</p>;
}

function PerformanceHistoryChart({ isLoading, data }) {
  const chartData = {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday"],
    datasets: [
      {
        label: "Score",
        data: [80, 62, 73, 64],
        backgroundColor: "rgba(253, 65, 60, 0.7)",
      },
    ],
  };

  return (
    <div className="performance-history">
      <h3>Performance History</h3>
      <div className="card performance-history-chart">
        <Line options={{ responsive: true }} data={chartData} />
      </div>
    </div>
  );
}

export default PageSpeed;
