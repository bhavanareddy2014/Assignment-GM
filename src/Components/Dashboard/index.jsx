import React, { useEffect, useState } from 'react'
import { Grid, useMediaQuery, useTheme } from '@mui/material';
import Loader from '../Loader/Loader';
import Slider from '../MainCard/Slider';

function Dashboard() {
    const [card, setCard] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
    const getCardData = async () => {
      const res = await fetch(`https://prod-be.1acre.in/lands/?ordering=-updated_at&page=${page}&page_size=10`)
      const data = await res.json();
      if (data.results.length > 0) {
          setCard(prevLands => [...prevLands, ...data.results]);
      }
      setLoading(false);
    };
  
    useEffect(() => {
      getCardData();
    }, [page]);

    const handelInfiniteScroll = async () => {
        try {
          if (
            window.innerHeight + document.documentElement.scrollTop + 1 >=
            document.documentElement.scrollHeight
          ) {
            setLoading(true);
            setPage((prev) => prev + 1);
          }
        } catch (error) {
          console.log(error);
        }
      };
    
      useEffect(() => {
        window.addEventListener("scroll", handelInfiniteScroll);
        return () => window.removeEventListener("scroll", handelInfiniteScroll);
      }, []);

  return (
    <div style={{marginTop:"1rem"}}> 
      {
        card.length > 0 ? 
        <Grid container direction="row"  
        pl={isMobile ? 2 : 8}
        pr={isMobile ? 2 : 8} justifyContent={"space-around"} spacing={3}>
        {card&& card.map((data) => (
         <>
           <Grid item xs={12} md={4}>
           <Slider data={data}/>
           </Grid>
         </>
        ))}
     {loading && <Loader />}
     </Grid>
        :<Loader/>
      }
       
        </div>
  )
}

export default Dashboard