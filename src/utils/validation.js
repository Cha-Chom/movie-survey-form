export const validateForm = (formData) => {
  const errors = {};
  if (!formData.name.trim()) {
    errors.name = "โปรดใส่ชื่อของคุณ";
  }
  if (!formData.email.trim()) {
    errors.email = "โปรดใส่อีเมลของคุณ";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = "รูปแบบอีเมลไม่ถูกต้อง";
  }
  if (!formData.selectedMovie) {
    errors.movie = "กรุณาเลือกหนังที่คุณชอบ";
  }
  return errors;
};
