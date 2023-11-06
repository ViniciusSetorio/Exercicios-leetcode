list = [];
const HelloWord = (n) => {
    list.push(n);
    for (let i = 0; i <= list.length; i++) {
        list.pop();
    };
    list.push('Hello Word!');
    console.log(list[0]);
};
HelloWord(1);