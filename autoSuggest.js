import React from 'react';

const inputStyle = {
  width : "300px",
  height : "50px",
  padding : "10px",
  borderColor : "black",
  borderWidth : "3px",
  borderStyle : "solid"
}
const btnStyle = {
  width : "200px",
  height : "50px",
  padding : "10px",
  margin : "10px",
  fontWeight : "600",
  fontSize : "14px",
  borderRadius : "9px"
}

const divStyle = {
  display : "flex"
}

const ulStyle = {
  lineHeight : "2"
}

const APIURL = "https://api.github.com/search/repositories?q=";
function App() {
  const [textVal, setTextVal] =  React.useState("");
  const [items, setItems] = React.useState([]);

  function querySearch (q) {
    setTextVal(q);
    fetch(APIURL + q)
    .then(data => data.json())
    .then(data => {
      setItems(data.items);
    })
  }

  function renderSearchList() {
    if (items && items.length) {
      return items.map(item => {
        return <li key={item.id}>{item.full_name}</li>
      }) 
    } else {
      return null;
    }
  }

  return (
    <div className="App">
     <h1>Auto Suggestion Box</h1>
     <input 
        type="text"
        value={textVal}
        onChange= {e => querySearch(e.target.value)} 
        placeholder ="Search Here"
        style={inputStyle}
        list="repo_lists"
      />
      <ul id="repo_lists">
        {renderSearchList()}
      </ul>
    </div>
  );
}




