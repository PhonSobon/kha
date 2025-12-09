# Authentication System Guide

This project includes a complete authentication system with login, forgot password, email verification, and password reset functionality. All components are fully translated and responsive.

## 🔐 Authentication Features

### ✅ **Complete Authentication Flow**
- **Login Form** - Secure user authentication
- **Forgot Password** - Password reset request
- **Email Verification** - Account verification system
- **Set New Password** - Password reset completion
- **Admin Dashboard** - Protected admin area
- **Logout** - Secure session termination

### ✅ **Multilingual Support**
- All forms support English and Khmer translations
- Dynamic language switching
- Consistent UI across all languages

### ✅ **Responsive Design**
- Mobile-first approach
- Works on all screen sizes
- Touch-friendly interface

## 📁 File Structure

```
src/
  app/
    login/
      page.jsx                 # Login page
    forgot-password/
      page.jsx                 # Forgot password page
    verify-email/
      page.jsx                 # Email verification page
    reset-password/
      page.jsx                 # Password reset page
    adminForm/
      page.jsx                 # Admin dashboard
  components/
    Auth/
      LoginForm.jsx            # Login form component
      ForgotPasswordForm.jsx   # Forgot password form
      EmailVerification.jsx    # Email verification component
      SetNewPasswordForm.jsx   # Password reset form
public/
  locales/
    en/common.json             # English translations
    kh/common.json             # Khmer translations
```

## 🚀 How to Use

### 1. **Login Process**

**URL:** `/login`

**Demo Credentials:**
- Email: `admin@kha.com`
- Password: `password123`

**Features:**
- Email validation
- Password strength checking
- Remember me functionality
- Error handling
- Loading states

### 2. **Forgot Password**

**URL:** `/forgot-password`

**Features:**
- Email validation
- Success confirmation
- Resend functionality
- Back to login option

### 3. **Email Verification**

**URL:** `/verify-email?token=YOUR_TOKEN&email=user@example.com`

**Features:**
- Token validation
- Success/error states
- Resend verification
- Automatic redirect

### 4. **Password Reset**

**URL:** `/reset-password?token=YOUR_TOKEN&email=user@example.com`

**Features:**
- Token validation
- Password confirmation
- Strength requirements
- Success confirmation

### 5. **Admin Dashboard**

**URL:** `/adminForm`

**Features:**
- Protected route
- User session management
- Dashboard cards
- Account status display
- Logout functionality

## 🔧 Technical Implementation

### **Authentication State Management**

```javascript
// User session stored in localStorage
const user = {
  email: 'admin@kha.com',
  isVerified: true,
  loginTime: '2024-01-01T00:00:00.000Z'
};

localStorage.setItem('user', JSON.stringify(user));
```

### **Form Validation**

```javascript
const validateForm = () => {
  const errors = {};
  
  if (!email) {
    errors.email = t('auth.emailRequired');
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = t('auth.invalidEmail');
  }
  
  if (!password) {
    errors.password = t('auth.passwordRequired');
  } else if (password.length < 6) {
    errors.password = t('auth.passwordTooShort');
  }
  
  return errors;
};
```

### **Translation Usage**

```javascript
import { useTranslation } from 'react-i18next';

function MyComponent() {
  const { t } = useTranslation('common');
  
  return (
    <h1>{t('auth.login')}</h1>
    <p>{t('auth.emailRequired')}</p>
  );
}
```

## 🌐 Translation Keys

### **Authentication Translations**

```json
{
  "auth": {
    "login": "Login",
    "logout": "Logout",
    "email": "Email",
    "password": "Password",
    "forgotPassword": "Forgot Password?",
    "resetPassword": "Reset Password",
    "emailVerified": "Email Verified",
    "passwordUpdated": "Password updated successfully",
    "loginError": "Invalid email or password",
    "emailRequired": "Email is required",
    "passwordRequired": "Password is required",
    "passwordMismatch": "Passwords do not match",
    "passwordTooShort": "Password must be at least 6 characters",
    "invalidEmail": "Please enter a valid email address"
  }
}
```

## 🎨 UI Components

### **Form Components**
- **Input Fields** - Email, password, confirm password
- **Validation** - Real-time error display
- **Loading States** - Button loading indicators
- **Success/Error Messages** - User feedback

### **Navigation**
- **Login Button** - Added to main navbar
- **Protected Routes** - Automatic redirect to login
- **Logout Functionality** - Clear session and redirect

### **Responsive Design**
- **Mobile First** - Optimized for mobile devices
- **Touch Friendly** - Large buttons and inputs
- **Flexible Layout** - Adapts to all screen sizes

## 🔒 Security Features

### **Client-Side Security**
- Form validation
- Input sanitization
- Session management
- Protected routes

### **Mock Authentication**
- Demo credentials provided
- Simulated API calls
- Local storage sessions
- Token-based verification

## 🚦 User Flow

### **Complete Authentication Flow**

1. **User visits protected page** → Redirected to `/login`
2. **User enters credentials** → Validates and authenticates
3. **Successful login** → Redirected to `/adminForm`
4. **User can logout** → Session cleared, redirected to login

### **Password Reset Flow**

1. **User clicks "Forgot Password"** → Goes to `/forgot-password`
2. **User enters email** → Sends reset link
3. **User clicks reset link** → Goes to `/reset-password`
4. **User sets new password** → Password updated successfully

### **Email Verification Flow**

1. **User receives verification email** → Clicks verification link
2. **User visits verification page** → Token validated
3. **Verification successful** → Account verified
4. **User can now access all features** → Full account access

## 🎯 Demo URLs

### **Test the Authentication System**

1. **Login Page:** `http://localhost:3000/login`
2. **Forgot Password:** `http://localhost:3000/forgot-password`
3. **Email Verification:** `http://localhost:3000/verify-email?token=valid-token&email=test@example.com`
4. **Password Reset:** `http://localhost:3000/reset-password?token=valid-reset-token&email=test@example.com`
5. **Admin Dashboard:** `http://localhost:3000/adminForm`

### **Demo Credentials**
- **Email:** `admin@kha.com`
- **Password:** `password123`

## 🔧 Customization

### **Adding New Translation Keys**

1. **Add to English file** (`/public/locales/en/common.json`):
```json
{
  "auth": {
    "newKey": "New Translation"
  }
}
```

2. **Add to Khmer file** (`/public/locales/kh/common.json`):
```json
{
  "auth": {
    "newKey": "ការបកប្រែថ្មី"
  }
}
```

3. **Use in component**:
```javascript
{t('auth.newKey')}
```

### **Styling Customization**

All components use Tailwind CSS classes and can be easily customized:

```javascript
// Example: Custom button styling
<Button
  color="primary"
  size="lg"
  className="w-full custom-button-class"
>
  {t('auth.login')}
</Button>
```

## 🚀 Next Steps

### **Production Ready Features to Add**

1. **Real API Integration**
   - Replace mock authentication with real backend
   - Implement JWT tokens
   - Add proper session management

2. **Email Service Integration**
   - Send real verification emails
   - Send real password reset emails
   - Email templates

3. **Database Integration**
   - User account storage
   - Password hashing
   - Session persistence

4. **Additional Security**
   - CSRF protection
   - Rate limiting
   - Two-factor authentication

The authentication system is now fully functional with a complete user flow, multilingual support, and responsive design! 🎉
