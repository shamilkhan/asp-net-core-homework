import React from "react";
import loadAll from "../../api/get-all-articles";
import Loader from "../../shared/loader";
import Item from "./article";

const fakeData = [
  {
    id: 0,
    name: "Test",
    text: "Text"
  },
  {
    id: 1,
    name: "TypeScript Pro tips/patterns with (or without) React",
    text:
      "Well, it definitely makes your Java/C# alter ego feel like home, having types within JavaScript (which is amazing !), but then, it introduces other “language features” which are not part of standard JavaScript, and because of those, it may throw a false prejudice about TypeScript, by putting it to a “Completely new language” bag, which isn’t really true IMHO."
  },
  {
    id: 2,
    name: "TypeScript Pro tips/patterns with (or without) React",
    text:
      "Weasdffasdfdsaadsfll, it definitely makes your Java/C# alter ego feel like home, having types within JavaScript (which is amazing !), but then, it introduces other “language features” which are not part of standard JavaScript, and because of those, it may throw a false prejudice about TypeScript, by putting it to a “Completely new language” bag, which isn’t really true IMHO."
  },
  {
    id: 3,
    name: "TypeScript Pro tips/patterns with (or without) React",
    text:
      "Well, itdsafasdfasdfasdfasdf definitely makes your Java/C# alter ego feel like home, having types within JavaScript (which is amazing !), but then, it introduces other “language features” which are not part of standard JavaScript, and because of those, it may throw a false prejudice about TypeScript, by putting it to a “Completely new language” bag, which isn’t really true IMHO."
  }
];

function Items() {
  React.useEffect( () => {
    loadAll();
  }, []);
  return (
    <>
      {fakeData.map(item => {
        const { id, name, text } = item;
        return <Item key={id} {...item} />;
      })}
    </>
  );
  // const [loading, setLoading] = React.useState(true);
  // return <div>{loading ? <Loader /> : <div>Content</div>}</div>;
}

export default Items;
