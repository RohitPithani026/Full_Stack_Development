// src/components/ResumeBuilder.js
import React, { useState } from "react";
import './ResumeBuilder.css';

const ResumeBuilder = () => {
  const [resumeData, setResumeData] = useState({
    summary: "",
    education: "",
    skills: "",
    experience: "",
    careerObjective: "",
    achievements: ""
  });

  const handleChange = (e) => {
    setResumeData({ ...resumeData, [e.target.name]: e.target.value });
  };

  return (
    <div className="resume-builder">
      <h2>Resume Builder</h2>
      <form>
        <div>
          <label>Professional Summary:</label>
          <textarea name="summary" value={resumeData.summary} onChange={handleChange} />
        </div>
        <div>
          <label>Education:</label>
          <input type="text" name="education" value={resumeData.education} onChange={handleChange} />
        </div>
        <div>
          <label>Skills:</label>
          <input type="text" name="skills" value={resumeData.skills} onChange={handleChange} />
        </div>
        <div>
          <label>Experience:</label>
          <textarea name="experience" value={resumeData.experience} onChange={handleChange} />
        </div>
        <div>
          <label>Career Objective:</label>
          <textarea name="careerObjective" value={resumeData.careerObjective} onChange={handleChange} />
        </div>
        <div>
          <label>Achievements:</label>
          <textarea name="achievements" value={resumeData.achievements} onChange={handleChange} />
        </div>
      </form>

      <h3>Resume Preview</h3>
      <div className="resume-preview">
        <p><strong>Summary:</strong> {resumeData.summary}</p>
        <p><strong>Education:</strong> {resumeData.education}</p>
        <p><strong>Skills:</strong> {resumeData.skills}</p>
        <p><strong>Experience:</strong> {resumeData.experience}</p>
        <p><strong>Career Objective:</strong> {resumeData.careerObjective}</p>
        <p><strong>Achievements:</strong> {resumeData.achievements}</p>
      </div>
    </div>
  );
};

export default ResumeBuilder;
