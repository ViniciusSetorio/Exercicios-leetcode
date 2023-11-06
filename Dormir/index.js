// PROGRAMAÇÃO ASSÍNCRONA - PROMISE

/*
const loginUser = (email, password) => {
  return new Promise((resolve, reject) => {
    const error = false;

    if (error) {
      reject(new Error("error in login!"));
    }

    console.log("use logged!");
    resolve({ email });
  });
};

const getUserVideos = (email) => {
  return new Promise((resolve, reject) => {
    console.log(getUserVideos);
    setTimeout(() => {
      resolve(["video1", "video2", "video3"]);
    }, 2000);
  });
};

const getVideoDetails = (video) => {
  console.log(getVideoDetails);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ title: "video title" });
    });
  });
};

loginUser("vinicius@gmail.com", "1234567")
  .then((user) => getUserVideos(user.email))
  .then((videos) => getVideoDetails(videos[0]))
  .catch((error) => console.log({ error }));
*/

// PROGRAMAÇÃO ASSÍNCRONA - ASYNC / AWAIT

/*
const loginUser = (email, password) => {
  return new Promise((resolve, reject) => {
    const error = false;

    if (error) {
      reject(new Error("error in login!"));
    }

    console.log("use logged!");
    resolve({ email });
  });
};

const getUserVideos = (email) => {
  return new Promise((resolve, reject) => {
    console.log(getUserVideos);
    setTimeout(() => {
      resolve(["video1", "video2", "video3"]);
    }, 2000);
  });
};

const getVideoDetails = (video) => {
  console.log(getVideoDetails);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ title: "video title" });
    });
  });
};

const displayUser = async () => {
  try {
    const user = await loginUser("vinicius@gmail.com", "123456");
    const videos = await getUserVideos(user.email);
    const videosDetails = await getVideoDetails(videos[0]);

    console.log({ user });
    console.log(videos);
    console.log(videosDetails);
  } catch (error) {
    console.log({ error });
  }
};
displayUser();
*/

millis = 2000;
const dormir = async (millis) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(console.log(millis));
    }, millis);
  });
};
dormir(millis);