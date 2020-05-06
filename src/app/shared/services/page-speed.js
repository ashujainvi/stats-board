import axios from "axios";

export function runPagespeedTest() {
  return new Promise((resolve, reject) => {
    const { url, params } = setUpQuery();

    axios
      .get(url, { params })
      .then((response) => {
        const lighthouse = response.data.lighthouseResult || {};

        if (lighthouse) {
          const performanceScore = lighthouse.categories.performance.score;
          const lighthouseMetrics = {
            "First Contentful Paint":
              lighthouse.audits["first-contentful-paint"].displayValue,
            "Speed Index": lighthouse.audits["speed-index"].displayValue,
            "Time To Interactive":
              lighthouse.audits["interactive"].displayValue,
            "First Meaningful Paint":
              lighthouse.audits["first-meaningful-paint"].displayValue,
            "First CPU Idle": lighthouse.audits["first-cpu-idle"].displayValue,
            "Estimated Input Latency":
              lighthouse.audits["estimated-input-latency"].displayValue,
          };
          resolve({ performanceScore, lighthouseMetrics });
        } else {
          reject(Error("No data found"));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
}

function setUpQuery() {
  const url = "https://www.googleapis.com/pagespeedonline/v5/runPagespeed";
  const params = {
    url: "https://www.ashutoshjainvi.com",
  };
  return { url, params };
}
