function renderPosts(boston, container) {
  const people = boston.data;
  const len = boston.data.length;
  let html = '';

  for (let i = 0; i < len; i++) {
    html +=
      '<li class="post">' + '<h2>' + people[i][8] + '</h2>' + '<h3>' + people[i][11] + '</h3>';
  }
  // TODO: add code to display the html variable inside a ul element with id="data"
  // Hint: you can use the container parameter's innerHTML property to insert Html tags
   container.innerHTML = '<div><h1>Boston people and their Salary Data :</h1><ul id = "data">' + html + '</ul></div>';


//To sort the people data depending on salaries
  people.sort((a,b)=>{return b[11]-a[11]});
  //To render top five salaries assign length of data as 5 and print first five else it was len
  let topFiveData=5; 
   let top5html='';
  for (let i = 0; i < topFiveData; i++) {
    top5html +=
      '<li class="post">' + '<h2>' + people[i][8] + '</h2>' + '<h3>' + people[i][11] + '</h3>';
  }
  // TODO: add code to display the html variable inside a ul element with id="data"
  // Hint: you can use the container parameter's innerHTML property to insert Html tags
   container.innerHTML += '<div><h1>Top 5 Salary Data</h1><ul id = "topSalaries">' + top5html + '</ul></div>';

   //To render top five salaries assign length of data as 5 and print first five else it was len
   
   let topPaidEmpHtml='';
   const topPaidEmp=people.filter(entry=>entry[11]>200000);
  for (let i = 0; i < topPaidEmp.length; i++) {
    topPaidEmpHtml +=
      '<li class="post">' + '<h2>' + topPaidEmp[i][8] + '</h2>' + '<h3>' + topPaidEmp[i][11] + '</h3>';
  }
  // TODO: add code to display the html variable inside a ul element with id="data"
  // Hint: you can use the container parameter's innerHTML property to insert Html tags
   container.innerHTML += '<div><h1>Highly Paid People</h1><ul id = "topEmployees">' + topPaidEmpHtml + '</ul></div>';
}
renderPosts(boston, document.getElementById('container'));
