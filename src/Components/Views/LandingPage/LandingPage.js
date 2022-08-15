import React, { useState } from 'react'
import { Input, Button } from 'antd';

function Landingpage() {

    const [CommentValue, setCommentValue] = useState('')

    const onChangeHandler = function(event) {
        setCommentValue(event.currentTarget.value);
    }

    const onSubmit = function(event) {
        event.preventDefault();
    }

    return (
        <div>
            <h1 style={{ display: 'flex', justifyContent: 'center', marginBottom: '50px', marginTop: '50px' }}>Check Keyword</h1>
            <form style={{ display: 'flex', marginLeft: '50px', marginRight: '50px' }} onSubmit={onSubmit} >
                <Input
                    style={{ width: '100%' }}
                    onChange={onChangeHandler}
                    value={CommentValue}
                    placeholder="본문을 입력해 주세요."
                />
                <br />
                <Button style={{ width: '20%', height: '50px' }} onClick={onSubmit} >Submit</Button>
            </form>
        </div>
    )
}

export default Landingpage