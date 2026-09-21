// Xử lý giao diện: đọc input, gọi hàm tính BMI, hiển thị kết quả.

const form = document.getElementById("bmi-form");
const result = document.getElementById("result");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const weight = Number(form.elements.weight.value);
  const height = Number(form.elements.height.value);

  try {
    const bmi = calculateBMI(weight, height);
    result.textContent = `BMI: ${bmi.toFixed(1)} - ${classifyBMI(bmi)}`;
  } catch (error) {
    result.textContent = error.message;
  }
});
