import React , {useRef} from 'react'
import styles from './LandingPage.module.scss'
import CategoryItem from '../../Components/CategoryItem/CategoryItem'
import popular from "../../assets/game-structure.svg"
import PopularGame from '../../Components/PopularGames/PopularGame'
import image1 from '../../assets/1.png'
import CategoryHeader from '../../Components/CategoryHeader/CategoryHeader'
import GameList from '../../Components/GameList/GameList'
import gameControlle from '../../assets/game-controlle.svg'
import apps from '../../assets/apps.svg'
import PageLayout from '../../Layout/PageLayout'
import Requests from '../../API/Requests'
import 'react-slideshow-image/dist/styles.css'
import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { SetUser } from '../../Slices/UserSlice.js';
import { useState } from 'react'
import { BASE_URL } from '../../API/consts'

export default function LandingPage() {
  const state = useSelector((state) => state.User); // Access the "User" slice of the state
  const dispatch = useDispatch();
  const [profileStatus , setProfileStatus] = React.useState(false);
  const [allCategories , setAllCategories ] = useState([])
  const [main4categories, setMain4categories] = useState([]);


  const fetchCategories = async () => {
    try {
      const res = await Requests().getAllCategories();
      // console.log(res.data.data.amount);
      console.log("All categories : ",res)
      setAllCategories(res)
    } catch (error) {
      console.error("Error getting categories:", error);
    }
  }; 

  const fetchMain4Categories = async () => {
    try {
      const res = await Requests().get4mainCategory();
      // console.log(res.data.data.amount);
      console.log("main 4 categories : ", res);
      setMain4categories(res);
    } catch (error) {
      console.error("Error getting categories:", error);
    }
  }; 


  useEffect(async () => {
    if (state.set == 0){
      const res = await Requests().getProfile();
      if(res != undefined)
      {
        setProfileStatus(true); 
        console.log(res.data.data)
        dispatch(SetUser({firstName:res.data.data.firstName , lastName : res.data.data.lastName , email : res.data.data.email , Image : BASE_URL + "/" + res.data.data.urlImage , birthDate : res.data.data.birthDate, phoneNumber : res.data.data.phoneNumber, isAdmin : res.data.data.isAdmin}));

      }
    }
    fetchCategories()
    fetchMain4Categories();
  }, [])

  const mainbody = useRef(null);
  return (
    <PageLayout>
      <div className={styles.popular}>
        <CategoryHeader icon={popular} title={"محصولات پرطرفدار"} />
        <div className={styles.PopularGames}>
          {main4categories.map((item) => {
            return (
              <div className={styles.item}>
                <PopularGame
                  id={item.id}
                  name={item.title}
                  image={item.imageURL}
                  description={item.description}
                />
              </div>
            );
          })}
        </div>
      </div>
      {
          allCategories.map((category) => {
            return (
              <div className={styles.AllGames}>
                <CategoryHeader
                  icon={gameControlle}
                  title={category.title}
                  id={category.id}
                />
                <GameList Products={category.categories} isAdmin={false} id={category.id} />
              </div>
            );
          }
          )
        }
      {/* <div className={styles.AllGames}>
        <CategoryHeader icon={apps} title={"محصولات دیگر"} />
        <GameList Products={all} isAdmin={false} />
      </div> */}
    </PageLayout>
  );
}
