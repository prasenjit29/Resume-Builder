# Resume Builder

A modern, responsive web application for creating professional resumes with a beautiful user interface and real-time preview.

## Features

### ✨ **Comprehensive Resume Sections**
- **Personal Information**: Name, contact details, address, LinkedIn, and professional summary
- **Work Experience**: Company, position, dates, and detailed job descriptions
- **Education**: Institution, degree, field of study, dates, and GPA
- **Skills**: Dynamic skill tags with easy add/remove functionality

### 🎨 **Modern UI/UX**
- Clean, professional design with smooth animations
- Tabbed interface for easy navigation between sections
- Responsive design that works on all devices
- Real-time preview as you type

### 📱 **Responsive Design**
- Mobile-first approach
- Optimized for desktop, tablet, and mobile devices
- Touch-friendly interface

### 🖨️ **Print-Ready**
- Professional resume formatting
- Print-optimized styles
- Clean, ATS-friendly layout

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd resumebuilder
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
```

## Usage

### Creating Your Resume

1. **Start with Personal Information**
   - Fill in your name, contact details, and professional summary
   - Add your LinkedIn profile and address

2. **Add Work Experience**
   - Click "Add Experience" to add new job entries
   - Include company name, position, dates, and descriptions
   - Remove entries you don't need

3. **Include Education**
   - Add your educational background
   - Include institution, degree, field of study, and dates
   - Add GPA if relevant

4. **List Your Skills**
   - Type skills and press Enter or click "Add Skill"
   - Remove skills by clicking the × button
   - Skills are displayed as attractive tags

### Preview and Print

- See your resume update in real-time on the right side
- Use the "Print Resume" button to print or save as PDF
- The print version is optimized for professional use

## Technology Stack

- **Frontend**: React 19
- **Styling**: CSS3 with modern features
- **Build Tool**: Create React App
- **Responsive Design**: CSS Grid and Flexbox
- **Print Support**: CSS Print Media Queries

## Project Structure

```
src/
├── components/
│   ├── ResumeForm.js          # Form component with tabs
│   ├── ResumeForm.css         # Form styling
│   ├── ResumePreview.js       # Resume preview component
│   └── ResumePreview.css      # Preview styling
├── App.js                     # Main application component
├── App.css                    # Main application styling
└── index.js                   # Application entry point
```

## Customization

### Adding New Sections
The application is designed to be easily extensible. You can add new resume sections by:

1. Adding new state properties in `App.js`
2. Creating new form components
3. Updating the preview component
4. Adding corresponding CSS styles

### Styling
- Colors and themes can be modified in the CSS files
- The design uses CSS custom properties for easy theming
- Print styles are optimized for professional output

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you encounter any issues or have questions:
- Check the browser console for errors
- Ensure all dependencies are properly installed
- Verify you're using a supported Node.js version

---

**Happy Resume Building!** 🚀
