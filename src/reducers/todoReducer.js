
const initialState = [
  {
    id: 1,
    title: "Пожрать",
    content: "Пожрать перед работой"
  },
  {
    id: 2,
    title: "Пиво",
    content: "Выпить пивка после работы"
  },
  {
    id: 3,
    title: "Стрим",
    content: "Посмотреть стрим под пивко"
  }
]
export default function toDo(state = initialState, action) {
  if (action.type === 'ADD_TASK') {
    return [
      ...state,
      action.payload
    ];
  }
  return state;
}
