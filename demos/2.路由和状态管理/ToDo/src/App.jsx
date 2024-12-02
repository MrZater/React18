/*
 * @Author: zhoutao mrzater@163.com
 * @Date: 2024-11-28 15:44:45
 * @LastEditors: zhoutao mrzater@163.com
 * @LastEditTime: 2024-11-29 17:31:53
 * @FilePath: /my-app/src/App.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Input from "./components/Input";
import List from "./components/List";
import './css/App.css'

function App(props) {
  return (
    <div className="container">
      <h1 className="lead" style={{
        marginBottom: '30px'
      }}>待办事项</h1>
      <Input/>
      <List/>
    </div>
  )
}

export default App;
