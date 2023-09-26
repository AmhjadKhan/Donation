import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Datas from "../../Components/Data/Datas";
import DataInfocard from "./DataInfocard";

function Datainfo() {
  const [datain, setdatain] = useState({});

  const datas = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const data = datas.find((data) => data.id === idInt);
  console.log(data)

  return (
    <div>
      <DataInfocard data={data}/>
    </div>
  );
}

export default Datainfo;
