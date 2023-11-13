import React , {useRef} from 'react'
import styles from './LandingPage.module.scss'

import logo from '../../assets/logo.png'
import bars from '../../assets/bars.svg'
import CategoryItem from '../../Components/CategoryItem/CategoryItem'
import azhini from "../../assets/azhini.jfif"
import popular from "../../assets/game-structure.svg"
import PopularGame from '../../Components/PopularGames/PopularGame'
import image1 from '../../assets/1.png'
import CategoryHeader from '../../Components/CategoryHeader/CategoryHeader'
import GameList from '../../Components/GameList/GameList'
import gameControlle from '../../assets/game-controlle.svg'
import apps from '../../assets/apps.svg'
import Footer from '../../Components/Footer/Footer'
import PageLayout from '../../Layout/PageLayout'
import { Slide } from 'react-slideshow-image';
import BigSlider from '../../Components/BigSlider/BigSlider'

import 'react-slideshow-image/dist/styles.css'
export default function LandingPage() {
  const Categorys = ["کالاف دیوتی موبایل" ,"گنشین ایمپکت" , "کلش آف کلنز", "محصولات فیزیکی", "ایپکس لجندز"]
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
      سلاممممم
      <div className={styles.Category}>
        <CategoryHeader icon={bars} title={"دسته‌بندی محصولات"} />
        <div className={styles.CategoryItems}>
          {Categorys.map((item, index) => {
            return <CategoryItem key={index} title={item} />;
          })}
        </div>
      </div>
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
        <GameList Products={all} />
      </div>
      <div className={styles.AllGames}>
        <CategoryHeader icon={apps} title={"محصولات دیگر"} />
        <GameList Products={all} />
      </div>
    </PageLayout>
  );
}
