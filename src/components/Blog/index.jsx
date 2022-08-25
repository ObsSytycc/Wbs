import React from 'react';
import {Box,TextField,InputBase, Typography,IconButton,Tabs, Tab} from '@mui/material';
import {BsSearch} from 'react-icons/bs';
import TabPanel from '../Tabpanel';
import All from './All';
export default function Blog() {

    const [selectedTab, setSelectedTab] = React.useState(0);
    const handleChange = (event,newValue) => {
      setSelectedTab(newValue);
    };

  return (
    <Box sx={style.container}>
      <Box sx={style.searchCont}>
       <Box sx={style.blogHead}>
       <Typography sx={style.bgTxt}>Blog</Typography>
       </Box>
        <InputBase 
         startAdornment={
          <IconButton sx={style.searchBtn} onClick={()=>0}><BsSearch/></IconButton>
         }
        variant="outlined" placeholder="Search" sx={style.search} size="medium"
        />
      </Box>
      <Box sx={style.blogCont}>
        <Box sx={{width:'80%',margin:'0 auto'}}>
        <Tabs
        sx={style.tab }
        value={selectedTab}
        onChange={handleChange}
        aria-label="basic tabs example"
        variant="scrollable"
        classes={{
            indicator: style.indicator
          }}
      >
        <Tab label="All"  sx={selectedTab===0?style.selectedTab:style.tabTxt} />
        <Tab label="Technology" sx={selectedTab===1?style.selectedTab:style.tabTxt} />
        <Tab label="Science" sx={selectedTab===2?style.selectedTab:style.tabTxt}/>
        <Tab label="Space" sx={selectedTab===3?style.selectedTab:style.tabTxt}/>
        <Tab label="Engineering" sx={selectedTab===4?style.selectedTab:style.tabTxt}/>
        <Tab label="Fashion"  sx={selectedTab===5?style.selectedTab:style.tabTxt}/>
        <Tab label="Health"  sx={selectedTab===6?style.selectedTab:style.tabTxt}/>
      </Tabs>
        <TabPanel value={selectedTab} index={0} >
         <All/>
        </TabPanel>
        <TabPanel value={selectedTab} index={1}>
        <All/>
        </TabPanel>
        <TabPanel value={selectedTab} index={2}>
        <All/>
        </TabPanel>
        <TabPanel value={selectedTab} index={3}>
        <All/>
        </TabPanel>
        <TabPanel value={selectedTab} index={4}>
        <All/>
        </TabPanel>
        <TabPanel value={selectedTab} index={5}>
        <All/>
        </TabPanel>
        <TabPanel value={selectedTab} index={6}>
        <All/>
        </TabPanel>
       
      </Box>
        </Box>
      </Box>
     
    
  )
}

const style={
    container:{
        width:'100%',
        minHeight:'400px',
        paddingTop:'40px',
        display:'flex',
        flexDirection:'column',
        marginTop:'10px',
        backgroundColor:'#EEF0F2'
    },
    blogHead:{
        height:'200px',
        backgroundColor:'#06113C',
        borderRadius:'30px',
        width:'80%',
        margin:'0 auto',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    bgTxt:{
        fontFamily:"Mont",
fontSize:"36px",
fontWeight: 700,
lineHeight:"46px",
 color:'#fff'
    },
    searchCont:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    search:{
       borderRadius:'30px',
        width:'40%',
       marginTop:'-20px',
       backgroundColor:'#fff',
       boxShadow:"3px 3px 10px 3px rgb(0 0 0 / 0.2)",
      outlineSize:'0px',
      height:'60px',
      paddingLeft:'10px'
    },
    searchBtn:{
        marginRight:'10px',
       
    },
    blogCont:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    paddingTop:'50px'
    },
    tab:{
      width:'80%',
      margin:'0 auto',
      "& .MuiTabs-indicator": {
        display: "none",
      },
      "& .MuiTab-root.Mui-selected": {
        color: '#fff'
      }
    },
    indicator:{
color:'#fff'
    },
    tabTxt:{
            fontFamily:'Mont',
            fontSize:"18px",
            fontWeight: 600,
            lineHeight:"23px",
            color:' #000000CC'        
    },
    selectedTab:{
        backgroundColor:'#FF8C32',
        color:'#fff',
        fontFamily:"Mont",
fontSize:"20px",
fontWeight: 800,
lineHeight:"26px",
borderRadius:'18px'

    }

}