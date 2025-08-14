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
    <form
      onSubmit={handleSubmit}
      className="bg-neutral-800 shadow-lg rounded-lg p-6 max-w-3xl mx-auto border border-neutral-700"
    >
      <TextField
        label="Name"
        value={formData.name}
        onChange={handleChange("name")}
        error={errors.name}
      />
      <TextField
        label="E-mail"
        value={formData.email}
        onChange={handleChange("email")}
        error={errors.email}
      />
      <RadioGroup
        label="Choose your favorite movie"
        options={movies}
        value={formData.selectedMovie}
        onChange={handleChange("selectedMovie")}
        error={errors.movie}
      />
      <div className="mb-4">
        <label className="block font-medium mb-1 text-amber-400">Additional comments (Option)</label>
        <textarea
          value={formData.comment}
          onChange={handleChange("comment")}
          className="w-full px-3 py-2 border border-neutral-700 rounded-md bg-neutral-900 text-white focus:outline-none focus:ring-2 focus:ring-amber-300"
        />
      </div>
      <div className="flex gap-3">
        <button
          type="submit"
          className="cursor-pointer bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition"
        >
          Submit
        </button>
        <button
          type="button"
          onClick={handleReset}
          className="cursor-pointer bg-neutral-600 hover:bg-neutral-700 text-white px-4 py-2 rounded-md transition"
        >
          Reset
        </button>
      </div>
    </form>
  );
}
