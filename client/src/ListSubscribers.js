import { Avatar, Text, Button } from "@mantine/core";
import { IconStar } from "@tabler/icons-react";
import { useEffect, useMemo, useState } from "react";
import { MantineReactTable, useMantineReactTable } from "mantine-react-table";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function ListSubscribers() {
  const [tableData, seTableData] = useState([]);
//   const [DocumentNo, setDocumetNo] = useState("");
  const navigate =useNavigate()
  
 
  const columns = [
      
      {
        accessorKey: "email",
        header:"Email",
      },
      
    ]


  function fetchData() {
    axios
      .get("http://localhost:3001/all-subscribers")
      .then((data) => seTableData(data.data))
      .catch((err) => console.log(err));
    //   setDocumetNo("")
  }
//   function handleSearch() {
//     axios.post("http://localhost:3001/search", {
//       DocumentNo
      
//     }).then((data) => seTableData(data.data))
//     .catch((err) => console.log(err));
    
      
//   }
  useEffect(() => {
    fetchData()
  }, []);

  const navigateToAnotherPage=()=>{
     navigate('/add/data')
  }
  return (
    <>
    <Sidebar></Sidebar>
        <div style={{padding:"1rem", display:"flex",flexDirection:"column"}}>
          <div style={{float:"right",display:"flex",alignItems:"flex-end",justifyContent:"end"}}>
       {/* <Button  size={"md"} className="Btn" onClick={navigateToAnotherPage}
      variant="gradient" gradient={{ from: '#242f37', to: 'red', deg: 2 }}
      radius="md">
          Add
        </Button> */}
        </div>
<div className="table" style={{marginTop:"1rem"}}>

        {tableData?.length && columns && <MantineReactTable data={tableData} columns={columns} renderTopToolbarCustomActions={({ table }) => {
        //   return (
        //     <div style={{ width: "80%" }}>
        //       <input value={DocumentNo} onChange={(e)=> setDocumetNo(e.target.value)}></input>
        //       <button onClick={handleSearch}>Search</button>
        //       <button onClick={fetchData}>clear</button>
        //     </div>
        //   );
        }}
 enableSorting={true} >
          
          </MantineReactTable>}
        
      </div>
      </div>
    </>
  );
}
