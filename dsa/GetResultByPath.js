function getResultByPath(path, obj) {
	//write your implementation here
	const pvalue = path.split(".");
	let cur = obj;
	pvalue.forEach((val) => {
		if (cur == undefined) {
			return undefined;
		}

		if (val.slice(-1) === "]") {
			const idx = parseInt(val.slice(-2, -1));
			const arr_name = val.slice(0, -3);
			cur = cur[arr_name];
			cur = cur[idx];
		} else {
			cur = cur[val];
		}
	});

	return cur;
}
const path = "data.results[1].status[0].type";
const obj = {
	data: {
		results: [
			{ status: "completed", error: "" },
			{ status: [{ type: "done" }, { type: "error" }] },
		],
	},
};

const val = getResultByPath(path, obj);
console.log(val);
module.exports = getResultByPath;

// ANOTHER way:
function getResultByPath2(path, obj) {
	const regex = /[^.[\]]+/g;
	const keys = path.match(regex); // breaks path into tokens like ['data', 'results', '1', 'status', '0', 'type']

	let cur = obj;
	for (const key of keys) {
		if (cur == null) return undefined;
		cur = cur[key];
	}

	return cur;
}
