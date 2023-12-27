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

export default function LandingPage() {
  const state = useSelector((state) => state.User); // Access the "User" slice of the state
  const dispatch = useDispatch();
  const [profileStatus , setProfileStatus] = React.useState(false);
  const [allCategories , setAllCategories ] = useState([])


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


  useEffect(async () => {
    if (state.set == 0){
      const res = await Requests().getProfile();
      setProfileStatus(true);
      console.log(res.data.data)
      dispatch(SetUser({firstName:res.data.data.firstName , lastName : res.data.data.lastName , email : res.data.data.email , image : res.data.data.urlImage , birthDate : res.data.data.birthDate, phoneNumber : res.data.data.phoneNumber, isAdmin : res.data.data.isAdmin}));
    }
    fetchCategories()
  }, [])
  const Populares = [
    {
      name: "کالاف دیوتی موبایل",
      image: "https://www.uplooder.net/img/image/67/fe6e711a27d4daacee44991c75f39669/Rectangle-15.png"
      },
    {
      name: "گنشین ایمپکت",
      image: "https://www.uplooder.net/img/image/5/33f3f9c4f29317abe180f280f23bf643/Rectangle-15.png",
    },
    {
      name: "کلش آف کلنز",
      image: "https://www.uplooder.net/img/image/39/2eb40d11bff328e538eb1e44bcff5fc0/Rectangle-15.png",
    },
    {
      name: "ایپکس لجندز",
      image: "https://www.uplooder.net/img/image/25/288e04f40eb951dda7ce9db7979e2373/Rectangle-15.png",
    }
  ]
  const all = [
    {
      name: "کالاف دیوتی موبایل",
      image: "https://www.uplooder.net/img/image/67/fe6e711a27d4daacee44991c75f39669/Rectangle-15.png"
      },
    {
      name: "گنشین ایمپکت",
      image: "https://www.uplooder.net/img/image/5/33f3f9c4f29317abe180f280f23bf643/Rectangle-15.png",
    },
    {
      name: "کلش آف کلنز",
      image: "https://www.uplooder.net/img/image/39/2eb40d11bff328e538eb1e44bcff5fc0/Rectangle-15.png",
    },
    {
      name: "ایپکس لجندز",
      image: "https://www.uplooder.net/img/image/25/288e04f40eb951dda7ce9db7979e2373/Rectangle-15.png",
    },
    {
      name: "کالاف دیوتی موبایل",
      image: "https://www.uplooder.net/img/image/67/fe6e711a27d4daacee44991c75f39669/Rectangle-15.png"
      },
    {
      name: "گنشین ایمپکت",
      image: "https://www.uplooder.net/img/image/5/33f3f9c4f29317abe180f280f23bf643/Rectangle-15.png",
    },
    {
      name: "کلش آف کلنز",
      image: "https://www.uplooder.net/img/image/39/2eb40d11bff328e538eb1e44bcff5fc0/Rectangle-15.png",
    },
    {
      name: "ایپکس لجندز",
      image: "https://www.uplooder.net/img/image/25/288e04f40eb951dda7ce9db7979e2373/Rectangle-15.png",
    }
  ]
  const mainbody = useRef(null);
  return (
    <PageLayout>
      <div className={styles.popular}>
        <CategoryHeader icon={popular} title={"بازی‌های پرطرفدار"} />
        <div className={styles.PopularGames}>
          {Populares.map((item, index) => {
            return (
              <div className={styles.item}>
                <PopularGame key={index} name={item.name} image={image1} />
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.AllGames}>
        <CategoryHeader icon={gameControlle} title={"همه بازی‌ها"} />
        <GameList Products={allCategories} isAdmin={false} />
      </div>
      {/* <div className={styles.AllGames}>
        <CategoryHeader icon={apps} title={"محصولات دیگر"} />
        <GameList Products={all} isAdmin={false} />
      </div> */}
    </PageLayout>
  );
}
