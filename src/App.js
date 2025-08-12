import React, { useState } from 'react';
import './App.css';
import ResumeForm from './components/ResumeForm';
import ResumePreview from './components/ResumePreview';

function App() {
  const [resumeData, setResumeData] = useState({
    personalInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      linkedin: '',
      summary: ''
    },
    experience: [
      {
        id: 1,
        company: '',
        position: '',
        startDate: '',
        endDate: '',
        description: ''
      }
    ],
    education: [
      {
        id: 1,
        institution: '',
        degree: '',
        field: '',
        startDate: '',
        endDate: '',
        gpa: ''
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

  return (
    <div className="App">
      <header className="App-header">
        <h1>Resume Builder</h1>
        <p>Create your professional resume in minutes</p>
      </header>
      
      <main className="App-main">
        <div className="container">
          <div className="form-section">
            <ResumeForm 
              resumeData={resumeData} 
              updateResumeData={updateResumeData} 
            />
          </div>
          
          <div className="preview-section">
            <ResumePreview resumeData={resumeData} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
