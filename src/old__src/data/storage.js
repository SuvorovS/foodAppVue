const storage = {
  menu : [
    {title: 'Заврак', url: 'breacfast'},
    {title: 'Обед', url: 'dinner'},
    {title: 'Ужин', url: 'supper'},
    {title: 'Перекус', url: 'lunch'},
  ],
  food : [],
  curentFood : [],
  usedFood : {
    changed : false,
    isFatching : false,
    date : '',
    items : {
     
    }
  }
}


export default storage;
