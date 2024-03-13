import './App.css';
import Sidebar from './Sidebar';
import Content from './Content';
import { useState } from 'react';

export default function AdminDashboard(){
    const [page, setPage] = useState('');
    return(
        <div>
            <Sidebar setPage={setPage} />
      <Content page={page} />
            
        </div>
    )
}