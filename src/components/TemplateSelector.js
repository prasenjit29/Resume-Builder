import React from 'react';
import './TemplateSelector.css';

const TemplateSelector = ({ onTemplateSelect }) => {
  const templates = [
    {
      id: 'modern',
      name: 'Modern Professional',
      description: 'Clean, contemporary design with subtle colors and modern typography',
      preview: '🎨',
      color: '#667eea',
      features: ['Professional Layout', 'Modern Typography', 'Subtle Colors', 'ATS Friendly']
    },
    {
      id: 'classic',
      name: 'Classic Traditional',
      description: 'Timeless design with traditional formatting and professional appearance',
      preview: '📋',
      color: '#2c3e50',
      features: ['Traditional Format', 'Professional Style', 'Clean Lines', 'Industry Standard']
    },
    {
      id: 'creative',
      name: 'Creative Portfolio',
      description: 'Bold and creative design perfect for designers and creative professionals',
      preview: '✨',
      color: '#e83e8c',
      features: ['Creative Layout', 'Bold Design', 'Visual Appeal', 'Portfolio Style']
    },
    {
      id: 'minimal',
      name: 'Minimal Clean',
      description: 'Ultra-clean design with maximum whitespace and minimal distractions',
      preview: '⚪',
      color: '#6c757d',
      features: ['Minimal Design', 'Maximum Whitespace', 'Clean Typography', 'Focus on Content']
    },
    {
      id: 'tech',
      name: 'Tech Developer',
      description: 'Modern tech-focused design with code-inspired elements',
      preview: '💻',
      color: '#28a745',
      features: ['Tech-Focused', 'Code-Inspired', 'Developer Friendly', 'Modern Tech']
    },
    {
      id: 'executive',
      name: 'Executive Premium',
      description: 'Premium design with sophisticated styling for senior professionals',
      preview: '👔',
      color: '#fd7e14',
      features: ['Premium Design', 'Executive Style', 'Sophisticated Layout', 'Senior Level']
    }
  ];

  return (
    <div className="template-selector">
      <div className="selector-header">
        <h1>Choose Your Resume Template</h1>
        <p>Select a template that best represents your professional style</p>
      </div>
      
      <div className="templates-grid">
        {templates.map((template) => (
          <div 
            key={template.id} 
            className="template-card"
            onClick={() => onTemplateSelect(template.id)}
          >
            <div className="template-preview" style={{ backgroundColor: template.color }}>
              <span className="preview-icon">{template.preview}</span>
            </div>
            <div className="template-info">
              <h3 className="template-name">{template.name}</h3>
              <p className="template-description">{template.description}</p>
              <div className="template-features">
                {template.features.map((feature, index) => (
                  <span key={index} className="feature-tag">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
            <div className="select-overlay">
              <span className="select-text">Select Template</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="selector-footer">
        <p>You can customize colors and styling after selecting a template</p>
      </div>
    </div>
  );
};

export default TemplateSelector;
