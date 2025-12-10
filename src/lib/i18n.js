import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Define translations directly in the code to avoid import issues
const resources = {
  en: {
    common: {
      "navigation": {
        "home": "KHMER HEIRS ASSOCIATION",
        "about": "About Us",
        "leader": "KHA Leader",
        "education": "Education",
        "contact": "Contact Us",
        "login": "Login"
      },
      "home": {
        "welcome": "WELCOME TO KHMER HEIRS ASSOCIATION",
        "description": "A group of Khmer intellectual students have come together to establish an association based in the Kingdom of Cambodia, called the Khmer Heirs Association.The Khmer Heirs Association is abbreviated as \"KHA\" in English and \"សទខ\" in Khmer.",
        "features": {
          "feature1": "The Khmer Heirs Association is a non-governmental organization that is independent, sovereign, apolitical, non-partisan, and not for private profit.",
          "feature2": "Khmer Heirs work to build a bright, honorable, and prosperous future for the Cambodian people. Democracy and respect for human rights are the strong foundations of the leadership and development of the Khmer Heirs Association.",
          "feature3": "SERVICEBOX offers a wide range of cutting-edge technology products and professional website services to help your business stay ahead in a digital world."
        }
      },
      "footer": {
        "name": "KHA Organization",
        "addressLabel": "Address",
        "address": "Phnom Penh, Cambodia",
        "quickLinks": "Quick Links",
        "followUs": "Follow Us"
      },
      "auth": {
        "login": "Login",
        "logout": "Logout",
        "signIn": "Sign In",
        "signUp": "Sign Up",
        "email": "Email",
        "password": "Password",
        "rememberMe": "Remember me",
        "forgotPassword": "Forgot Password?",
        "dontHaveAccount": "Don't have an account?",
        "createAccount": "Create one",
        "alreadyHaveAccount": "Already have an account?",
        "emailRequired": "Email is required",
        "passwordRequired": "Password is required",
        "invalidEmail": "Please enter a valid email address",
        "invalidCredentials": "Invalid email or password",
        "loginSuccess": "Login successful!",
        "loginError": "Login failed. Please try again.",
        "resetPassword": "Reset Password",
        "newPassword": "New Password",
        "confirmPassword": "Confirm Password",
        "passwordMismatch": "Passwords do not match",
        "passwordTooShort": "Password must be at least 6 characters",
        "emailVerified": "Email Verified",
        "resendVerification": "Resend Verification",
        "verificationSent": "Verification email sent!",
        "resetLinkSent": "Password reset link sent to your email!",
        "passwordResetSuccess": "Password reset successfully!",
        "invalidToken": "Invalid or expired token",
        "backToLogin": "Back to Login",
        "sendResetLink": "Send Reset Link",
        "passwordResetSent": "Password reset link sent to your email",
        "checkYourEmail": "Check your email for verification link",
        "sendAnotherEmail": "Send Another Email",
        "forgotPasswordDescription": "Enter your email address and we'll send you a link to reset your password.",
        "enterEmailPlaceholder": "Enter your email address",
        "enterPasswordPlaceholder": "Enter your password",
        "welcomeBack": "Welcome back!",
        "signInToAccount": "Sign in to your account",
        "demoCredentials": "Demo credentials",
        "demoEmail": "admin@kha.com",
        "demoPassword": "password123",
        "loginHeroTitle": "Welcome to Log in form!",
        "loginHeroSubtitle": "To keep connected with us please login with your personal info",
        "noAccount": "Don't have an account?",
        "backToHome": "Back to Home",
        "heroName": "KHMER HEIRS ASSOCIATION",
        "heroBody": "A group of Khmer intellectual students have come together to establish an association based in the Kingdom of Cambodia, called the Khmer Heirs Association. The Khmer Heirs Association is abbreviated as \"KHA\" in English and \"សទខ\" in Khmer.",
        "back": "Back"
      },
      "members": {
        "title": "Members Are Able to Get Career Opportunities"
      },
      "scholarship": {
        "title": "Members receive scholarships to study abroad"
      },
      "education": {
        "tutorials": "Tutorials",
        "lessonsBac": "Lessons Bac II",
        "header": {
          "title": "KHMER HEIRS ASSOCIATION",
          "slogan1": "Together We",
          "slogan2": "Grow",
          "slogan3": ",Together We",
          "slogan4": "Learn"
        }
      },
      "about": {
        "vision": {
          "title": "Vision",
          "description": "Our vision is to see every Cambodian become a valuable human resource in a society full of energy and potential. We aim to achieve this by providing opportunities, encouragement, and capacity building to help them grow and reach their full potential."
        },
        "mission": {
          "title": "Mission",
          "description": "Our mission is to collaborate with the Royal Government to promote development in the areas of education, health, democracy, human rights, gender equality, and vocational training for all Cambodians across the country. The Khmer Heirs Association is committed to creating positive change, focusing on improving human resources through education and training as a top priority."
        },
        "goal": {
          "title": "Goal",
          "description": "The purpose of the Khmer Heirs Association is to prepare the future destiny of Cambodian children to be bright, noble, and enduringly prosperous."
        },
        "strategicGoals": {
          "title": "Strategic Goals",
          "description": "To achieve the above purpose, the Khmer Heirs Association has set the following directions:",
          "items": [
            "Establish student housing and seek financial support for underprivileged students from rural areas, enabling them to continue their higher education.",
            "Organize training programs to enhance students' knowledge and skills in various fields.",
            "Create job opportunities and provide career guidance for students and graduates.",
            "Promote cultural preservation and national identity among Cambodian youth.",
            "Foster international cooperation and exchange programs for educational advancement."
          ]
        }
      },
      "contact": {
        "title": "Contact Us",
        "subtitle": "Khmer Heirs Association"
      },
      "leader": {
        "title": "Leader Khmer Heirs Association"
      },
      "search": {
        "placeholder": "Search Your Subject Here"
      }
    }
  },
  kh: {
    common: {
      "navigation": {
        "home": "សមាគមទាយាទខ្មែរ",
        "about": "អំពីពួកយើង",
        "leader": "ថ្នាក់ដឹកនាំសមាគម",
        "education": "ការសិក្សា",
        "contact": "ទំនាក់ទំនង",
        "login": "ចូល"
      },
      "home": {
        "welcome": "សូមស្វាគមន៍មកកាន់ សមាគមទាយាទខ្មែរ",
        "description": "និស្សិត បញ្ញវន្តខ្មែរ បានរួមគ្នាបង្កើតសមាគមមួយ តាំងនៅក្នុងទឹកដី នៃព្រះរាជាណាចក្រកម្ពុជា ដែលមានឈ្មោះថា \"សមាគមទាយាទខ្មែរ\" ។ សមាគមទាយាទខ្មែរ សរសេរជាអក្សកាត់ថា \"សទខ\" និងជាភាសាអង់គ្លេសថា \"Khmer Heirs Association (KHA)\"",
        "features": {
          "feature1": "សមាគមទាយាទខ្មែរ ជាអង្គការមិនមែនរដ្ឋាភិបាល ឯករាជ្យភាព អធិបតេយ្យភាព មិនធ្វើនយោបាយ មិនបម្រើគណបក្សនយោបាយ និងមិនរកកម្រៃជាឯកជន។",
          "feature2": "ទាយាទខ្មែរ ធ្វើអ្វីៗដើម្បីកសាងវាសនាឧត្តុង្គឧត្តម ថ្កុំថ្កើង និងភាពសំបូររុងរឿងសម្រាប់កូនខ្មែរ។ លទ្ធិប្រជាធិបតេយ្យ និងការគោរពសិទ្ធិមនុស្ស គឺជាមូលដ្ឋានគ្រឹះ ដ៏រឹងមាំក្នងការដឹកនាំ និងអភិវឌ្ឍសមាគទាយាទខ្មែរ ។",
          "feature3": "SERVICEBOX ផ្តល់ជូននូវផលិតផលបច្ចេកវិទ្យាចុងក្រោយនិងសេវាកម្មគេហទំព័រដែលមានវិជ្ជាជីវៈ ដើម្បីជួយអាជីវកម្មរបស់អ្នកឲ្យនាំមុខគេក្នុងសម័យឌីជីថល។"
        }
      },
      "footer": {
        "name": "សមាគមទាយាទខ្មែរ",
        "addressLabel": "អាសយដ្ឋាន",
        "address": "ភ្នំពេញ, កម្ពុជា",
        "quickLinks": "តំណភ្ជាប់រហ័ស",
        "followUs": "តាមដានយើង"
      },
      "auth": {
        "login": "ចូល",
        "logout": "ចេញ",
        "signIn": "ចូល",
        "signUp": "ចុះឈ្មោះ",
        "email": "អ៊ីមែល",
        "password": "ពាក្យសម្ងាត់",
        "rememberMe": "ចងចាំខ្ញុំ",
        "forgotPassword": "ភ្លេចពាក្យសម្ងាត់?",
        "dontHaveAccount": "មិនមានគណនី?",
        "createAccount": "បង្កើតមួយ",
        "alreadyHaveAccount": "មានគណនីរួចហើយ?",
        "emailRequired": "អ៊ីមែលត្រូវការ",
        "passwordRequired": "ពាក្យសម្ងាត់ត្រូវការ",
        "invalidEmail": "សូមបញ្ចូលអាសយដ្ឋានអ៊ីមែលត្រឹមត្រូវ",
        "invalidCredentials": "អ៊ីមែល ឬពាក្យសម្ងាត់មិនត្រឹមត្រូវ",
        "loginSuccess": "ចូលបានជោគជ័យ!",
        "loginError": "ចូលមិនបាន។ សូមព្យាយាមម្តងទៀត។",
        "resetPassword": "កំណត់ពាក្យសម្ងាត់ថ្មី",
        "newPassword": "ពាក្យសម្ងាត់ថ្មី",
        "confirmPassword": "បញ្ជាក់ពាក្យសម្ងាត់",
        "passwordMismatch": "ពាក្យសម្ងាត់មិនដូចគ្នា",
        "passwordTooShort": "ពាក្យសម្ងាត់ត្រូវតែយ៉ាងហោចណាស់ ៦ តួអក្សរ",
        "emailVerified": "អ៊ីមែលបានផ្ទៀងផ្ទាត់",
        "resendVerification": "ផ្ញើការផ្ទៀងផ្ទាត់ម្តងទៀត",
        "verificationSent": "អ៊ីមែលផ្ទៀងផ្ទាត់បានផ្ញើ!",
        "resetLinkSent": "តំណកំណត់ពាក្យសម្ងាត់ថ្មីបានផ្ញើទៅអ៊ីមែលរបស់អ្នក!",
        "passwordResetSuccess": "កំណត់ពាក្យសម្ងាត់ថ្មីបានជោគជ័យ!",
        "invalidToken": "ថូខេនមិនត្រឹមត្រូវ ឬផុតកំណត់",
        "backToLogin": "ត្រលប់ទៅចូល",
        "sendResetLink": "ផ្ញើតំណកំណត់ពាក្យសម្ងាត់",
        "passwordResetSent": "តំណកំណត់ពាក្យសម្ងាត់ថ្មីបានផ្ញើទៅអ៊ីមែលរបស់អ្នក",
        "checkYourEmail": "សូមពិនិត្យអ៊ីមែលរបស់អ្នកសម្រាប់តំណបញ្ជាក់",
        "sendAnotherEmail": "ផ្ញើអ៊ីមែលម្តងទៀត",
        "forgotPasswordDescription": "បញ្ចូលអាសយដ្ឋានអ៊ីមែលរបស់អ្នក ហើយយើងនឹងផ្ញើតំណភ្ជាប់សម្រាប់កំណត់ពាក្យសម្ងាត់ថ្មី។",
        "enterEmailPlaceholder": "បញ្ចូលអាសយដ្ឋានអ៊ីមែលរបស់អ្នក",
        "enterPasswordPlaceholder": "បញ្ចូលពាក្យសម្ងាត់របស់អ្នក",
        "welcomeBack": "សូមស្វាគមន៍មកកាន់ម្តងទៀត!",
        "signInToAccount": "ចូលទៅកាន់គណនីរបស់អ្នក",
        "demoCredentials": "ព័ត៌មានចុះឈ្មោះសាកល្បង",
        "demoEmail": "admin@kha.com",
        "demoPassword": "password123",
        "loginHeroTitle": "សូមស្វាគមន៍មកកាន់ការ​ Login",
        "loginHeroSubtitle": "ដើម្បីតភ្ជាប់ជាមួយយើង សូមចូលជាមួយព័ត៌មានផ្ទាល់ខ្លួនរបស់អ្នក",
        "noAccount": "មិនមានគណនី?",
        "backToHome": "ត្រលប់ទៅទំព័រដើម",
        "heroName": "សមាគមទាយាទខ្មែរ",
        "heroBody": "និស្សិតបញ្ញវន្តខ្មែរបានរួមគ្នាបង្កើតសមាគមមួយ តាំងនៅក្នុងព្រះរាជាណាចក្រកម្ពុជា ដែលមានឈ្មោះថា សមាគមទាយាទខ្មែរ។ សមាគមនេះសរសេរអក្សរកាត់ថា \"KHA\" ជាភាសាអង់គ្លេស និង \"សទខ\" ជាភាសាខ្មែរ។",
        "back": "ត្រលប់ក្រោយ"
      },
      "members": {
        "title": "សមាជិកទទួលបានឱកាសការងារ"
      },
      "scholarship": {
        "title": "សមាជិកទទួលអាហារូបករណ៍ទៅសិក្សានៅក្រៅប្រទេស"
      },
      "education": {
        "tutorials": "មេរៀនណែនាំ",
        "lessonsBac": "វិញ្ញាសារបាក់ឌុប",
        "header": {
          "title": "សមាគមទាយាទខ្មែរ",
          "slogan1": "យើង",
          "slogan2": "រីកចម្រើន",
          "slogan3": "និង",
          "slogan4": "រៀនសូត្រ",
          "slogan5": "ជាមួយគ្នា"
        }
      },
      "about": {
        "vision": {
          "title": "ទស្សនវិស័យ",
          "description": "ទស្សនវិស័យរបស់យើងគឺចង់ឃើញជនជាតិខ្មែរគ្រប់រូបក្លាយជាធនធានមនុស្សដែលមានតម្លៃក្នុងសង្គមដែលពោរពេញដោយថាមពល និងសក្តានុពល។ យើងបានបំពេញវត្ថុបំណងនេះដោយផ្តល់ឱកាស ការលើកទឹកចិត្ត និងការកសាងសមត្ថភាពដើម្បីជួយពួកគេអភិវឌ្ឍ និងឈានដល់សក្តានុពលពេញលេញរបស់ពួកគេ។"
        },
        "mission": {
          "title": "បេសកកម្ម",
          "description": "បេសកកម្មរបស់យើងគឺចូលរួមជាមួយរាជរដ្ឋាភិបាលក្នុងការលើកកម្ពស់ការអភិវឌ្ឍនៅក្នុងវិស័យអប់រំ សុខភាព ប្រជាធិបតេយ្យ សិទ្ធិមនុស្ស សមភាពយេនឌ័រ និងការបណ្តុះបណ្តាលវិជ្ជាជីវៈសម្រាប់ជនជាតិខ្មែរគ្រប់រូបនៅទូទាំងប្រទេស។ សមាគមទាយាទខ្មែរបានប្តេជ្ញាចិត្តកសាងការផ្លាស់ប្តូរវិជ្ជមាន ដោយផ្តោតលើការកែលម្អធនធានមនុស្សតាមរយៈអប់រំ និងការបណ្តុះបណ្តាលជាអាទិភាពខ្ពស់បំផុត។"
        },
        "goal": {
          "title": "គោលបំណង",
          "description": "គោលបំណងរបស់សមាគមទាយាទខ្មែរគឺរៀបចំវាសនាអនាគតរបស់កុមារខ្មែរឲ្យក្លាយជាភាពភ្លឺស្វាង ថ្កុំថ្កើង និងរុងរឿងជាអចិន្ត្រៃយ៍។"
        },
        "strategicGoals": {
          "title": "គោលបំណងយុទ្ធសាស្ត្រ",
          "description": "ដើម្បីសម្រេចបានគោលបំណងខាងលើ សមាគមទាយាទខ្មែរបានកំណត់ទិសដៅដូចខាងក្រោម៖",
          "items": [
            "បង្កើតផ្ទះសម្រាកសម្រាប់និស្សិត និងស្វែងរកការគាំទ្រហិរញ្ញវត្ថុសម្រាប់និស្សិតក្រីក្រពីតំបន់ជនបទ ដែលអាចបន្តការសិក្សាកម្រិតខ្ពស់របស់ពួកគេ។",
            "រៀបចំកម្មវិធីបណ្តុះបណ្តាលដើម្បីបង្កើនចំណេះដឹង និងជំនាញរបស់និស្សិតក្នុងវិស័យផ្សេងៗ។",
            "បង្កើតឱកាសការងារ និងផ្តល់ការណែនាំអាជីវកម្មសម្រាប់និស្សិត និងនិស្សិតបញ្ចប់ការសិក្សា។",
            "លើកកម្ពស់ការអភិរក្សវប្បធម៌ និងអត្តសញ្ញាណជាតិក្នុងចំណោមយុវជនខ្មែរ។",
            "ជំរុញកិច្ចសហប្រតិបត្តិការអន្តរជាតិ និងកម្មវិធីផ្លាស់ប្តូរសម្រាប់ការអភិវឌ្ឍអប់រំ។"
          ]
        }
      },
      "contact": {
        "title": "ទំនាក់ទំនង",
        "subtitle": "សមាគមទាយាទខ្មែរ"
      },
      "leader": {
        "title": "ថ្នាក់ដឹកនាំ សមាគមទាយាទខ្មែរ"
      },
      "search": {
        "placeholder": "ស្វែងរកមុខវិជ្ជារបស់អ្នកនៅទីនេះ"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    lng: 'en', // Set default language
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

// Load saved language from localStorage
if (typeof window !== 'undefined') {
  const savedLang = localStorage.getItem('lang') || 'en';
  i18n.changeLanguage(savedLang);
}

export default i18n;