// const { getEvents } = require('./apis');

let events;
let activities;
let result = [];

// getEvents();
fetch("http://recruitment.golem.network:16655/events", {
  method: "GET"
})
  .then(res => {
    return res.json();
  })
  .then(e => {
    events = e.events;

    fetch("http://recruitment.golem.network:16655/activities", {
      method: "GET"
    }).then(response => { return response.json() })
      .then(a => {
        activities = a.activities;

        let resultItem = {
          "id": 0,
          "name": "",
          "start": "",
          "end": "",
          "events": []
        };

        activities.forEach(item => {
          resultItem.id = item.id;
          resultItem.name = item.name;
          resultItem.start = item.start;
          resultItem.end = item.end;

          let start = new Date(item.start).getTime();
          let end = new Date(item.end).getTime();

          events.forEach((e, index) => {
            let date = new Date(e.date).getTime();

            if (date >= start && date <= end) {
              resultItem.events.push(e);
            }
          });

          result.push(resultItem);
        });

        console.log(result);
      })
  });