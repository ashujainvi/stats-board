import axios from "axios";

class PageSpeedService {
  runPagespeedTest() {
    return new Promise((resolve, reject) => {
      const { url, params } = this.setUpQuery();

      axios
        .get(url, { params })
        .then((response) => {
          const data = response.data;
          const lighthouse = data.lighthouseResult || {};

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
              "First CPU Idle":
                lighthouse.audits["first-cpu-idle"].displayValue,
              "Estimated Input Latency":
                lighthouse.audits["estimated-input-latency"].displayValue,
            };
            resolve({ performanceScore, lighthouseMetrics });
          } else {
            reject(Error("No data found"));
          }
          //   const cruxMetrics = {
          //     "First Contentful Paint":
          //       json.loadingExperience.metrics.FIRST_CONTENTFUL_PAINT_MS.category,
          //     "First Input Delay":
          //       json.loadingExperience.metrics.FIRST_INPUT_DELAY_MS.category,
          //   };
          // showCruxContent(cruxMetrics);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }

  setUpQuery() {
    const url = "https://www.googleapis.com/pagespeedonline/v5/runPagespeed";
    const params = {
      url: "https://www.ashutoshjainvi.com",
    };

    // const params =  encodeURIComponent("https://developers.google.com");
    // let query = `${api}?`;
    // for (key in parameters) {
    //   query += `${key}=${parameters[key]}`;
    // }
    return { url, params };
  }

  //   showInitialContent(id) {
  //     document.body.innerHTML = "";
  //     const title = document.createElement("h1");
  //     title.textContent = "PageSpeed Insights API Demo";
  //     document.body.appendChild(title);
  //     const page = document.createElement("p");
  //     page.textContent = `Page tested: ${id}`;
  //     document.body.appendChild(page);
  //   }

  //   showCruxContent(cruxMetrics) {
  //     const cruxHeader = document.createElement("h2");
  //     cruxHeader.textContent = "Chrome User Experience Report Results";
  //     document.body.appendChild(cruxHeader);
  //     for (key in cruxMetrics) {
  //       const p = document.createElement("p");
  //       p.textContent = `${key}: ${cruxMetrics[key]}`;
  //       document.body.appendChild(p);
  //     }
  //   }

  showLighthouseContent(lighthouseMetrics) {
    const lighthouseHeader = document.createElement("h2");
    lighthouseHeader.textContent = "Lighthouse Results";
    document.body.appendChild(lighthouseHeader);
    for (let key in lighthouseMetrics) {
      const p = document.createElement("p");
      p.textContent = `${key}: ${lighthouseMetrics[key]}`;
      document.body.appendChild(p);
    }
  }
}

export default PageSpeedService;
