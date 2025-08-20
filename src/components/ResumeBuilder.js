import React, { useState } from 'react';
import '../App.css';
import TemplateSelector from './TemplateSelector';
import ResumeForm from './ResumeForm';
import ResumePreview from './ResumePreview';

function ResumeBuilder() {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [resumeData, setResumeData] = useState({
    personalInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      linkedin: '',
      github: '',
      summary: ''
    },
    experience: [
      {
        id: 1,
        company: '',
        position: '',
        startDate: '',
        endDate: '',
        description: []
      }
    ],
    education: [
      {
        id: 1,
        institution: '',
        degree: '',
        field: '',
        startDate: '',
        endDate: ''
      }
    ],
    skills: []
  });

  const updateResumeData = (section, data) => {
    setResumeData(prev => ({
      ...prev,
      [section]: data
    }));
  };

  const handleTemplateSelect = (templateId) => {
    setSelectedTemplate(templateId);
  };

  const handleBackToTemplates = () => {
    setSelectedTemplate(null);
    setResumeData({
      personalInfo: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        linkedin: '',
        github: '',
        summary: ''
      },
      experience: [
        {
          id: 1,
          company: '',
          position: '',
          startDate: '',
          endDate: '',
          description: []
        }
      ],
      education: [
        {
          id: 1,
          institution: '',
          degree: '',
          field: '',
          startDate: '',
          endDate: ''
        }
      ],
      skills: []
    });
  };

  if (!selectedTemplate) {
    return <TemplateSelector onTemplateSelect={handleTemplateSelect} />;
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="header-content">
          <h1>Resume Builder</h1>
          <p>Template: {selectedTemplate}</p>
          <button className="template-change-btn" onClick={handleBackToTemplates}>
            Change Template
          </button>
        </div>
      </header>
      
      <main className="App-main">
        <div className="container">
          <div className="form-section">
            <ResumeForm 
              resumeData={resumeData} 
              updateResumeData={updateResumeData}
              selectedTemplate={selectedTemplate}
            />
          </div>
          
          <div className="preview-section">
            <ResumePreview 
              resumeData={resumeData}
              selectedTemplate={selectedTemplate}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default ResumeBuilder;
