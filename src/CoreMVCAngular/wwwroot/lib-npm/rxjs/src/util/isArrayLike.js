"use strict";
exports.isArrayLike = (function (x) { return x && typeof x.length === 'number'; });
