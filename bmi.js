// Logic tính BMI, tách riêng khỏi giao diện để dễ test.

function calculateBMI(weightKg, heightCm) {
  if (!(weightKg > 0) || !(heightCm > 0)) {
    throw new Error("Cân nặng và chiều cao phải là số dương");
  }
  const heightM = heightCm / 100;
  return weightKg / (heightM * heightM);
}

// Phân loại theo chuẩn WHO
function classifyBMI(bmi) {
  if (bmi < 18.5) return "Thiếu cân";
  if (bmi < 25) return "Bình thường";
  if (bmi < 30) return "Thừa cân";
  return "Béo phì";
}

// Trình duyệt không có `module`, Node (khi chạy test) thì có
if (typeof module !== "undefined") {
  module.exports = { calculateBMI, classifyBMI };
}
