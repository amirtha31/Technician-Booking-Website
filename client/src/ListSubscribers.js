
import { useEffect,  useState } from "react";
import { MantineReactTable } from "mantine-react-table";
import axios from "axios";
import Sidebar from "./Sidebar";

export default function ListSubscribers() {
  const [tableData, seTableData] = useState([]);

  
 
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
    
  }

  useEffect(() => {
    fetchData()
  }, []);

  
  return (
    <>
    <Sidebar></Sidebar>
        <div style={{padding:"1rem", display:"flex",flexDirection:"column"}}>
          <div style={{float:"right",display:"flex",alignItems:"flex-end",justifyContent:"end"}}>
       
        </div>
<div className="table" style={{marginTop:"1rem"}}>

        {tableData?.length && columns && <MantineReactTable data={tableData} columns={columns} renderTopToolbarCustomActions={({ table }) => {
       
        }}
 enableSorting={true} >
          
          </MantineReactTable>}
        
      </div>
      </div>
    </>
  );
}
