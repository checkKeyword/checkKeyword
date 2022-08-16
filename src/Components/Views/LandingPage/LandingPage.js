import React, { useState } from 'react'
import { Input, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Landingpage() {
    let navigate = useNavigate();

    const [UrlValue, setUrlValue] = useState('')

    const onChangeHandler = function(event) {
        setUrlValue(event.currentTarget.value);
    }

    const onSubmit = function(event) {
        event.preventDefault();

        const body = {
            urlValue: UrlValue
        }
        navigate('/result');

        // axios.post('/api/checkKeyword', body)
        // .then(res => {
        //     if (res.data.success) {
        //         navigate('/result');
        //     } else {
        //         alert('Url Error.')
        //     }
        // })

    }

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

export default Landingpage