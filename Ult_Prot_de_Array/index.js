let arr = [];

const last = () => {
  if (arr.length == 0) {
    console.log(-1);
  } else {
    let Arr = arr.reverse();
    console.log(Arr[0])
  }
};
last();