// Подумать о переносе всей информации в sql таблицу
// Вопрос - как делать popup? 
// Есть о чем подумать

const table_contents = [
  {
    name: "Известие.",
  },
  {
    name: "Стол в мясоед.",
    children: [
      {
        name: "Первая подача, содержащая холодные кушанья",
        children: [
          {
            name: "Окорок ветчины.",
          },
          {
            name: "Окорок свежины.",
          },
          {
            name: "Окорок буженины.",
          },
          {
            name: "Часть солонины со сметаною и хреном.",
          },
          {
            name: "Полотки гусиные и утиные.",
          },
          {
            name: "Поросенок со сметаною и хреном.",
          },
          {
            name: "Студень говяжий с чесноком.",
          },
          {
            name: "Студень свиной со сметаною и хреном.",
          },
          {
            name: "Индейка с лимоном.",
          },
          {
            name: "Гусь или утка, обложенные огурцами.",
          },
          {
            name: "Дичина под сливами.",
          },
          {
            name: "Баранья голова со сметаною и хреном."
          },
          {
            name: "Свиная голова со сметаною и хреном."
          },
          {
            name: "Рубленые яйца со сметаною и чесноком, подлитые квасом."
          },
          {
            name: "Окрошка."
          }
        ]
      },
      {
        name: "Вторая подача, содержащая горячие кушанья или похлебки",
        children: [
          {
            name: "Щи с говяжьими голяшками."
          },
          {
            name: "Щи сборные."
          },
          {
            name: "Щи ленивые."
          },
          {
            name: "Борщ."
          },
          {
            name: "Бураки."
          },
          {
            name: "Осердие."
          },
          {
            name: "Лапша с курицею."
          },
          {
            name: "Потрох гусиный или утиный."
          },
          {
            name: "Ушное."
          },
          {
            name: "Курица в кашице."
          },
          {
            name: "Почки говяжьи, калья."
          },
          {
            name: "Сморчки."
          },
          {
            name: "Цыплята в рассольнике."
          },
          {
            name: "Рубцы говяжьи."
          },
          {
            name: "Перепелки с огурцами и капустою."
          },
          {
            name: "Баранье легкое в кашице."
          },
          {
            name: "Сычуг говяжий чиненый."
          },
          {
            name: "Свиной желудок."
          },
          {
            name: "Щи зеленые из крапивы, сныти или борщу."
          }
        ]
      }
    ]
  }
]

export default table_contents

import Vue from 'vue'

const linkHandler = new Vue()

export { linkHandler }