/**
 * @description Function to map items from an array to a JSON object with specified values
 * @param {(string[]|Object)} inputArrayOrObj - Keys to map the values to, or a JSON object with empty values
 * @returns {Object} Mapped JSON object
 */
Array.prototype.mapTo = function(inputArrayOrObj) {
    let returnObj = new Object()
    if (!inputArrayOrObj) throw new ReferenceError('Input for mapTo is undefined or null');
    if (typeof inputArrayOrObj !== "object") throw new TypeError(`Input for mapTo is of type "${typeof inputArrayOrObj}" (expected "object")`);
    input = typeof inputArrayOrObj === "object" && !Array.isArray(inputArrayOrObj) ? Object.keys(inputArrayOrObj) : inputArrayOrObj;
    this.map(function(e, i, a) {
        // e = element, i = index, a = array
        returnObj[input[i]] = e;
    })
    return returnObj;
}