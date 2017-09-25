const Kefir = require('kefir');

/**
 * Finds maximum point route
 * Next array is one index bigger than previous one
 */
module.exports.reduce = function next(map) {
    let prevIndex = 0;
    return map.reduce((points, layer) => {
        if (layer.length === 1) {
            return layer[0];
        }
        const leftIndex = prevIndex;
        const rightIndex = prevIndex + 1;
        const leftChild = layer[leftIndex];
        const rightChild = layer[rightIndex];
        prevIndex = leftChild >= rightChild ? leftIndex : rightIndex;
        return points + Math.max(leftChild, rightChild);
    }, 0);
};

module.exports.recursive = function next(map, prevIndex = 0, layerIndex = 0) {
    const layer = map[layerIndex];
    if (!layer) {
        return 0;
    }
    if (layer.length === 1) {
        return layer[0] + next(map, prevIndex, layerIndex + 1);
    }
    const leftIndex = prevIndex;
    const rightIndex = prevIndex + 1;
    const leftChild = layer[leftIndex];
    const rightChild = layer[rightIndex];
    prevIndex = leftChild >= rightChild ? leftIndex : rightIndex;
    return Math.max(leftChild, rightChild) + next(map, prevIndex, layerIndex + 1);
};
