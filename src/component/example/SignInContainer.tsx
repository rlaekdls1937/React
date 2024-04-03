// SignInContainer 함수형 컴포넌트를 생성
// 해당 컴포넌트는 InputBox 컴포넌트를 2개 포함
// signInContainer 컴포넌트를 기본 값으로 내보내기

import { IdInputBox, PasswordInputBox } from "./inputBox";
import './style.css';
import './commons.css';

export default function SignInContainer() {
    return (
    <>   
        <IdInputBox/>
        <PasswordInputBox/>
    </> 
    );
}

