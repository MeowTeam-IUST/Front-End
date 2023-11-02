import React, {useState} from 'react'
import styles from './SearchHeader.module.scss'
import search from '../../assets/search.svg'
import { InputOutlined } from '@mui/icons-material';

function SearchHeader() {
    const [input, setInput] = useState("");
    const [result, setResult] = useState("");

    // const OnSearch = async(value) => {
    //     try
    //     {
    //         await axios.get(`https://accordion2.pythonanywhere.com/search/${value}/` ,
    //         {
    //             headers: {
    //                 'Content-Type' : '*' ,
    //                 // 'Authorization': 'Bearer ' + localStorage.getItem('token'),
    //             }
    //         }
    //         ).then((responce) => {
    //             // console.log(responce) ;
    //             // setprofData(responce.data);
    //         })
    //     }
    //     catch(error)
    //     {
    //         // console.log(error)
    //     }
    //     finally
    //     {
    //         // setIsLoading(false)
    //     }
    // };

    const HandelChange = (value) => {
        setInput(value);
        const results = products.filter((prod) => {
            return prod.label.includes(value)
        })
        setResult(results);
    }

    const HandelResultClick = (urlprop) => {
        window.location = `${urlprop}`;
    }

    return(
        <div className={styles.search}>
            <div className={styles.SearchHeader}>
                <input className={styles.input} placeholder='جستجو در اپکس شاپ' value={input} onChange={(e) => HandelChange(e.target.value)}></input>
                <img className={styles.icon} src={search}  alt="" />
            </div>
            <div className={styles.res}>
                {result ? (result.map((res, id) => (
                    <div className={styles.searchresult} onClick={res.id === '3' ? (() => HandelResultClick(res.url)) : (console.log())} key={id} >{res.label}</div>
                ))) : (console.log())}
            </div>
        </div>
    )
}
export default SearchHeader ;
const products = [
  { label: 'کالاف دیوتی موبایل', id: '0', url: ''},
  { label: 'کلش آف کلنز', id: '2', url: ''},
  { label: 'گنشین ایمپکت', id: '3', url: '/Product'},
  { label: 'ایپکس لجندز', id: '4', url: ''},
];