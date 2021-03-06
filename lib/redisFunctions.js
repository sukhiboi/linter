const increment = function (client, key) {
  return new Promise((resolve, reject) => {
    client.incr(key, (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
};

const lpush = function (client, key, value) {
  return new Promise((resolve, reject) => {
    client.lpush(key, value, (err) => {
      if (err) return reject(`Unable to push ${value} to ${key} queue`);
      resolve();
    });
  });
};

const hgetall = function (client, key) {
  return new Promise((resolve, reject) => {
    client.hgetall(key, (err, result) => {
      if (err) return reject('Unable to resolve hash of ', key);
      resolve(result);
    });
  });
};

const hmset = function (client, jobId, jobDetails) {
  return new Promise((resolve, reject) => {
    client.hmset(jobId, jobDetails, (err) => {
      if (err) return reject('Unable to create ', jobId);
      resolve(jobId);
    });
  });
};

const keys = function (client, key) {
  return new Promise((resolve, reject) => {
    client.keys(key, (err, res) => {
      if (err) return reject(err);
      resolve(res);
    });
  });
};

module.exports = { increment, lpush, hmset, hgetall, keys };
