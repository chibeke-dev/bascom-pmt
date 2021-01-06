/**
 * @param {string} size
 * @param {*} params
 */
const sizeFunc = (size, params) => {
	let param = params.split(/\s+/).map((element) => {
		let result = `${size}:${element}`;
		return result;
	});
	console.log(param.join(" "));
	return param.join(" ");
};

const xs = (params) => {
	return sizeFunc("xs", params);
};
const sm = (params) => {
	return sizeFunc("sm", params);
};
const md = (params) => {
	return sizeFunc("md", params);
};
const lg = (params) => {
	return sizeFunc("lg", params);
};
const xl = (params) => {
	return sizeFunc("xl", params);
};
