/* let setColor = (ElemType, Elemcolor) =>
{
    document.querySelectorAll(ElemType).forEach(x => x.style.backgroundColor = Elemcolor);
} 

setColor("div","rgb(100,200,255)")
// #1 */ 

/* let ahref = () => 
{
    let all_links = document.querySelectorAll("a");
    let first = all_links.item(0).innerText;
    let last = all_links.item(all_links.length-1).innerText;
    let amount = all_links.length;
    let everything = "first: " + first + " last: " + last + " amount: " + amount;
    return everything;
}
alert(ahref());  
// #2 */

/* let add = () =>
{
    let newRow = document.createElement('li');
    newRow.innerText = prompt("Enter a city:","City");
    document.querySelector(".city_list").appendChild(newRow);
}

let remove_last = () =>
{
    let list = document.querySelector(".city_list");
    list.removeChild(list.lastChild);
}

let setColor = () =>
{
    document.querySelectorAll(".city_list li").forEach(x => {x.style.fontSize ="10px"; x.style.color = "red"});

}
document.querySelector(".add").addEventListener("click",add);
document.querySelector(".remove_last").addEventListener("click",remove_last);
document.querySelector(".setColor").addEventListener("click",setColor);
// #3 */

/*
let booksArr = 
[
    {
        year : 2018,
        title: "The Gone World",
        author: "Tom Sweterlitsch"
    },
    {
        year : 2014,
        title: "Tomorrow and Tomorrow",
        author: "Tom Sweterlitsch"
    },
    {
        year : 1978,
        title: "The Stand",
        author: "Stephen King"
    },
    {
        year : 1979,
        title: "The Dead Zone",
        author: "Stephen King"
    },
    {
        year : 2011,
        title: "11/22/63",
        author: "Stephen King"
    }
];

let linksArr = 
[
    {
        title: "The Stand",
        link: "https://en.wikipedia.org/wiki/The_Stand"
    },
    {
        title: "Tomorrow and Tomorrow",
        link: "https://www.goodreads.com/book/show/18693738-tomorrow-and-tomorrow"
    },
    {
        title: "11/22/63",
        link: "https://en.wikipedia.org/wiki/11/22/63"
    },
    {
        title: "The Gone World",
        link: "https://www.goodreads.com/book/show/33413556-the-gone-world"
    },
    {
        title: "The Dead Zone",
        link: "https://en.wikipedia.org/wiki/The_Dead_Zone_(novel)"
    }
];

let createList = () => 
{
    let newList = document.createElement('ol');
    booksArr.forEach(x => 
        {
            let newLine = document.createElement('li');
            let lineTitle = document.createElement('p');
            lineTitle.innerText = x.title;
            let lineAuthor = document.createElement('p');
            lineAuthor.innerText = x.author; 
            let lineYear = document.createElement('p');
            lineYear.innerText = x.year;

            newLine.appendChild(lineYear);
            newLine.appendChild(lineTitle);
            newLine.appendChild(lineAuthor);
            
            newList.appendChild(newLine);
        });
        document.querySelector(".bookList").appendChild(newList);
};
createList();

let linkAdder = () =>
{
   let booksList = document.querySelectorAll('.bookList ol li')
    booksList.forEach(x => 
    {
        for(let i = 0; i < linksArr.length; i++) 
        {
            if (x.innerText.includes(linksArr[i].title))
            {
                let newLink = document.createElement('a');
                newLink.href = linksArr[i].link;
                newLink.innerText = "More: " + linksArr[i].link;
                x.appendChild(newLink);
            }
        }
    })
};
linkAdder();
// 4 */

// document.body.style.fontFamily = "Arial"; //5

let insertRow = () =>
{
    let newTR = document.createElement('tr');

    let newTD1 = document.createElement('td');
    let newTD2 = document.createElement('td');
    let newTD3 = document.createElement('td');

    newTD1.innerText = prompt("Enter the mountain's name");
    newTD2.innerText = prompt("Enter the mountain's country");
    newTD3.innerText = prompt("Enter the mountain's peak height");;

    newTR.appendChild(newTD1);
    newTR.appendChild(newTD2);
    newTR.appendChild(newTD3);

    document.querySelector('#peaks1').appendChild(newTR);

};
document.getElementById("add").addEventListener("click",insertRow);