import React, {useState , useEffect, useRef} from 'react'
import styles from './SearchHeader.module.scss'
import search from '../../assets/search.svg'
import { InputOutlined } from '@mui/icons-material';

function SearchHeader() {
    const [input, setInput] = useState("");
    const [result, setResult] = useState("");
    const [searchShow, setSearchShow] = useState(false);
    const xRef = useRef(null);

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

    const handleCloseClick = (e) => {
        if (e.target !== xRef.current) {
            setSearchShow(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleCloseClick);
    
        return () => {
          document.removeEventListener("click", handleCloseClick);
        };
    }, []);
    
    const HandelChange = (value) => {
        setInput(value);
        const results = products.filter((prod) => {
            return prod.label.includes(value)
        })
        setResult(results);
        if(value==="" || value===" "){
            setSearchShow(false);
        }
        else {
            setSearchShow(true);
        }
    }

    const HandelResultClick = (urlprop) => {
        window.location = `${urlprop}`;
    }

    return(
        <>
        {!searchShow ? (
            <div className={!searchShow ? (styles.search) : ({display: 'none'})}>
                <div className={styles.SearchHeader}>
                    <input className={styles.input} placeholder='جستجو در اپکس شاپ' onChange={(e) => HandelChange(e.target.value)}></input>
                    <img className={styles.icon} src={search}  alt="" />
                </div>
            </div>
        ) : (
            <div className={styles.searchwhenresult}>
                <div className={styles.SearchHeader}>
                    <input className={styles.input} placeholder='جستجو در اپکس شاپ' onChange={(e) => HandelChange(e.target.value)}></input>
                    <img className={styles.icon} src={search}  alt="" />
                </div>
                <div className={styles.res}>
                    {result.map((res, id) => (
                        <div className={styles.searchresult} onClick={res.id === '3' ? (() => HandelResultClick(res.url)) : (console.log())} key={id} >{res.label}</div>
                    ))}
                </div>
            </div>
        )

        }
        </>
    )
}
export default SearchHeader ;
const products = [
  { label: 'کالاف دیوتی موبایل', id: '0', url: ''},
  { label: 'کلش آف کلنز', id: '2', url: ''},
  { label: 'گنشین ایمپکت', id: '3', url: '/Product'},
  { label: 'ایپکس لجندز', id: '4', url: ''},
];