import React, { useState, useEffect } from 'react'
import { Input, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { checkKeyword } from '../../../_actions/search_action.js'
import ResultPage from '../ResultPage/ResultPage.js';

function Landingpage() {
    const dispatch = useDispatch();

    useEffect(() => {
      setIsReady(false);
      setIsClicked(false);
    }, [])
    

    const [UrlValue, setUrlValue] = useState("")
    const [UrlResult, setUrlResult] = useState("")
    const [IsClicked, setIsClicked] = useState(false)
    const [IsReady, setIsReady] = useState(false)

    const onChangeHandler = function(event) {
        setUrlValue(event.currentTarget.value);
    }

    const onSubmit = function(event) {
        event.preventDefault();
        if (!UrlValue) {
            alert('Url을 입력하세요.');
        } else {
            setIsClicked(true)

            const body = {
                url: UrlValue
            }
    
            dispatch(checkKeyword(body)).then(res => {
                if (res.payload) {
                    setIsReady(true)
                    setUrlResult(res.payload)
                } else {
                    alert('Url Error')
                }
            })
        }
    }
    if (IsClicked && IsReady) {
            return (
                <div>
                     <ResultPage result={UrlResult} />
                </div>
            )
    }
    else if (IsClicked && !IsReady) {
        return (
            <div style= {{height: '100vh'}}>
                <div style={{ display: 'flex', justifyContent: 'center', fontSize: '50px', alignItems: 'center', height: '100%' }}>Loading...</div>
            </div>)
    }
    else {
        return (
            <div>
                <h1 style={{ display: 'flex', justifyContent: 'center', marginBottom: '50px', marginTop: '50px' }}>Check Keyword</h1>
                <form style={{ display: 'flex', marginLeft: '50px', marginRight: '50px' }} onSubmit={onSubmit} >
                    <Input
                        style={{ width: '100%' }}
                        onChange={onChangeHandler}
                        value={UrlValue}
                        placeholder="본문을 입력해 주세요."
                    />
                    <br />
                    <Button style={{ width: '20%', height: '50px' }} onClick={onSubmit} ><SearchOutlined style = {{ fontSize: '20px'}}/></Button>
                </form>
            </div>
        )
    }
}

export default Landingpage