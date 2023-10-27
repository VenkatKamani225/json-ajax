# json-ajax
JSON stands for Java Script Object Notation
AJAX stands for Asynchronous JavaScript and XML [JSON replaced XML due to it's popularity]
AJAX is used to fetch the data or update the data fetching from another server or database without refreshing or reloading the page.
Here we have used XMLHttpRequest() object from JS, It's function is fetch data from other web server without laoding or refreshing the page.
In XMLHttpRequest, we have used open(), onload(), send(), resposneText these methods.
There are 3 JSON objects in the below mentioned links.
We will have a button to add data from that links and a button to clear data
We only have 3 links with data, after clicking button 3 times,for the fourth time you won't have data to print, We have to hide the add button and on hitting clear button we should clear the data and get add button

We used open method with open("GET/POST/PUT/DELETE", "DATA LINK-from where we should read the data.");
onload of data, we have created a function, where it will read data from the link in JSON format using JSON.parse(data.responseText)
we send this data to a function which it will be looped through data and print it in our page.
we print it in our page by document.getElementById("div-id").insertAdjacentHTML("Beforeend",data-as-a-string-with-elements)
after this we send back the the XMLHttpRequest

https://learnwebcode.github.io/json-example/animals-1.json
https://learnwebcode.github.io/json-example/animals-2.json
https://learnwebcode.github.io/json-example/animals-3.json

**THis object has limitations. Modern methods are fetch() API and axios library**
