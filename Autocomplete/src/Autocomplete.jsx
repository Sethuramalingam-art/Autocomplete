import React, { useEffect, useState } from "react";
import data from "./data.json";
import useDebounce from "./useDebounce";

const Autocomplete = () => {
  const [listData, setListData] = useState([]);
  const [searchVal, setSearchVal] = useState("");

  const searchValue = useDebounce(searchVal, 2000);

  useEffect(() => {
    if (searchValue) {
      let filtered = data.filter((item) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      console.log(filtered);
      setListData(filtered);
    } else {
      setListData([]);
    }
  }, [searchValue]);
  const handleChange = (e) => {
    setSearchVal(e.target.value);
    // console.log(e.target.value);
    // if (e.target.value) {
    //   let filtered = data.filter((item) =>
    //     item.name.toLowerCase().includes(e.target.value.toLowerCase())
    //   );
    //   console.log(filtered);
    //   setListData(filtered);
    // } else {
    //   setListData([]);
    // }
  };
  return (
    <>
      <input type="text" name="fruitName" onChange={handleChange} />
      {listData.map((d, i) => {
        return <>{d.name}</>;
      })}
    </>
  );
};

export default Autocomplete;
