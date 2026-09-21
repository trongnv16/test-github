const test = require("node:test");
const assert = require("node:assert/strict");
const { calculateBMI, classifyBMI } = require("./bmi.js");

test("calculateBMI: 70kg, 175cm ra khoảng 22.86", () => {
  assert.ok(Math.abs(calculateBMI(70, 175) - 22.857) < 0.001);
});

test("calculateBMI: báo lỗi khi input không hợp lệ", () => {
  assert.throws(() => calculateBMI(0, 175));
  assert.throws(() => calculateBMI(70, -1));
  assert.throws(() => calculateBMI(NaN, 175));
});

test("classifyBMI: đúng các mốc phân loại", () => {
  assert.equal(classifyBMI(18.4), "Thiếu cân");
  assert.equal(classifyBMI(18.5), "Bình thường");
  assert.equal(classifyBMI(24.9), "Bình thường");
  assert.equal(classifyBMI(25), "Thừa cân");
  assert.equal(classifyBMI(29.9), "Thừa cân");
  assert.equal(classifyBMI(30), "Béo phì");
});
