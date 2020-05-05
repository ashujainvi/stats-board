import React from "react";
import "./PageSpeed.scss";

// components
import PageSpeedService from "services/page-speed";

class PageSpeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      isLoading: true,
    };
  }
  pageSpeedService = new PageSpeedService();
  componentDidMount() {
    this.pageSpeedService
      .runPagespeedTest()
      .then((res) => {
        console.log(res);

        // const lighthouseAuditList = Object.keys(res.lighthouseMetrics).map(
        //   (key) => {
        //     return (
        //       <div>
        //         <h2>{key}</h2> <p>{res.lighthouseMetrics[key]}</p>
        //       </div>
        //     );
        //   }
        // );

        // console.log(lighthouseAuditList);

        // for (let key in res.lighthouseMetrics) {
        //   const p = document.createElement("p");
        //   p.textContent = `${key}: ${lighthouseMetrics[key]}`;
        //   document.body.appendChild(p);
        // }
        this.setState({
          isLoading: false,
          data: res,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    const { data, isLoading } = this.state;
    let lightHouseMetricsComp = {};

    if (data.lighthouseMetrics !== undefined) {
      lightHouseMetricsComp = Object.keys(data.lighthouseMetrics).map((key) => {
        return (
          // assigning key is important when creating list of elements -
          // Keys help React identify which items have changed, are added,
          // or are removed. Keys should be given to the elements inside the array to give the elements a stable identity
          <div className="card metrics-card" key={key.toString()}>
            <h4>{key}</h4>
            <div className="time-circle">
              <h6 className="color-red">{data.lighthouseMetrics[key]}</h6>
            </div>
          </div>
        );
      });
    }

    return (
      <div className="page-speed">
        <h2 className="heading">Page Speed</h2>
        <div className="card welcome-card">
          <p>Welcome to your website's page speed test</p>
        </div>

        <div className="performance-results">
          <h3>Performance Results</h3>
          <div className="metrics-container">
            {isLoading ? (
              <p className="color-blue">Auditing your website</p>
            ) : (
              lightHouseMetricsComp
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default PageSpeed;
