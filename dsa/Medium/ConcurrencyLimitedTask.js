/**
 * @param {Function[]} tasks - An array of functions returning promises.
 * @param {number} maxConcurrent - Max number of tasks to run in parallel.
 * @return {Promise<Array>} Resolves to an array of results in task order.
 */
async function scheduleTasks(tasks, maxConcurrent) {
	// implement here
	let results = new Array(tasks.length);
	let i = 0;
	while (i < tasks.length) {
		const chunk = tasks
			.slice(i, i + maxConcurrent)
			.map((fn, idx) => ({ fn, index: i + idx }));

		const settled = await Promise.all(chunk.map((val) => val.fn()()));

		for (let j = 0; j < chunk.length; j++) {
			results[chunk[j].index] = settled[j];
		}
		i += maxConcurrent;
	}

	return results;
}

const tasks = [
	() => delayTask(100, "A"),
	() => delayTask(50, "B"),
	() => delayTask(10, "C"),
];

function delayTask(ms, result) {
	return () => new Promise((resolve) => setTimeout(() => resolve(result), ms));
}

scheduleTasks(tasks, 2).then((res) => console.log(res));

module.exports = scheduleTasks;
