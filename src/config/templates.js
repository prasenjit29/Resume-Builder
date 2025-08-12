export const templates = {
  modern: {
    name: 'Modern Professional',
    colors: {
      primary: '#667eea',
      secondary: '#764ba2',
      accent: '#f093fb',
      text: '#2c3e50',
      textLight: '#6c757d',
      background: '#ffffff',
      sectionBg: '#f8f9fa'
    },
    typography: {
      nameSize: '2.2rem',
      sectionSize: '1.3rem',
      bodySize: '0.95rem',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
    },
    spacing: {
      sectionMargin: '1.5rem',
      itemMargin: '1rem',
      padding: '1.5rem'
    },
    borders: {
      sectionBorder: '2px solid #e9ecef',
      accentBorder: '3px solid #667eea'
    }
  },
  
  classic: {
    name: 'Classic Traditional',
    colors: {
      primary: '#2c3e50',
      secondary: '#34495e',
      accent: '#3498db',
      text: '#2c3e50',
      textLight: '#7f8c8d',
      background: '#ffffff',
      sectionBg: '#f8f9fa'
    },
    typography: {
      nameSize: '2.4rem',
      sectionSize: '1.4rem',
      bodySize: '1rem',
      fontFamily: "'Georgia', 'Times New Roman', serif"
    },
    spacing: {
      sectionMargin: '2rem',
      itemMargin: '1.25rem',
      padding: '2rem'
    },
    borders: {
      sectionBorder: '1px solid #bdc3c7',
      accentBorder: '2px solid #2c3e50'
    }
  },
  
  creative: {
    name: 'Creative Portfolio',
    colors: {
      primary: '#e83e8c',
      secondary: '#fd79a8',
      accent: '#fdcb6e',
      text: '#2d3436',
      textLight: '#636e72',
      background: '#ffffff',
      sectionBg: '#f8f9fa'
    },
    typography: {
      nameSize: '2.6rem',
      sectionSize: '1.5rem',
      bodySize: '0.95rem',
      fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, sans-serif"
    },
    spacing: {
      sectionMargin: '1.75rem',
      itemMargin: '1.1rem',
      padding: '1.75rem'
    },
    borders: {
      sectionBorder: '2px solid #fd79a8',
      accentBorder: '4px solid #e83e8c'
    }
  },
  
  minimal: {
    name: 'Minimal Clean',
    colors: {
      primary: '#6c757d',
      secondary: '#495057',
      accent: '#adb5bd',
      text: '#212529',
      textLight: '#6c757d',
      background: '#ffffff',
      sectionBg: '#ffffff'
    },
    typography: {
      nameSize: '2rem',
      sectionSize: '1.2rem',
      bodySize: '0.9rem',
      fontFamily: "'Roboto', -apple-system, BlinkMacSystemFont, sans-serif"
    },
    spacing: {
      sectionMargin: '2.5rem',
      itemMargin: '1.5rem',
      padding: '2.5rem'
    },
    borders: {
      sectionBorder: '1px solid #e9ecef',
      accentBorder: '1px solid #6c757d'
    }
  },
  
  tech: {
    name: 'Tech Developer',
    colors: {
      primary: '#28a745',
      secondary: '#20c997',
      accent: '#17a2b8',
      text: '#1a1a1a',
      textLight: '#495057',
      background: '#ffffff',
      sectionBg: '#f8f9fa'
    },
    typography: {
      nameSize: '2.3rem',
      sectionSize: '1.35rem',
      bodySize: '0.95rem',
      fontFamily: "'Fira Code', 'Monaco', 'Consolas', monospace"
    },
    spacing: {
      sectionMargin: '1.6rem',
      itemMargin: '1.1rem',
      padding: '1.6rem'
    },
    borders: {
      sectionBorder: '2px solid #e9ecef',
      accentBorder: '3px solid #28a745'
    }
  },
  
  executive: {
    name: 'Executive Premium',
    colors: {
      primary: '#fd7e14',
      secondary: '#e83e8c',
      accent: '#6f42c1',
      text: '#1a1a1a',
      textLight: '#495057',
      background: '#ffffff',
      sectionBg: '#f8f9fa'
    },
    typography: {
      nameSize: '2.8rem',
      sectionSize: '1.6rem',
      bodySize: '1.05rem',
      fontFamily: "'Playfair Display', 'Georgia', serif"
    },
    spacing: {
      sectionMargin: '2.2rem',
      itemMargin: '1.4rem',
      padding: '2.2rem'
    },
    borders: {
      sectionBorder: '2px solid #e9ecef',
      accentBorder: '4px solid #fd7e14'
    }
  }
};

export const getTemplate = (templateId) => {
  return templates[templateId] || templates.modern;
};
