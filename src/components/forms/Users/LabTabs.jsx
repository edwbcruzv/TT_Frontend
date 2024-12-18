import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TableUsers from './TableUsers';
import { useEffect } from 'react';
import { useState } from 'react';

export default function LabTabs() {
  const [value, setValue] = useState('1');
  const [url, setUrl] = useState(null)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    setUrl("usuario")

    // return () => {
    //   second
    // }
  }, [])
  
  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab onClick={()=>setUrl("usuario")} label="Administradores" value="1" />
            <Tab onClick={()=>setUrl("profesor")} label="Profesores" value="2" />
            <Tab onClick={()=>setUrl("estudiante")} label="Alumnos" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1"><TableUsers url={url} /></TabPanel>
        <TabPanel value="2"><TableUsers url={url} /></TabPanel>
        <TabPanel value="3"><TableUsers url={url} /></TabPanel>
      </TabContext>
    </Box>
  );
}

