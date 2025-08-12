import React from 'react';
import './ResumePreview.css';

const ResumePreview = ({ resumeData }) => {
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short' 
    });
  };

  const formatDateRange = (startDate, endDate) => {
    const start = formatDate(startDate);
    const end = endDate ? formatDate(endDate) : 'Present';
    return `${start} - ${end}`;
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
    <div className="resume-preview">
      <div className="preview-header">
        <h3>Resume Preview</h3>
        <button 
          className="print-btn"
          onClick={() => window.print()}
        >
          Print Resume
        </button>
      </div>
      
      <div className="resume-content">
        {/* Header Section */}
        <div className="resume-header">
          <h1 className="resume-name">
            {resumeData.personalInfo.firstName} {resumeData.personalInfo.lastName}
          </h1>
          
          <div className="contact-info">
            {resumeData.personalInfo.email && (
              <div className="contact-item">
                <span className="contact-label">Email:</span>
                <span>{resumeData.personalInfo.email}</span>
              </div>
            )}
            
            {resumeData.personalInfo.phone && (
              <div className="contact-item">
                <span className="contact-label">Phone:</span>
                <span>{resumeData.personalInfo.phone}</span>
              </div>
            )}
            
            {resumeData.personalInfo.address && (
              <div className="contact-item">
                <span className="contact-label">Address:</span>
                <span>{resumeData.personalInfo.address}</span>
              </div>
            )}
            
            {resumeData.personalInfo.linkedin && (
              <div className="contact-item">
                <span className="contact-label">LinkedIn:</span>
                <span>{resumeData.personalInfo.linkedin}</span>
              </div>
            )}
          </div>
        </div>

        {/* Summary Section */}
        {resumeData.personalInfo.summary && (
          <div className="resume-section">
            <h2>Professional Summary</h2>
            <p className="summary-text">{resumeData.personalInfo.summary}</p>
          </div>
        )}

        {/* Experience Section */}
        {resumeData.experience.length > 0 && resumeData.experience[0].company && (
          <div className="resume-section">
            <h2>Professional Experience</h2>
            {resumeData.experience.map((exp, index) => (
              <div key={exp.id} className="experience-entry">
                <div className="experience-header">
                  <h3 className="job-title">{exp.position}</h3>
                  <span className="company-name">{exp.company}</span>
                  <span className="date-range">
                    {formatDateRange(exp.startDate, exp.endDate)}
                  </span>
                </div>
                {exp.description && (
                  <p className="job-description">{exp.description}</p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Education Section */}
        {resumeData.education.length > 0 && resumeData.education[0].institution && (
          <div className="resume-section">
            <h2>Education</h2>
            {resumeData.education.map((edu, index) => (
              <div key={edu.id} className="education-entry">
                <div className="education-header">
                  <h3 className="degree-title">
                    {edu.degree} {edu.field && `in ${edu.field}`}
                  </h3>
                  <span className="institution-name">{edu.institution}</span>
                  <span className="date-range">
                    {formatDateRange(edu.startDate, edu.endDate)}
                  </span>
                </div>
                {edu.gpa && (
                  <p className="gpa">GPA: {edu.gpa}</p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Skills Section */}
        {resumeData.skills.length > 0 && (
          <div className="resume-section">
            <h2>Technical Skills</h2>
            {skillCategories.map(category => {
              const categorySkills = getSkillsByCategory(category.key);
              if (categorySkills.length === 0) return null;
              
              return (
                <div key={category.key} className="skill-category-preview">
                  <h3 className="category-title-preview" style={{ color: category.color }}>
                    {category.icon} {category.label}
                  </h3>
                  <div className="skills-grid">
                    {categorySkills.map((skill) => (
                      <span 
                        key={skill.id} 
                        className="skill-item"
                        style={{ backgroundColor: category.color }}
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Empty State */}
        {!resumeData.personalInfo.firstName && 
         !resumeData.personalInfo.lastName && 
         resumeData.experience.length === 0 && 
         resumeData.education.length === 0 && 
         resumeData.skills.length === 0 && (
          <div className="empty-state">
            <div className="empty-icon">📝</div>
            <h3>Start Building Your Resume</h3>
            <p>Fill out the form on the left to see your resume preview here.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumePreview;
