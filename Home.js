//Hard coding the json files as I am not aware of any server
var json1 = '{\n' +
    '  "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",\n' +
    '  "body": [\n' +
    '    {\n' +
    '      "type": "heading",\n' +
    '      "model": {\n' +
    '        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit"\n' +
    '      }\n' +
    '    },\n' +
    '    {\n' +
    '      "type": "paragraph",\n' +
    '      "model": {\n' +
    '        "text": "Etiam ornare nulla in sem pharetra, vel varius magna tempus. Praesent pulvinar eget dolor vitae elementum. Donec id velit at sem gravida tristique non vitae lorem."\n' +
    '      }\n' +
    '    },\n' +
    '    {\n' +
    '      "type": "image",\n' +
    '      "model": {\n' +
    '        "url": "https://picsum.photos/640/420/?random",\n' +
    '        "altText": "Vestibulum pellentesque laoreet urna, eget dignissim lorem maximus vel",\n' +
    '        "height": "420",\n' +
    '        "width": "640"\n' +
    '      }\n' +
    '    },\n' +
    '    {\n' +
    '      "type": "paragraph",\n' +
    '      "model": {\n' +
    '        "text": "Nulla tortor nunc, posuere eu purus eget, ultricies ullamcorper sapien. Duis viverra lectus eget dolor gravida rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce molestie, odio at mattis auctor, mauris lectus luctus risus, eget pulvinar tortor erat a est."\n' +
    '      }\n' +
    '    },\n' +
    '    {\n' +
    '      "type": "paragraph",\n' +
    '      "model": {\n' +
    '        "text": "Mauris accumsan maximus enim, eleifend consectetur turpis molestie malesuada. Proin vulputate dui non mattis venenatis. Nam ornare sapien eget nibh placerat, faucibus dapibus lacus consectetur."\n' +
    '      }\n' +
    '    },\n' +
    '    {\n' +
    '      "type": "list",\n' +
    '      "model": {\n' +
    '        "type": "unordered",\n' +
    '        "items": [\n' +
    '          "Vestibulum viverra viverra ullamcorper",\n' +
    '          "Aenean ut felis hendrerit, scelerisque est sed, rhoncus sem"\n' +
    '        ]\n' +
    '      }\n' +
    '    }\n' +
    '  ]\n' +
    '}'

var json2 = '{\n' +
    '  "title": "Praesent bibendum nec velit a fringilla. Nulla facilisi",\n' +
    '  "body": [\n' +
    '    {\n' +
    '      "type": "heading",\n' +
    '      "model": {\n' +
    '        "text": "Nam eu varius magna, vel molestie diam"\n' +
    '      }\n' +
    '    },\n' +
    '    {\n' +
    '      "type": "image",\n' +
    '      "model": {\n' +
    '        "url": "https://picsum.photos/640/420/?random",\n' +
    '        "altText": "Vestibulum pellentesque laoreet urna, eget dignissim lorem maximus vel",\n' +
    '        "height": "420",\n' +
    '        "width": "640"\n' +
    '      }\n' +
    '    },\n' +
    '    {\n' +
    '      "type": "paragraph",\n' +
    '      "model": {\n' +
    '        "text": "Integer lobortis, magna et tempor facilisis, arcu dui finibus mauris, pellentesque fringilla massa sem non justo. Phasellus vel arcu eu eros commodo egestas at non dui. Ut ultricies quis nunc ut commodo"\n' +
    '      }\n' +
    '    },\n' +
    '    {\n' +
    '      "type": "paragraph",\n' +
    '      "model": {\n' +
    '        "text": "Aenean justo urna, tempor vitae consectetur nec, ornare eget nunc. Duis ornare ipsum in quam auctor feugiat. Vestibulum sapien metus, rutrum et mattis ut, tincidunt in dolor. Praesent semper laoreet augue. Etiam lacinia hendrerit euismod."\n' +
    '      }\n' +
    '    },\n' +
    '    {\n' +
    '      "type": "image",\n' +
    '      "model": {\n' +
    '        "url": "https://picsum.photos/640/420/?random",\n' +
    '        "altText": "Curabitur dictum leo bibendum lacus ultrices fringilla et quis justo",\n' +
    '        "height": "420",\n' +
    '        "width": "640"\n' +
    '      }\n' +
    '    },\n' +
    '    {\n' +
    '      "type": "paragraph",\n' +
    '      "model": {\n' +
    '        "text": "Morbi venenatis aliquam cursus. Sed eros elit, consequat id faucibus vel, interdum fringilla massa."\n' +
    '      }\n' +
    '    },\n' +
    '    {\n' +
    '      "type": "image",\n' +
    '      "model": {\n' +
    '        "url": "https://picsum.photos/640/420/?random",\n' +
    '        "altText": "Curabitur dictum leo bibendum lacus ultrices fringilla et quis justo",\n' +
    '        "height": "420",\n' +
    '        "width": "640"\n' +
    '      }\n' +
    '    },\n' +
    '    {\n' +
    '      "type": "paragraph",\n' +
    '      "model": {\n' +
    '        "text": "Morbi venenatis aliquam cursus. Sed eros elit, consequat id faucibus vel, interdum fringilla massa."\n' +
    '      }\n' +
    '    }\n' +
    '  ]\n' +
    '}'

