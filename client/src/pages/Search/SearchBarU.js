
import React, { useEffect, useState } from "react";
import Axios from "axios";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import "./Search.css";

const SearchBar = ({ placeholder }) => {
  // const [filteredData , setFilteredData] = useState([]);

  // const handleFilter = (event) => {
  //   const searchdoc = Axios.get('/doctor/search');
  //   const docinfo = JSON.stringify(searchdoc.data);
  //   console.log(docinfo);
  //   const searchWord = event.target.value;
  //   const newFilter = docinfo.filter((value)=>{
  //     return value.firstname.includes(searchWord);
  //   });
  //   setFilteredData(newFilter);
  // }

  // return (
  //   <>
  //     <div className="search">
  //       <div className="searchInputs">
  //         <input type="text" placeholder={placeholder} onChange={handleFilter}/>
  //         <div className="searchIcon">
  //           <SearchIcon />
  //         </div>
  //         {filteredData.length != 0 &&(
  //         <div className="dataResult">
  //           {filteredData.map((value,key) => {
  //             return <div>{value.firstname}</div>
  //           })}
  //         </div>
  //         )}
  //       </div>
  //     </div>
  //   </>
  // );
  // ---------------------------------------------------------------------------------------
  // let itemList = [];
  // let itemList2 = [];

  // const [docdata, setDocdata] = useState([itemList]);
  // const [wordEntered, setWordEntered] = useState("");

  // const searchdoc = async () =>{
  //   const docinfo = await Axios.get('/doctor/search');
  //   const data = docinfo.data
  //   console.log(data)

  //   itemList = itemList2.concat(data);
  //   console.log(itemList)

  //   // console.log(data[0].firstname)
  //   setDocdata(itemList);
  // }

  // const filterBySearch = (event) => {
  //   const query = event.target.value;
  //   setWordEntered(query);
  //   var updatedList = [...itemList];
  //   updatedList = updatedList.filter((item) => {
  //     return item.toLowerCase().indexOf(query.toLowerCase()) !== -1;
  //   });
  //   console.log(updatedList)
  //   setDocdata(updatedList);
  // };

  // const clearInput = () => {
  //   setDocdata([]);
  //   setWordEntered("");
  // };

  // useEffect(() => {
  //   searchdoc();
  // },[])
  // return(
  //   <>
  //     <div className="search">
  //       <div className="searchInputs">
  //         <input type="text" placeholder={placeholder} value={wordEntered} onChange={filterBySearch}/>
  //         <div className="searchIcon">
  //         {docdata.length === 0 ? (
  //           <SearchIcon />
  //         ) : (
  //           <CloseIcon id="clearBtn" onClick={clearInput}/>
  //         )}
  //       </div>
  //         {/* <div className="dataResutl">
  //         <ol className="dataItem">
  //       {docdata.map((item, index) => (
  //          <li key={index}>{item}</li>
  //       ))}
  //     </ol>
  //     </div> */}
  //     {docdata.length != 0 && (
  //       <div className="dataResult">
  //         {docdata.slice(0, 15).map((item, index) => {
  //           return (
  //             <p className="dataItem" key={index}>{item.firstname} </p>
  //           );
  //         })}
  //       </div>
  //       )}
  //     </div>
  //     </div>
  //   </>
  // )

  const [users, setUsers] = useState([]);
  const [text, setText] = useState("");
  const [suggestion, setSuggestion] = useState([]);

  const loadUsers = async () => {
    const docinfo = await Axios.get("/doctor/search");
    const data = docinfo.data;
    setUsers(data);
  };
  const onChangeHandler = (text) => {
    let matches = [];
    if (text.length > 0) {
      matches = users.filter((item) => {
        const regex = new RegExp(`${text}`, "gi");
        return item.firstname.match(regex);
      });
    }
    // console.log("matches", matches);
    setSuggestion(matches);
    setText(text);
  };

  const onSuggestHandler = (text) => {
    setText(text);
    setSuggestion([]);
  };

  const clearInput = () => {
    setSuggestion([])
    setText('');    
  }

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          onChange={(e) => onChangeHandler(e.target.value)}
          value={text}
          // onBlur={() => {//   setTimeout(() => {//     setSuggestion([]);//   },100);// }}
        />

      <div className="searchIcon">
        {suggestion.length === 0 ? <SearchIcon /> : <CloseIcon  id="clearBtn" onClick={clearInput}/>}
      </div>
      </div>
      {suggestion.length!=0 && (
      <div className="dataResult">
      {suggestion &&
        suggestion.map((suggestion, i) => {
          return (
            
            <a href="/client/public/inner-page.html" target="_black" className="dataItem" onClick={() => onSuggestHandler(suggestion.firstname)} key={i}>
              <p className="searchpara">{suggestion.firstname}</p>
            </a>
          );
        })}
        </div>
        )}
    </div>
  );
};

export default SearchBar;
