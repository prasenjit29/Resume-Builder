import React, { useState } from 'react';
import './ResumeForm.css';

const ResumeForm = ({ resumeData, updateResumeData }) => {
  const [activeSection, setActiveSection] = useState('personal');
  const [newSkill, setNewSkill] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('programming');

  const updatePersonalInfo = (field, value) => {
    updateResumeData('personalInfo', {
      ...resumeData.personalInfo,
      [field]: value
    });
  };

  const addExperience = () => {
    const newExperience = {
      id: Date.now(),
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      description: ''
    };
    updateResumeData('experience', [...resumeData.experience, newExperience]);
  };

  const updateExperience = (id, field, value) => {
    const updatedExperience = resumeData.experience.map(exp => 
      exp.id === id ? { ...exp, [field]: value } : exp
    );
    updateResumeData('experience', updatedExperience);
  };

  const removeExperience = (id) => {
    const updatedExperience = resumeData.experience.filter(exp => exp.id !== id);
    updateResumeData('experience', updatedExperience);
  };

  const addEducation = () => {
    const newEducation = {
      id: Date.now(),
      institution: '',
      degree: '',
      field: '',
      startDate: '',
      endDate: ''
    };
    updateResumeData('education', [...resumeData.education, newEducation]);
  };

  const updateEducation = (id, field, value) => {
    const updatedEducation = resumeData.education.map(edu => 
      edu.id === id ? { ...edu, [field]: value } : edu
    );
    updateResumeData('education', updatedEducation);
  };

  const removeEducation = (id) => {
    const updatedEducation = resumeData.education.filter(edu => edu.id !== id);
    updateResumeData('education', updatedEducation);
  };

  const addSkill = (skill, category) => {
    if (skill.trim()) {
      const skillWithCategory = {
        id: Date.now(),
        name: skill.trim(),
        category: category
      };
      
      // Check if skill already exists in this category
      const skillExists = resumeData.skills.some(s => 
        s.name.toLowerCase() === skill.trim().toLowerCase() && s.category === category
      );
      
      if (!skillExists) {
        updateResumeData('skills', [...resumeData.skills, skillWithCategory]);
      }
    }
  };

  const removeSkill = (skillId) => {
    updateResumeData('skills', resumeData.skills.filter(skill => skill.id !== skillId));
  };

  const handleSkillSubmit = (e) => {
    e.preventDefault();
    addSkill(newSkill, selectedCategory);
    setNewSkill('');
  };

  const getSkillsByCategory = (category) => {
    return resumeData.skills.filter(skill => skill.category === category);
  };

  const skillCategories = [
    { key: 'programming', label: 'Programming Languages', color: '#667eea', icon: '💻' },
    { key: 'frontend', label: 'Frontend Development', color: '#28a745', icon: '🎨' },
    { key: 'backend', label: 'Backend Development', color: '#dc3545', icon: '⚙️' },
    { key: 'database', label: 'Databases', color: '#fd7e14', icon: '🗄️' },
    { key: 'cloud', label: 'Cloud Platforms', color: '#6f42c1', icon: '☁️' },
    { key: 'devops', label: 'DevOps & Tools', color: '#20c997', icon: '🔧' },
    { key: 'mobile', label: 'Mobile Development', color: '#e83e8c', icon: '📱' },
    { key: 'ai-ml', label: 'AI & Machine Learning', color: '#17a2b8', icon: '🤖' },
    { key: 'cybersecurity', label: 'Cybersecurity', color: '#ffc107', icon: '🔒' },
    { key: 'networking', label: 'Networking', color: '#6c757d', icon: '🌐' },
    { key: 'testing', label: 'Testing & QA', color: '#fd7e14', icon: '🧪' },
    { key: 'data', label: 'Data Science', color: '#20c997', icon: '📊' },
    { key: 'blockchain', label: 'Blockchain', color: '#6f42c1', icon: '⛓️' },
    { key: 'game-dev', label: 'Game Development', color: '#e83e8c', icon: '🎮' },
    { key: 'ui-ux', label: 'UI/UX Design', color: '#fd7e14', icon: '🎯' },
    { key: 'agile', label: 'Agile & Methodologies', color: '#17a2b8', icon: '📋' }
  ];

  return (
    <div className="resume-form">
      <div className="form-tabs">
        <button 
          className={`tab ${activeSection === 'personal' ? 'active' : ''}`}
          onClick={() => setActiveSection('personal')}
        >
          Personal Info
        </button>
        <button 
          className={`tab ${activeSection === 'experience' ? 'active' : ''}`}
          onClick={() => setActiveSection('experience')}
        >
          Experience
        </button>
        <button 
          className={`tab ${activeSection === 'education' ? 'active' : ''}`}
          onClick={() => setActiveSection('education')}
        >
          Education
        </button>
        <button 
          className={`tab ${activeSection === 'skills' ? 'active' : ''}`}
          onClick={() => setActiveSection('skills')}
        >
          Skills
        </button>
      </div>

      <div className="form-content">
        {activeSection === 'personal' && (
          <div className="section">
            <h3>Personal Information</h3>
            <div className="form-row">
              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  value={resumeData.personalInfo.firstName}
                  onChange={(e) => updatePersonalInfo('firstName', e.target.value)}
                  placeholder="Enter your first name"
                />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  value={resumeData.personalInfo.lastName}
                  onChange={(e) => updatePersonalInfo('lastName', e.target.value)}
                  placeholder="Enter your last name"
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  value={resumeData.personalInfo.email}
                  onChange={(e) => updatePersonalInfo('email', e.target.value)}
                  placeholder="Enter your email"
                />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input
                  type="tel"
                  value={resumeData.personalInfo.phone}
                  onChange={(e) => updatePersonalInfo('phone', e.target.value)}
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            <div className="form-group">
              <label>Address</label>
              <input
                type="text"
                value={resumeData.personalInfo.address}
                onChange={(e) => updatePersonalInfo('address', e.target.value)}
                placeholder="Enter your address"
              />
            </div>

            <div className="form-group">
              <label>LinkedIn</label>
              <input
                type="url"
                value={resumeData.personalInfo.linkedin}
                onChange={(e) => updatePersonalInfo('linkedin', e.target.value)}
                placeholder="Enter your LinkedIn profile URL"
              />
            </div>

            <div className="form-group">
              <label>GitHub</label>
              <input
                type="url"
                value={resumeData.personalInfo.github}
                onChange={(e) => updatePersonalInfo('github', e.target.value)}
                placeholder="Enter your GitHub profile URL"
              />
            </div>

            <div className="form-group">
              <label>Professional Summary</label>
              <textarea
                value={resumeData.personalInfo.summary}
                onChange={(e) => updatePersonalInfo('summary', e.target.value)}
                placeholder="Write a brief professional summary..."
                rows="4"
              />
            </div>
          </div>
        )}

        {activeSection === 'experience' && (
          <div className="section">
            <div className="section-header">
              <h3>Work Experience</h3>
              <button className="add-btn" onClick={addExperience}>
                + Add Experience
              </button>
            </div>
            
            {resumeData.experience.map((exp, index) => (
              <div key={exp.id} className="experience-item">
                <div className="item-header">
                  <h4>Experience #{index + 1}</h4>
                  {resumeData.experience.length > 1 && (
                    <button 
                      className="remove-btn"
                      onClick={() => removeExperience(exp.id)}
                    >
                      Remove
                    </button>
                  )}
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label>Company</label>
                    <input
                      type="text"
                      value={exp.company}
                      onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                      placeholder="Enter company name"
                    />
                  </div>
                  <div className="form-group">
                    <label>Position</label>
                    <input
                      type="text"
                      value={exp.position}
                      onChange={(e) => updateExperience(exp.id, 'position', e.target.value)}
                      placeholder="Enter job title"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Start Date</label>
                    <input
                      type="date"
                      value={exp.startDate}
                      onChange={(e) => updateExperience(exp.id, 'startDate', e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>End Date</label>
                    <input
                      type="date"
                      value={exp.endDate}
                      onChange={(e) => updateExperience(exp.id, 'endDate', e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Description</label>
                  <textarea
                    value={exp.description}
                    onChange={(e) => updateExperience(exp.id, 'description', e.target.value)}
                    placeholder="Describe your responsibilities and achievements..."
                    rows="3"
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {activeSection === 'education' && (
          <div className="section">
            <div className="section-header">
              <h3>Education</h3>
              <button className="add-btn" onClick={addEducation}>
                + Add Education
              </button>
            </div>
            
            {resumeData.education.map((edu, index) => (
              <div key={edu.id} className="education-item">
                <div className="item-header">
                  <h4>Education #{index + 1}</h4>
                  {resumeData.education.length > 1 && (
                    <button 
                      className="remove-btn"
                      onClick={() => removeEducation(edu.id)}
                    >
                      Remove
                    </button>
                  )}
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label>Institution</label>
                    <input
                      type="text"
                      value={edu.institution}
                      onChange={(e) => updateEducation(edu.id, 'institution', e.target.value)}
                      placeholder="Enter institution name"
                    />
                  </div>
                  <div className="form-group">
                    <label>Degree</label>
                    <input
                      type="text"
                      value={edu.degree}
                      onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                      placeholder="e.g., Bachelor's, Master's"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Field of Study</label>
                    <input
                      type="text"
                      value={edu.field}
                      onChange={(e) => updateEducation(edu.id, 'field', e.target.value)}
                      placeholder="e.g., Computer Science"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Start Date</label>
                    <input
                      type="date"
                      value={edu.startDate}
                      onChange={(e) => updateEducation(edu.id, 'startDate', e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>End Date</label>
                    <input
                      type="date"
                      value={edu.endDate}
                      onChange={(e) => updateEducation(edu.id, 'endDate', e.target.value)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeSection === 'skills' && (
          <div className="section">
            <h3>Skills</h3>
            
            <form onSubmit={handleSkillSubmit} className="skill-form">
              <div className="skill-input-group">
                <select 
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="category-select"
                >
                  {skillCategories.map(category => (
                    <option key={category.key} value={category.key}>
                      {category.icon} {category.label}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  placeholder="Enter a skill"
                  className="skill-input"
                />
                <button type="submit" className="add-skill-btn">
                  Add Skill
                </button>
              </div>
            </form>

            {skillCategories.map(category => {
              const categorySkills = getSkillsByCategory(category.key);
              if (categorySkills.length === 0) return null;
              
              return (
                <div key={category.key} className="skill-category">
                  <h4 className="category-title" style={{ color: category.color }}>
                    {category.icon} {category.label}
                  </h4>
                  <div className="skills-list">
                    {categorySkills.map((skill) => (
                      <div 
                        key={skill.id} 
                        className="skill-tag"
                        style={{ backgroundColor: category.color }}
                      >
                        <span>{skill.name}</span>
                        <button 
                          onClick={() => removeSkill(skill.id)}
                          className="remove-skill-btn"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumeForm;