var json3 = '{\n' +
    '  "title": "Vestibulum posuere orci ullamcorper nisi porta, sit amet tempus nibh porta",\n' +
    '  "body": [\n' +
    '    {\n' +
    '      "type": "heading",\n' +
    '      "model": {\n' +
    '        "text": "Donec est neque, vulputate vitae magna non, aliquam semper lectus"\n' +
    '      }\n' +
    '    },\n' +
    '    {\n' +
    '      "type": "paragraph",\n' +
    '      "model": {\n' +
    '        "text": "Nam sed tempus lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam sodales efficitur fermentum. Phasellus lacinia tempus odio, non mattis tellus pretium ac. Nulla facilisi. Donec tempor orci ipsum, eu euismod massa aliquet in. Fusce pretium lectus vitae dui pulvinar, vel fermentum elit porta."\n' +
    '      }\n' +
    '    },\n' +
    '    {\n' +
    '      "type": "paragraph",\n' +
    '      "model": {\n' +
    '        "text": "Donec iaculis volutpat consequat. Pellentesque et lobortis tellus. In mattis, diam a tempus fringilla, augue orci tincidunt nunc, et dictum lorem eros non ante."\n' +
    '      }\n' +
    '    },\n' +
    '    {\n' +
    '      "type": "paragraph",\n' +
    '      "model": {\n' +
    '        "text": "Cras dolor tellus, condimentum eu aliquet nec, facilisis a eros. Morbi sed tincidunt urna."\n' +
    '      }\n' +
    '    },\n' +
    '    {\n' +
    '      "type": "paragraph",\n' +
    '      "model": {\n' +
    '        "text": "Praesent feugiat rutrum lobortis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae."\n' +
    '      }\n' +
    '    },\n' +
    '    {\n' +
    '      "type": "paragraph",\n' +
    '      "model": {\n' +
    '        "text": "In imperdiet commodo nisl nec iaculis. Vivamus nunc purus, vulputate eget dapibus in, mattis sit amet tellus. Donec quis sapien a odio vestibulum egestas vel a magna."\n' +
    '      }\n' +
    '    },\n' +
    '    {\n' +
    '      "type": "paragraph",\n' +
    '      "model": {\n' +
    '        "text": "Cras id condimentum dolor. Vestibulum risus leo, viverra a mi laoreet, vestibulum aliquam odio. Pellentesque aliquam placerat dolor vitae malesuada. Ut eget pretium tellus, cursus finibus ligula. Sed eros diam, porta sit amet urna eget, pretium dignissim magna. Curabitur imperdiet pharetra lectus ac venenatis."\n' +
    '      }\n' +
    '    },\n' +
    '    {\n' +
    '      "type": "paragraph",\n' +
    '      "model": {\n' +
    '        "text": "Donec at tincidunt mauris, id sagittis erat. Nunc mi nisi, pellentesque et rutrum quis, congue non elit. Nullam convallis sapien quis tellus imperdiet iaculis."\n' +
    '      }\n' +
    '    },\n' +
    '    {\n' +
    '      "type": "paragraph",\n' +
    '      "model": {\n' +
    '        "text": "Vivamus sollicitudin, diam non semper molestie, nisi nunc efficitur neque, id iaculis nibh ipsum sed quam. Etiam consequat tristique mi ac lacinia. Etiam leo nulla, faucibus et lobortis et, semper et quam. Cras vehicula quam non condimentum laoreet."\n' +
    '      }\n' +
    '    }\n' +
    '  ]\n' +
    '}'
//Code below is for testing whether I can load and output the JSON file on a webpage ----
var art1 = JSON.parse(json1);
var art2 = JSON.parse(json2);
var art3 = JSON.parse(json3);

console.log(art1);

var articles = [art1, art2, art3];
const section = document.querySelector('section');
function showArticle(jsonObj){
    const content = jsonObj['body'];

    for (let i = 0; i < content.length; i++) {
        const article = document.createElement('article');
        const H1 = document.createElement('h1');
        const para = document.createElement('p');
        const list = document.createElement('ul');
        const img = document.createElement('image')

        if (content.type == "heading"){
            h1.textContent = 'text' + content[i].text;
        }
        if (content.type == "paragraph" ){
            para.textContent = 'text ' + content[i].text;
        }
        if (content.type == "image"){
            img.setAttribute("src", "https://picsum.photos/640/420/?random");
            img.setAttribute("height", "420");
            img.setAttribute("width", "640");
        }
        if (content.type == "list"){
            const myList = content[i].list;
            for (let i = 0; i < myList.length; i++) {
                const listItem = document.createElement('li');
                listItem.textContent = myList[i];
                myList.appendChild(listItem);
            }
        }

        article.appendChild(H1);
        article.appendChild(para);
        article.appendChild(list);

        section.appendChild(article);
    }
}


let rawURL = 'https://raw.githubusercontent.com/bbc/news-coding-test-dataset/master/data/article-1.json';
let request = new XMLHttpRequest();
request.open('GET', rawURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    const art1 = request.response;
    //populateHeader(superHeroes);
    showArticle(art1);
}

//to work with randombutton on html
function randomClick(){
    //randomly generate json files loop through articles array
}

