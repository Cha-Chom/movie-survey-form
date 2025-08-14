export const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export const validateForm = ({ name, email, selectedMovie }) => {
  const errors = {};
  if (!name.trim()) errors.name = "โปรดใส่ชื่อของคุณ";
  if (!email.trim()) {
    errors.email = "โปรดใส่อีเมลของคุณ";
  } else if (!validateEmail(email)) {
    errors.email = "รูปแบบอีเมลไม่ถูกต้อง";
  }
  if (!selectedMovie) errors.movie = "กรุณาเลือกหนังที่คุณชอบ";
  return errors;
};
