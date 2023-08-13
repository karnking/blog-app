# Blog application
### JS-VITE-WITH-MOCK-SERVER

Please do NOT use VSCode live-server. It will not work. Use the npm commands suggested to you here.

## Installation
```
npm install --engine-strict
```
## Start only the Backend server
```
npm run server
```
## Start only Frontend server
```
npm run start
```
## Start both BE & FE in a single command
```
npm run watch
```
# Important files
```
├── index.html
├── blog.html
├── scripts
│   ├── index.js
│   └── blog.js
└── styles
    └── style.css
```
## Maximum Marks - 17

- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json
- The Submission should not contain spaces; for example /rct-101 folder/eval will not work
- Do not push node_modules and package_lock.json to GitHub

## Rubrics
```
✅ able to submit the app - 1 mark ( minimum score )

### Test cases for index page
✅ Shows the correct Welcome title - 1 mark 
✅ Shows the correct initial data - 3 marks 
✅ Able to delete a blog - 2 marks
✅ check sort Newest first functionality working as expected - 1 mark
✅ check sort Oldest first functionality working as expected - 1 mark
✅ check the filter for International, Business, Entertainment, Sports, and Health functionality     working as expected - [1 mark for each] - 5 marks

### Test cases for blog page
✅ Able to read blog using the Read more button - 2 marks
✅ Read more should add data in localStorage - 1 mark
```
### You haven't been taught Cypress to run the test cases locally. You can see the passed/ failed test cases and test errors on CP itself.

## Some Rules to follow:-

- Before writing a single line of code, please read the problem statement very carefully.
- <span style=" color: red">Don't change the already given ids or classes.</span>
- If you don't follow these rules, you might not get any marks even if you do everything correctly.

# Problem statements

### <span style="color:#215dc8">Point to Note for index page</span>

<h4 style="color:#215dc8">
Problem 1. Shows the correct Welcome title [1]
</h4>

- `div#welcome` is already added in the template. You have to add an `h2` tag with the title `Welcome, Peter` as shown image below.
  
<figure>
<img src="https://i.imgur.com/CBwN1FO.png"  style=" border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>Welcome title</b></figcaption>
</figure>


<h4 style="color:#215dc8">
Problem 2. List of blogs on page load [3]
</h4>

On page `load`, a list of all `blogs` should be shown in the  `div#data-list-wrapper`. 

Expected markup (Blog card list):
<!-- ![landingpage markup]() -->

<figure>
<img src="https://i.imgur.com/WqaQdCw.png"  style=" border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>blog data Markup</b></figcaption>
</figure>

- Every `div.card` is appended to the `div.card-list`.

Expected markup (example, single card div inside card-list div): 
<!-- ![blogMarkUp]() -->

<figure>
<img src="https://i.imgur.com/FLtjxNK.png"  style=" border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>Single blog card Markup</b></figcaption>
</figure>

- **Markup - elements, classes & IDs should be identical to the above screenshot.**

- The **Card** with `div.card` having two child div 
  1. The `div.card_img` in this image of the blog is present.
  2. The `div.card_body` in this 
    - p tag with `p.title` **with the title of blog**.
    - p tag with `p.sub_title` with the sub_title of the blog
    - p tag with `p.category` with the category of the blog
    - img tag with `img.profile_pic` of profile_pic of blog's author
    - p tag with `p.name` with the name of the author 
    - p tag with `p.publish_date` with publish_date of blog
    - button with `button.deleteBtn` with `Delete` text 
        -  class= deleteBtn
        -  data-id= id of the blog 
    - button with `button.readBtn` with `Read More` text 
        -  class= readBtn
        -  data-id= id of the blog 

| Sr. | tag    | class                                             | text/src                       |
| --- | ------ | ------------------------------------------------- | ------------------------------ |
| 1.  | p      | <span style="color:#215dc8">title</span>        | `title` of blog                |
| 2.  | p      | <span style="color:#215dc8">sub_title</span>    | the `sub_title` of the blog    |
| 3.  | p      | <span style="color:#215dc8">category</span>     | `category` of blog             |
| 4.  | img    | <span style="color:#215dc8">profile_pic</span>  | `profile_pic` of blog's author |
| 5.  | p      | <span style="color:#215dc8">name</span>         | `name` of author               |
| 6.  | p      | <span style="color:#215dc8">publish_date</span> | `publish_date` of blog         |
| 7.  | button | <span style="color:#215dc8">deleteBtn</span>    | `Delete` text                  |
|     |        | data-id= id of the blog                           |                                |
| 8.  | button | <span style="color:#215dc8">readBtn</span>      | `Read More` text               |
|     |        | data-id= id of the blog                           |                                |

Expected UI (example card):
<!-- ![blogUI]() -->

<figure>
<img src="https://i.imgur.com/u8T1bNH.png"  style=" border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>Single blog card UI</b></figcaption>
</figure>

Data mapping:
<!-- ![dataMarkUp]() -->

<figure>
<img src="https://i.imgur.com/zFWQtHM.png"  style=" border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>dataMarkUp</b></figcaption>
</figure>

