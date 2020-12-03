import React, { useState } from "react";
import "./Search.css";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import MicRoundedIcon from "@material-ui/icons/MicRounded";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionType } from "../reducer";

function Search({hideButtons = false}) {
  const [{}, dispatch] = useStateValue()
  const [input, setInput] = useState("");
  const history = useHistory()

  const search = (e) => {
    e.preventDefault();
    dispatch({
        type:actionType.SET_SEARCH_TERM,
        term:input
    })

    history.push('./search')
  };
  return (
    <form className="search" onSubmit={search}>
      <div className="search_input">
        <SearchRoundedIcon className="search_inputIcon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicRoundedIcon />
      </div>

        { !hideButtons ?
          <div className="search_button">
          <Button type="submit" variant="outlined" >
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
        : (
            <div className="search_button">
            <Button className='search_buttonHidden' type="submit" variant="outlined">
              Google Search
            </Button>
            <Button className='search_buttonHidden' variant="outlined">I'm Feeling Lucky</Button>
          </div>
        )
    }
    
    </form>
  );
}

export default Search;
