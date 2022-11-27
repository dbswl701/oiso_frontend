import './RegistItem.css';


function RegistItem(){

  return (
    <>
      {/* <Navbar /> */}
      <h1>오이소</h1>
      <p>상품 등록 글쓰기</p>
      {/* 사진 등록 */}
      <form>
        <input type="file" id="inputImage"></input><br />
        <input class="input-text" type="text" placeholder='글 제목'></input><br />
        <input class="input-text" type="text" placeholder='가격'></input><br />
        <input class="input-text" type="text" placeholder='수량'></input><br />
        <textarea class="text-field" placeholder='상품 상세 설명' rows="20" cols="80"></textarea>
        <input type="submit"></input>
      </form>
    </>
  )
}


export default RegistItem;