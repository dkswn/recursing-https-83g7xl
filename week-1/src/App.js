import "./App.css";
import styled from "styled-component";
const Stbox = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid red;
  margin: 20px;
`;

const StP = styled.p`
color:blue;`
function App() {
  return (
  <Stbox>
<StP>나는 tag 입니다</StP>
  </Stbox>
  )
}
export default App;
