
NOTE:***********IMP*************
REACT is a independent library, React-dom is independent library used to develop webs,React-native is  a independent library used to develop Apps. 
a)React is a library for building user interfaces. It allows you to create reusable UI components and manage those components.
b)React-dom is a library that allows you to render React components to the DOM (Document Object Model)
c)React-native is a library that allows you to build native mobile apps for Android and iOS using React.

1) Basic_react fundamentals

    React is a library of javascript. React is single page application. All the components made are added inside div#root inside index.html file.All the various components are made by creating a function that returns html and that component is rendered inside the index.js file via the reactdom(A virtual dom created by react. It is used for comaparison with the browsers dom .React makes changes in the browsers dom by comparing it to it's own virtual dom). We can see that in index.html file the index.js file is not inject or rather there is no script tag at all .Then the question arises how can we render the div element of html file in index.js file ,it is possible becoz of react-script dependency which is provided by react libray this automatically injects the js file inside the html file .React also provides many testing dependencies. 

    Rules while creating a component in react:
    1) The component should be a function or a class.
    2)If the component retuns a html then we use .jsx and if not returning an html then just .js for the file in which we create the component
    3)The function or class name should be capital or it won't return the html code .
    4)The component should be exported so that it can be imported in other files.
    5)For using the component we have to import it in the file where we are using that component 

2)Vite

    vite is a library of js just like react but is less weighted then react.it has it's own rules for writing the code.For example in react the react-scripts are responsible for adding the js file in html but here it internally adds the js file in html like standard html application. It also does'nt has testing dependency like react that's why it is less weighted tha react .In vite the node_modules folder has to be intalled externally using npm i command

    Rules while creating a component in react:
    1) The component should be a function or a class.
    2)We use .jsx compulsarily for the file in which we create the component
    3)The function or class name should be capital or it won't return the html code .
    4)The component should be exported so that it can be imported in other files.
    5)For using the component we have to import it in the file where we are using that component 

Some important note :
  gitignore file tells us what to actually push in git
  package.json tells us about all the dependency that the react or vite has 
  node_modules has all the dependency
  every component is made inside src folder 
  public folder is the one in which the main html file is 
  We use router to route to some other page in a website

  If we use react in browser then we react dom of react is used for the job while if we wnt to implement the mobile app then we use react native .

lect-5:
  why hooks are needed:
    to propogate the change in UI 

lect-13{Context Api}=>
    Context Api is used to share the data between the components without passing the props .It is used when we don't want to pass unnecessary props to the component who doesn't use that variable but just use that for the sake of passing it to it's children component.

    steps:
    1)create a context
    2)wrap the component with the context provider{context Provider helps provide the data to be used by components}

lect -14(React-Redux)=>
    Redux is a state management library it is independent library.In react there is a react-redux library which helps establishing connection between redux and react.
    react-redux is the implementation odf core library redux.The store and reducers are from the core redux but the usedispatch and useslector are from the react-redux.
    steps:
    1)create a store,use configurestore from react-redux to create a store.(there is only one store in a application this store is called as "single soource of truth")
    2)create reducers
    3)send your reducres to store
    4)now whenever you want to send value in the store use usedispatch and if you want value from the store use useselector.
    Note:WHenever you dispatch you do it via reducers.
