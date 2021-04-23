import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";

import loupe from "./loupe.svg";
import { flatten, fullPathCreator } from "./utils";

export default function Spotlight({ routes, blur }) {
  const [inputValue, setInputValue] = useState("");
  const [flatRoutes] = useState(flatten(fullPathCreator(routes)));
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [suggestions, setSuggestions] = useState([]);

  const inputRef = useRef(null);
  const suggestionsRef = useRef(null);
  const selectedIndexRef = useRef(null);

  const history = useHistory();

  const handleInput = (e) => setInputValue(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(suggestions[selectedIndex].path);
    blur();
  };

  useEffect(() => {
    suggestionsRef.current = suggestions;
  }, [suggestions]);

  useEffect(() => {
    selectedIndexRef.current = selectedIndex;
  }, [selectedIndex]);

  useEffect(() => {
    const pressKeys = (e) => {
      if (e.keyCode === 40) {
        // arrow DOWN
        if (selectedIndexRef.current >= suggestionsRef.current.length - 1) {
          setSelectedIndex(0);
        } else {
          setSelectedIndex((s) => s + 1);
        }
      }
      if (e.keyCode === 38) {
        // arrow UP
        setSelectedIndex((s) => (s === 0 ? 0 : s - 1));
      }
      // Escape key
      if (e.keyCode === 27) {
        inputRef.current.blur();
      }
    };

    inputRef.current.focus();

    window.addEventListener("keydown", pressKeys);

    return () => {
      window.removeEventListener("keydown", pressKeys);
    };
  }, [suggestions.length]);

  useEffect(() => {
    if (inputValue.length >= 1) {
      setSuggestions(
        flatRoutes.filter(({ name }) =>
          name.toLowerCase().includes(inputValue.toLowerCase())
        )
      );
    } else {
      setSuggestions([]);
    }
    setSelectedIndex(0);
  }, [inputValue]);

  return (
    <div className="spotlight active fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center bg-opacity-30 bg-black">
      <div className="relative opacity-80 rounded-xl">
        <form onSubmit={handleSubmit}>
          <input
            className="w-full p-2 pl-11 bg-gray-800 text-3xl rounded-xl border border-gray-500 placeholder-gray-400 text-gray-100 font-extralight"
            placeholder="Spotlight search"
            style={{
              backgroundImage: `url('${loupe}')`,
            }}
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={handleInput}
            // onBlur={blur}
          />
        </form>
        {suggestions.length >= 1 && (
          <ul className="-z-1 absolute top-full w-full bg-gray-800 border border-t-0 border-gray-500 -mt-3 rounded-b-xl pt-4 pb-1 px-1">
            {suggestions.map((route, i) => {
              const selected = i === selectedIndex;

              return (
                <li
                  key={route.name}
                  onClick={() => {
                    history.push(route.path);
                    blur();
                  }}
                  className={`${
                    selected
                      ? "bg-blue-500 hover:bg-gray-600"
                      : "hover:bg-gray-500"
                  } px-3 py-1 flex justify-between rounded-lg`}
                >
                  <div className="text-gray-200">{route.name}</div>
                  <div
                    className={`${
                      selected ? "text-gray-300" : "text-gray-500"
                    } text-sm italic`}
                  >
                    {route.path}
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
