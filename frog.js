const total = 1000000;

let totalJump = [];
for (let i = 0; i < total; i++) {
  let frog = 0;
  let jumps = 0;
  while (frog < 10) {
    jumps++;

    frog = frog + Math.floor(Math.random() * 10);
  }
  totalJump.push(jumps);
}
console.log(
  totalJump.reduce((accumulator, currentValue) => accumulator + currentValue) /
    total,
);
let dist = {};
totalJump.forEach(number => {
  if (dist[number]) {
    dist = { ...dist, [number]: dist[number] + 1 };
  } else {
    dist = { ...dist, [number]: 1 };
  }
});
console.log(dist);
