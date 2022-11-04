function noop() {
	require("next/dist/server/next-server");
}

exports.handler = async function handler() {
	return {
		body: "hello",
		headers: {},
	};
};
