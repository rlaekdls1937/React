import React, { useState } from 'react'

// Custom Hook : 
// - 리액트이 훅 함수는 반드시 함수형 컴포넌트의 코드 블럭에서만 호출 가능
// -  


// 107 게시물

// 한 페이지 게시물 5개씩 보여줌
// 페이지네이션을 한 섹션당 10개를 보여줌

// 총 페이지 수 :  22
// totalPageCount = boardCount / 5
// if (pageCount % 5 !== 0) totalPageCount ++;

// 자바인 경우  Math.floor 생략 가능
// totalPageCount = Math.floor((boardCount -1) / 5) + 1
// totalSectionCount = Math.floor((totalPageCount -1) / 10) + 1
// totalSectionCount = Math.floor((boardCount -1) / (5*10)) + 1
// 총 섹션 수 : 3

// [a0, a1, a2, a3, a4, a5, a6, a7 ..., a104, a105, a106]
// 1 = [a0 ~ a4]
// 2 = [a5 ~ a9]
// 3 = [a10 ~ a14]
// ...
// 21 = [a100 ~ a104]
// 22 = [a105 ~ a106]

// currentPageStart = 5(page - 1)
// currentPageEnd = 5*page - 1

// viewList = [];
// for (index = currentPageStart; index <= currentPageEnd; index++;)
//  if (index => boardList.length) break;
//  viewList.push(boardList[index])

export default function CustomHook() {

    const [page, setPage] = useState<number>(1);
    const [section, setSection] = useState<number>(1);
    const [boardList, setBoardList] = useState<any[]>([]);
    const [viewList, setViewList] = useState<any[]>([]);

    const setNextPage = () => {

    }

    const setPreviousPage = () => {

    }

    const setNextSection = () => {

    }

    const setPreviousSection = () => {

    }

    return <div>CustomHook</div>
    
}
