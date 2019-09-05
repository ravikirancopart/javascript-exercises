const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ];
const getTheTitles = function(arg) {
    var result=[];
    arg.map(para=>
    {
      return result.push(para.title);
    });
      return result;
}
console.log(getTheTitles(books));       //['Book','Book2']
module.exports = getTheTitles;



