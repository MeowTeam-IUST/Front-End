import React from 'react'
import styles from './LandingPage.module.scss'
import ProfileHeader from '../../Components/ProfileHeader/ProfileHeader'
import CartHeader from '../../Components/CartHeader/CartHeader'
import SearchHeader from '../../Components/SearchHeader/SearchHeader'
import logo from '../../../public/logo.png'
import bars from '../../../public/bars.svg'
import CategoryItem from '../../Components/CategoryItem/CategoryItem'
import azhini from "../../../public/azhini.jfif"
import popular from "../../../public/game-structure.svg"

import PopularGame from '../../Components/PopularGames/PopularGame'
export default function LandingPage() {
  const Categorys = ["کالاف دیوتی موبایل" ,"گنشین ایمپکت" , "کلش آف کلنز", "محصولات فیزیکی", "ایپکس لجندز"]
  const Populares = [
    {
      name: "کالاف دیوتی موبایل",
      image: "https://s3-alpha-sig.figma.com/img/a4aa/63a6/825ea33595e469889cc196ced749075b?Expires=1698019200&Signature=d-t2lNKvMiYwEsgL6MLLoMAs0sEoV0op~pQLO1x3e4Xo2YGnT2g9MY7tdzTlAe0BORFPmchVBfhMq7WPflgRTETh0nKZaSpogl-pA0SUGArWYU-HjVZ5B6onQlz9M3r412dVPRLZgGysXivA~PV2vjMEx4syOEc51fEPdiRYTzC1LCvS6jtpNcDmxOe8oerJtBk1Qw6wJAhbugtK6KVWgBjDsQt5qed~i6txArpDr3yJ4fYUu330tTyIPfIHtOrt2XMSrmHXafE6cpzUxZfNZSNFl7DzBKNwrn-zA-KotqbA3HehBlzH-ZzAD6GjaTtH6SGLqj2Yqp3nC62~w2Yb6w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      name: "گنشین ایمپکت",
      image: "https://s3-alpha-sig.figma.com/img/622e/e9d5/07d11667a5e511731187a2053d6e5c40?Expires=1698019200&Signature=ZJulij3GOSXZ3Pe-kLkGtsbxRnVAakngD-5bc6NXj4YUoqa1lXayN3jq70yfRqkNkzzRZi2NYySl6ovudlSGAMzODfYo9c1UxuBnnxBCQkbQrCYKvsae1IIM7czrbbYeoWFwtVIsxAi7FlMsVcwHjP7WLdKbV4rwPRt~OBX5-F8qxeMft1sRIr5TDSzf6wJC0C3AXpiiWbW7WNvj~MSFMljIxWCOTrJEYdcv5-EMy7~A7Bt927CtIMMY7A5AFeF5Sy46wGNtYXcDOZkQlS0sNUXB7yvxN6T2buWt99Gc1Jkc~4WMmbkGLtIXMw4ztuL9w5NEVLxOT7QDqYFGjA8nZA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      name: "کلش آف کلنز",
      image: "https://s3-alpha-sig.figma.com/img/0d37/e205/41b24b0b552778bdae45bcc2832ecdc2?Expires=1698019200&Signature=UWOcf7vkVOiwqoqFH~YeVd-SHAdSUML6tyZmd~eCeZmCyhBQw7fJsx0ohE2ZcMwegmmKa8q1VcP676wMroHIeQMxicKxJeqY~~lo34OIKF8eC1Fxx2u-p5Y1wSHai3kfDsfc~iiyPmoNeznJOjcYsQYuXp12YsU0aRlMtTjPmnf3QzzbLA8uKi1Vs-Zwo4jfygEZATbhbkM7SnXmTxqB2B3mBidshK85dvLfJek-3S7MGb9estmeKQBBs8UWeR79FGv4pdHzr7pIpMLnCx21xL3TXcUkYStSPr~EM4XTq~9~2OVldrbPvs8wWEladjYp0i1wz2Vf4QsscymSnO7xtQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      name: "ایپکس لجندز",
      image: "https://s3-alpha-sig.figma.com/img/8c7c/87a3/25c58819ee8190f10c766ffe4356bbaf?Expires=1698019200&Signature=ZRwACI2xkLBK-yVaKgp0~OZmxT5pV4FaeeB3HIqNq1VY6xuvBoT85QCiq3pQInNKnxMFEJaU98EB6w8pFUNULQb1SNVE46dOWKZOgO2PoMvC349G-rsMf0PODU-CTU5U0CAJzfdZiJigpN8pnrKOxcbw7Zvug--lccK0EyO3DvvdvYYwO4M0uDeqJS--yNR00HtaLY-aQvb6SOCyWCfN7uLQrzLPDEb-XqRD17E4DJNLru7g9-9ZDSPv23QeCWhbOzdGcEIMaSshRCJm9DdaxO-lhGfynfa0~bfUob-pXawkTwrdwJgBxAF5VoTWR~1TxM~uwn2KQefZtpQlAN~7PQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    }
  ]
  return (
    <div className={styles.fullPage} dir='rtl'>
      <div className={styles.Header}>
        <ProfileHeader name={"محمدعلی آژینی"} image={azhini}/>
        <CartHeader/>
        <SearchHeader/>
        <img className={styles.logo} src={logo}/>
      </div>
      <div className={styles.Category}>
        <div className={styles.CategoryHeader}>
          <img className={styles.icon} src={bars} alt="" />
          <div className={styles.CategoryTitle}>دسته‌بندی محصولات</div>
        </div>
        <div className={styles.CategoryItems}>
          {Categorys.map((item,index) => {
            return (
              <CategoryItem key={index} title={item}/>
            )
          })}
        </div>
      </div>
      <div className={styles.popular}>
        <div className={styles.CategoryHeader}>
          <img className={styles.icon} src={popular} alt="" />
          <div className={styles.CategoryTitle}>بازی‌های پرطرفدار</div>
        </div>
        <div className={styles.PopularGames}>
          {Populares.map((item,index) => {
            return (
              <div className={styles.item}>
                <PopularGame key={index} name={item.name} image={"https://s3-alpha-sig.figma.com/img/a4aa/63a6/825ea33595e469889cc196ced749075b?Expires=1698019200&Signature=d-t2lNKvMiYwEsgL6MLLoMAs0sEoV0op~pQLO1x3e4Xo2YGnT2g9MY7tdzTlAe0BORFPmchVBfhMq7WPflgRTETh0nKZaSpogl-pA0SUGArWYU-HjVZ5B6onQlz9M3r412dVPRLZgGysXivA~PV2vjMEx4syOEc51fEPdiRYTzC1LCvS6jtpNcDmxOe8oerJtBk1Qw6wJAhbugtK6KVWgBjDsQt5qed~i6txArpDr3yJ4fYUu330tTyIPfIHtOrt2XMSrmHXafE6cpzUxZfNZSNFl7DzBKNwrn-zA-KotqbA3HehBlzH-ZzAD6GjaTtH6SGLqj2Yqp3nC62~w2Yb6w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"}/>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
