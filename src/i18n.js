import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "ru",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
        translation: {
            hero_title_one: "ReactJS",
            hero_title_two: "front-end developer",
            hero_title_three: "with 1 year of",
            hero_title_four: "commercial experience",
            hero_description: "He crafts responsive websites where technologies meet creativity",
            home: "home",
            projects: "projects",
            list_of_projects: "list of my projects.",
            about_me: "about-me",
            contacts: "contacts",
            send_me_message: "Send me a message.",
            all_media: "all-media",
            skills: "skills",
            who_am_i: "Who am i?",
            contact_me_button: "Contact me ->",
            read_more_button: "Read more ->",
            view_more_button: "View more ->",
            active_job: "Currently working on ",
            message_me_here: "Message me here",
            about_me_description: `Hello, i’m Arsen!
            \nI’m a self-taught front-end developer based in Almaty, Kazakhstan. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences. 
            \nTransforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.`,
            contacts_description: "ATM I’m interested in full-time job. However, if you have other request or question, don’t hesitate to contact me.",

            Languages: 'Languages',
            Backend: 'Backend',
            Databases: 'Databases',
            Other: 'Other',
            Tools: 'Tools',
            Frameworks: 'Frameworks',
        },
    },
    ru: {
        translation: {
          hero_title_one: "ReactJS",
          hero_title_two: "front-end разработчик",
          hero_title_three: "с 1 годом опыта",
          hero_title_four: "коммерческой разработки",
          hero_description: "Он разрабатывает веб-сайты где технологии сочетаются с креативом",
          home: "главная",
          projects: "проекты",
          list_of_projects: "Список реализованных проектов.",
          about_me: "о-себе",
          contacts: "контакты",
          send_me_message: "Отправьте мне сообщение.",
          all_media: "соц-сети",
          who_am_i: "Кто я такой?",
          contact_me_button: "Свяжитесь со мной ->",
          read_more_button: "Узнать больше ->",
          view_more_button: "Больше ->",
          active_job: "Сейчас работаю над ",
          message_me_here: "Напишите мне здесь:",
          about_me_description: `Привет, меня зовут Арсен!
          \nЯ выпускник Международного Университета Информационных технологий из Алматы, Казахстан. Я умею разрабатывать веб-сайты с нуля, поддерживая как back-end так и front-end части. 
          \nРаботать и учавствовать в разработке разнообразных приложений является моей страстью на протяжении 3-ех лет. В процессе я успел наработать навыки как Back-end, так и Front-end разработки. 
          Зачастую я работал над образовательными проектами, так как возможность быть полезным обществу выглядит для меня как самая высшая награда.
          \nЯ всегда рад и заинтересован изучать новые технологии и фреймворки. Сейчас сфокусирован на изучении ReactJS, TailwindCSS, Vite.`,
          contacts_description: "В данный момент я заинтересован в фул-тайм работе и возможности расти вместе с компанией. Но если у вас есть вопросы или интересное предложение, дайте мне знать :)",

          Languages: 'Языки',
          Backend: 'Backend',
          Databases: 'Базы данных',
          Other: 'Другое',
          Tools: 'Инструменты',
          Frameworks: 'Фреймворки',
        },
    },
    kz: {
      translation: {
        hero_title_one: "ReactJS",
          hero_title_two: "front-end бағларлаушысы,",
          hero_title_three: "1 жылдық",
          hero_title_four: "коммерциялық әзірлеу тәжірибесімен",
          hero_description: "Ол технологиялар мен креативты уйлестіре веб-сайттар жасайды.",
          home: "басты бет",
          projects: "проекттер",
          list_of_projects: "Аяқталған проекттер тізімі.",
          about_me: "мен-туралы",
          contacts: "контактілер",
          send_me_message: "Маған хабарлама жіберініз.",
          all_media: "желілер",
          who_am_i: "Мен кіммін?",
          contact_me_button: "Менімен хабарласу ->",
          read_more_button: "Көбірек білу ->",
          view_more_button: "Тағыда ->",
          active_job: "Қазіргі белсенді жұмысы: ",
          message_me_here: "Менімен хабарласу:",
          about_me_description: `Салем, менің атым Арсен!
          \nМен Халықаралық Ақпараттық Технологиялар Университетінің түлегімін. Мен веб-сайттарды back-end пен front-end жақтарын үйлестіре бағдарлай аламын. 
          \nӘртүрлі қосымшаларды әзірлеу мен белсенді қатысу 3 жыл бойы менің құштарлы ісім болып келді. 
          Орындаған жобаларымның көп бөлігі білім беру саласында болып келеді, өйткені қоғамға пайдалы бола алу мүмкіндігі мен үшін ең үлкен құндылық болып көрінеді.
          \nМен ардайым жаңа технологиялар мен фреймворктарды үйренуге ашықпын. Қазір белсенді түрде ReactJS, TailwindCSS, Vite технологияларымен айналысудамын.`,
          contacts_description: "Қазіргі уақытта мен толық күнді тұрақты жұмыста мүдделімін. Бірақ сізде сұрағыңыз әлде қызықты ұсыныстарыңыз болса, маған хабарлассаңыз болады.",

          Languages: 'Тілдер',
          Backend: 'Backend',
          Databases: 'База данных',
          Other: 'Басқа',
          Tools: 'Инструменттер',
          Frameworks: 'Фреймворктар',
      }
    }
  },
});

export default i18n;