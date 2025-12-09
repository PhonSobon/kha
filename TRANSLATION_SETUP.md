# Translation Setup with Custom Language Provider

This project has been configured with internationalization using a custom `LanguageProvider` for both English and Khmer languages.

## Features Implemented

### 1. Translation Configuration
- ✅ Custom `LanguageProvider` with React Context
- ✅ Translation content embedded in components
- ✅ Support for English (`EN`) and Khmer (`KH`) languages
- ✅ Automatic language detection and localStorage persistence

### 2. Responsive Design
- ✅ Mobile-first responsive design
- ✅ Responsive navigation with mobile menu
- ✅ Responsive hero section with different heights for different screen sizes
- ✅ Responsive grid layouts for content sections
- ✅ Responsive typography scaling

### 3. Components Updated
- ✅ **KHANavbar**: Responsive navigation with language switcher
- ✅ **Home Page**: Responsive layout with translation support
- ✅ **KHAFooter**: Responsive footer with translation support
- ✅ **Language Switcher**: Dropdown with flag icons

## File Structure

```
src/
  components/
    LanguageProvider.jsx  # Custom language context provider
    KHANavbar.jsx        # Updated navbar with translations
    KHAFooter.jsx        # Updated footer with translations
    providers.tsx        # App providers wrapper
  app/
    page.js             # Home page with translations
    layout.js           # Root layout
```

## Translation Structure

The translations are embedded directly in the components using a simple object structure:

```javascript
const content = {
  EN: {
    welcome: "WELCOME TO KHMER HEIRS ASSOCIATION",
    desc: "Description text...",
    features: [
      { desc: "Feature 1 description" },
      { desc: "Feature 2 description" }
    ]
  },
  KH: {
    welcome: "សូមស្វាគមន៍មកកាន់ សមាគមទាយាទខ្មែរ",
    desc: "ការពិពណ៌នាអំពីសមាគម...",
    features: [
      { desc: "ការពិពណ៌នាអំពីលក្ខណៈពិសេស ១" },
      { desc: "ការពិពណ៌នាអំពីលក្ខណៈពិសេស ២" }
    ]
  }
};
```

## Usage

### Adding New Translations

1. Add new content to the translation objects in your components
2. Use the language context in your components:

```jsx
import { useLanguage } from './LanguageProvider';

function MyComponent() {
  const { lang } = useLanguage();
  
  const content = {
    EN: { title: "My Title" },
    KH: { title: "ចំណងជើងរបស់ខ្ញុំ" }
  };
  
  return (
    <h1>{content[lang].title}</h1>
  );
}
```

### Language Switching

The language switcher is automatically included in the navbar and allows users to switch between English and Khmer. The selected language is persisted in localStorage.

### Responsive Breakpoints

The project uses Tailwind CSS responsive breakpoints:
- `sm:` - 640px and up
- `md:` - 768px and up  
- `lg:` - 1024px and up
- `xl:` - 1280px and up

## Development

To run the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000` with language detection and switching functionality.

## Production Build

To build for production:

```bash
npm run build
npm start
```

## Browser Support

- Modern browsers with ES6+ support
- Mobile browsers (iOS Safari, Chrome Mobile, etc.)
- Responsive design works on all screen sizes from 320px to 4K displays
