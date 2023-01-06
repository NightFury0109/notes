const axios = require('axios');

exports.getEvents = async () => {
  const res = await axios.get("http://recruitment.golem.network:16655/events");
  console.log(res.response)
}