# Translation Guide - JSON Key-Value Structure

This project now uses **next-i18next** with JSON files for all translations. All text content is stored as key-value pairs in JSON files located in `/public/locales/`.

## File Structure

```
public/
  locales/
    en/
      common.json    # English translations
    kh/
      common.json    # Khmer translations
```

## JSON Structure

### English (`/public/locales/en/common.json`)
```json
{
  "navigation": {
    "home": "KHMER HEIRS ASSOCIATION",
    "about": "About Us",
    "education": "Education",
    "leader": "KHA Leader",
    "event": "Event",
    "contact": "Contact Us"
  },
  "home": {
    "welcome": "WELCOME TO KHMER HEIRS ASSOCIATION",
    "description": "A group of Khmer intellectual students...",
    "features": {
      "feature1": "The Khmer Heirs Association is...",
      "feature2": "Khmer Heirs work to build...",
      "feature3": "SERVICEBOX offers a wide range..."
    }
  },
  "footer": {
    "name": "Khmer Heirs Association",
    "addressLabel": "Address",
    "address": "No. 82ឈ, Dirt Road...",
    "links": "Links",
    "about": "About",
    "leader": "KHA Leader",
    "education": "Education",
    "contact": "Contact",
    "followUs": "Follow Us"
  }
}
```

### Khmer (`/public/locales/kh/common.json`)
```json
{
  "navigation": {
    "home": "សមាគមទាយាទខ្មែរ",
    "about": "អំពីពួកយើង",
    "education": "ការសិក្សា",
    "leader": "ថ្នាក់ដឹកនាំសមាគម",
    "event": "ព្រឹត្តិការណ៍",
    "contact": "ទំនាក់ទំនង"
  },
  "home": {
    "welcome": "សូមស្វាគមន៍មកកាន់ សមាគមទាយាទខ្មែរ",
    "description": "និស្សិត បញ្ញវន្តខ្មែរ...",
    "features": {
      "feature1": "សមាគមទាយាទខ្មែរ ជាអង្គការមិនមែនរដ្ឋាភិបាល...",
      "feature2": "ទាយាទខ្មែរ ធ្វើអ្វីៗដើម្បីកសាង...",
      "feature3": "SERVICEBOX ផ្តល់ជូននូវផលិតផល..."
    }
  },
  "footer": {
    "name": "សមាគមទាយាទខ្មែរ",
    "addressLabel": "អាសយដ្ឋាន",
    "address": "អាសយដ្ឋាន៖ អាគារ ៨២ឈ...",
    "links": "តំណភ្ជាប់",
    "about": "អំពីយើង",
    "leader": "ប្រធានសមាគម",
    "education": "ការសិក្សា",
    "contact": "ទំនាក់ទំនង",
    "followUs": "តាមដានយើង"
  }
}
```

## How to Add New Translations

### 1. Add New Keys to JSON Files

**Step 1:** Add the new key-value pair to both language files:

**English (`/public/locales/en/common.json`):**
```json
{
  "navigation": {
    "home": "KHMER HEIRS ASSOCIATION",
    "about": "About Us",
    "newPage": "New Page"  // ← Add new key here
  },
  "newSection": {  // ← Add new section
    "title": "New Section Title",
    "description": "This is a new section description"
  }
}
```

**Khmer (`/public/locales/kh/common.json`):**
```json
{
  "navigation": {
    "home": "សមាគមទាយាទខ្មែរ",
    "about": "អំពីពួកយើង",
    "newPage": "ទំព័រថ្មី"  // ← Add new key here
  },
  "newSection": {  // ← Add new section
    "title": "ចំណងជើងផ្នែកថ្មី",
    "description": "នេះជាការពិពណ៌នាផ្នែកថ្មី"
  }
}
```

### 2. Use in Components

**Step 2:** Use the translation in your React components:

```jsx
import { useTranslation } from 'react-i18next';

function MyComponent() {
  const { t } = useTranslation('common');
  
  return (
    <div>
      <h1>{t('newSection.title')}</h1>
      <p>{t('newSection.description')}</p>
      <Link href="/new-page">
        {t('navigation.newPage')}
      </Link>
    </div>
  );
}
```

## Key Naming Conventions

### 1. **Hierarchical Structure**
- Use dots (`.`) to separate nested levels
- Example: `navigation.home`, `footer.links.about`

### 2. **Naming Patterns**
- **Sections**: Use camelCase (`home`, `navigation`, `footer`)
- **Keys**: Use camelCase (`welcome`, `addressLabel`, `followUs`)
- **Nested**: Use dots (`home.welcome`, `footer.links.about`)

### 3. **Common Patterns**
```json
{
  "section": {
    "title": "Section Title",
    "description": "Section description",
    "button": "Button Text",
    "placeholder": "Input placeholder",
    "error": "Error message",
    "success": "Success message"
  }
}
```

## Advanced Features

### 1. **Interpolation** (Dynamic Values)
```json
{
  "welcome": "Welcome {{name}}!",
  "itemCount": "You have {{count}} items"
}
```

```jsx
// Usage in component
<h1>{t('welcome', { name: 'John' })}</h1>
<p>{t('itemCount', { count: 5 })}</p>
```

### 2. **Pluralization**
```json
{
  "items": "{{count}} item",
  "items_plural": "{{count}} items"
}
```

### 3. **Namespaces** (Multiple Files)
You can create multiple translation files:

```
public/locales/
  en/
    common.json      # General translations
    forms.json       # Form-specific translations
    errors.json      # Error messages
  kh/
    common.json
    forms.json
    errors.json
```

```jsx
// Use different namespaces
const { t: tCommon } = useTranslation('common');
const { t: tForms } = useTranslation('forms');
const { t: tErrors } = useTranslation('errors');
```

## Best Practices

### 1. **Keep Keys Consistent**
- Always add the same key to both language files
- Use the same structure in both files

### 2. **Use Descriptive Keys**
```json
// ✅ Good
"navigation.home": "Home"
"form.submitButton": "Submit"

// ❌ Avoid
"nav1": "Home"
"btn1": "Submit"
```

### 3. **Group Related Content**
```json
{
  "userProfile": {
    "title": "User Profile",
    "name": "Name",
    "email": "Email",
    "save": "Save Changes"
  }
}
```

### 4. **Test Both Languages**
- Always test with both English and Khmer
- Ensure all keys exist in both files
- Check for missing translations

## Current Translation Keys

### Navigation
- `navigation.home` - Main site title
- `navigation.about` - About page link
- `navigation.education` - Education page link
- `navigation.leader` - Leadership page link
- `navigation.event` - Events page link
- `navigation.contact` - Contact page link

### Home Page
- `home.welcome` - Welcome heading
- `home.description` - Main description
- `home.features.feature1` - First feature description
- `home.features.feature2` - Second feature description
- `home.features.feature3` - Third feature description

### Footer
- `footer.name` - Organization name
- `footer.addressLabel` - Address section title
- `footer.address` - Full address
- `footer.links` - Links section title
- `footer.about` - About link
- `footer.leader` - Leader link
- `footer.education` - Education link
- `footer.contact` - Contact link
- `footer.followUs` - Social media section title

This structure makes it easy to manage translations, add new languages, and maintain consistency across the application!
