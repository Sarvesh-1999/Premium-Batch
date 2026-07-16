import { createRoot } from "react-dom/client";
import App from "./App";
createRoot(document.getElementById("root")).render(<App />);

//! HTML  - HYPERTEXT MARKUP LANGUAGE
// 1) predefined tags
// 2) case insensitive
// 3) parent tag not required
// 4) for , class , onclick
// 5) we have unpaired tags -> <br> , <hr> , <input>

//! XML - EXTENSIBLE MARKUP LANGUAGE
// 1) user-defined tags
// 2) case sensitive
// 3) must have parent tag
// 4) HTMLfor , className , onClick
// 5) all unpaired tags must having closing tags -> <br></br> || <br/> self close

//! FRAGMENTS : These are empty tags used to wrap multiple element as a parent tag without creating an extra node.
// Example :- <></>
