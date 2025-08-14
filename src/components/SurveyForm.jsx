import { useState } from "react";
import TextField from "./TextField";
import RadioGroup from "./RadioGroup";
import { movies } from "../constants/movies";
import { validateForm } from "../utils/validation";

export default function SurveyForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    selectedMovie: "",
    comment: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm(formData);
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      onSubmit(formData);
      setFormData({ name: "", email: "", selectedMovie: "", comment: "" });
    }
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", selectedMovie: "", comment: "" });
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="ชื่อ"
        value={formData.name}
        onChange={handleChange("name")}
        error={errors.name}
      />
      <TextField
        label="อีเมล"
        value={formData.email}
        onChange={handleChange("email")}
        error={errors.email}
      />
      <RadioGroup
        label="เลือกหนังที่คุณชอบ"
        options={movies}
        value={formData.selectedMovie}
        onChange={handleChange("selectedMovie")}
        error={errors.movie}
      />
      <div>
        <label>ความคิดเห็นเพิ่มเติม: </label>
        <textarea value={formData.comment} onChange={handleChange("comment")} />
      </div>
      <button type="submit">ส่งแบบสำรวจ</button>
      <button type="button" onClick={handleReset}>รีเซ็ต</button>
    </form>
  );
}