- The data should be fetched from `${baseServerURL}/blogs`
- The blogs should be shown on page `load`

<h4 style="color:#215dc8">
Problem 3. Ability to delete a Blog [2]
</h4>

- In each blog, the card must have a button `Delete` with `button.deleteBtn` On clicking this button particular blog must be removed from DOM as well as `db.json`.

- make a 'DELETE' request at ```${baseServerURL}/blogs/{blogId}```
- *make a 'GET' request after delete to get updated data at ```${baseServerURL}/blogs```*
- **` the page must not reload the list must update`**  otherwise you will lose the marks.

<h4 style="color:#215dc8">
Problem 4. Check sort the Newest first functionality working as expected [1]
</h4>

- Sorting for `newest-first` UI:
<!-- ![sort newest-first] -->

<figure>
<img src="https://i.imgur.com/1iYQHLz.png"  style=" border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>Sort Based On publish date Newest first  </b></figcaption>
</figure>

With the click of the button `#newest-first`, the blog list should be sorted with newly created one blog first i.e (ascending order)based on their *publish_date*.

With the click of the button `#oldest-first`, the blog list should be sorted with older blog first i.e (descending order) based on their *publish_date*.

You may use any approach of your choice for sorting. You may sort the available data, or you may make a new fetch request to the server and update the list. In case you want to fetch data, please use the [JSON Server documentation](https://github.com/typicode/json-server).

`Hint you are making a new fetch request: use param _sort and _order `

<h4 style="color:#215dc8">
Problem 5. Check sort Oldest first functionality working as expected [1]
</h4>

- similar to Newest first

<h4 style="color:#215dc8">
Problem 6. Filtering Blogs based on the category [5]
</h4>

 You have to create five types of filters as

 1. ***International***
 2. ***Business***
 3. ***Entertainment***
 4. ***Sports***
 5. ***Health***

- Filtering for `Entertainment` UI:
<!-- ![filter fantacy] -->
<figure>
<img src="https://i.imgur.com/ApKbcrW.png"  style=" border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>Filtering Based On category Entertainment</b></figcaption>
</figure>

1. When the button `#filter-International` is clicked, the blog list is expected to be filtered. It should only show the blogs whose `category` is ***`International`***.

- similar for `#filter-Business`,`#filter-Entertainment`,`#filter-Sports`, and 
`#filter-Health`.

You may use any approach of your choice for filtering. You may filter the available data, or you may make a new fetch request to the server and update the list. In case you want to fetch data, please refer to the [JSON Server documentation](https://github.com/typicode/json-server).

`Hint you are making a new fetch request: use param category= `

***Note***:- Get the updated data from API after POST, PATCH, or DELETE request is done.

### <span style="color:#215dc8">Point to Note for blog page</span>
<h4 style="color:#215dc8">
Problem 7. Able to read blogs using the Read more button [2]
</h4>

- In each blog, the card must have a button `Read More` with `button.readBtn` On clicking this button 
    1. user should re-direct to `blog.html`
    2. Particular blog data should be added to local Storage with the key as `blog`.

- In `blog.html`, take blog data from localStorage and show it on DOM as
  - UI of a blog 

  <figure>
<img src="https://i.imgur.com/Lnck0NY.png"  style=" border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>UI of blog page </b></figcaption>
</figure>

- different tags, as mentioned in the table below, are already created; catch them by class and add the required text/src to them.

| Sr. | tag | class                                            | text/src                    |
| --- | --- | ------------------------------------------------ | --------------------------- |
| 1.  | h1  | <span style="color:#215dc8">title</span>       | `title` of blog             |
| 2.  | p   | <span style="color:#215dc8">sub_title</span>   | the `sub_title` of the blog |
| 3.  | img | <span style="color:#215dc8">profile_pic</span> | `profile_pic` of author     |
| 4.  | p   | <span style="color:#215dc8">name</span>        | `name` of blog's author     |
| 5.  | img | <span style="color:#215dc8">image</span>       | `image` of blog           |
| 6.  | p   | <span style="color:#215dc8">description</span> | `description` of blog       |

-  A `button` with text **`back`**, will redirect you to the index page. It has already created no need to build it.

<h4 style="color:#215dc8">
Problem 8. Read more should add data in localStorage [1]
</h4>

-    ```
      example object `blog` = {
      "id": ,
      "category": ,
      "title": ,
      "sub_title": ,
      "image": ,
      "description": ,
      "author": {
        "name": ,
        "profile_pic": 
      },
      "publish_date": 
      }
     ```
      
`Hint: localStorage.setItem("blog", JSON.stringify)`

<figure>
<img src="https://i.imgur.com/5AuiRKK.png"  style=" border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>localStorage blog data</b></figcaption>
</figure>

### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time
- Use `${baseServerURL}/what-ever-route` for server url & not `localhost:9090/what-ever-route` in your solution. Failing to do so may cause all the tests to fail.


### problem is tested on CP

<img src="https://i.imgur.com/HQZXJnE.png"/>