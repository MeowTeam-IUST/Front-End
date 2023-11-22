import React, {useState , useEffect, useRef} from 'react'
import styles from './SearchHeader.module.scss'
import search from '../../assets/search.svg'
import axios from 'axios';

export function SearchHeader() {
    const [result, setResult] = useState("");
    const [searchShow, setSearchShow] = useState(false);
    const xRef = useRef(null);

    const HandelChange = async(value) => {
        try
        {
            await axios.post('https://c860-5-113-151-24.ngrok-free.app/api/Category/search' ,
            {
                searchWord: value,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Accept': 'text/plain',
                    'Connection': 'keep-alive',
                    'ngrok-skip-browser-warning' : '235',
                },
            }
            ).then((responce) => {
                setResult(responce.data.data);
                console.log(result)
            })
            if(value==="" || value===" "){
                setSearchShow(false);
            }
            else {
                setSearchShow(true);
            }
        }
        catch(error)
        {
            console.log(error)
        }
        finally
        {
        }
    };

    const handleCloseClick = (e) => {
        // console.log(e.target)
        // console.log(xRef.current)
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

    const HandelResultClick = (urlprop) => {
        // window.location = `${urlprop}`;
        window.location = '/Product';
    }

    return(
        <>
        {!searchShow ? (
            <div className={!searchShow ? (styles.search) : ({display: 'none'})} ref={xRef}>
                <div className={styles.SearchHeader}>
                    <input className={styles.input} placeholder='جستجو در اپکس شاپ' onChange={(e) => HandelChange(e.target.value)}></input>
                    <img className={styles.icon} src={search}  alt="" />
                </div>
            </div>
        ) : (
            <div className={styles.searchwhenresult} ref={xRef}>
                <div className={styles.SearchHeader}>
                    <input className={styles.input} placeholder='جستجو در اپکس شاپ' onChange={(e) => HandelChange(e.target.value)}></input>
                    <img className={styles.icon} src={search}  alt="" />
                </div>
                <div className={styles.res}>
                    {result.map((res, id) => (
                        <div className={styles.searchresult} onClick={() => HandelResultClick(res.imageURL)} key={id} >{res.title}</div>
                    ))}
                </div>
            </div>
        )

        }
        </>
    )
}