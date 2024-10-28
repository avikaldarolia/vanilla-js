let timer = null;
let time = 0;

const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

const timeElement = document.getElementById("time");

const formatTime = (time) => {
	const seconds = ("0" + Math.floor(time % 60)).slice(-2);
	const minutes = ("0" + Math.floor((time / 60) % 60)).slice(-2);
	const hours = ("0" + Math.floor(time / (60 * 60))).slice(-2);

	return `${hours} : ${minutes} : ${seconds} s`;
};

startBtn.addEventListener("click", () => {
	if (timer) {
		clearInterval(timer);
	}

	timer = setInterval(() => {
		time = time + 1;
		timeElement.innerText = formatTime(time);
	}, 1000);

	startBtn.disabled = true;
	stopBtn.disabled = false;
});

stopBtn.addEventListener("click", () => {
	clearInterval(timer);
	startBtn.disabled = false;
	stopBtn.disabled = true;
});

resetBtn.addEventListener("click", () => {
	time = 0;
	clearInterval(timer);
	timeElement.innerHTML = `00 : 00 : 00 s`;
	startBtn.disabled = false;
	stopBtn.disabled = true;
});
