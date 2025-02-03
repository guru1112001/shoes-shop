import "./Recommended.css";
import Button from "../components/Button"
function Recommended({handleClick}) {
  return <>
  <div>
    <h2 className="recommended-title">Recommended</h2>
    <div className="recommended-flex">
      <Button handleClick={handleClick} value="" title="All Products" />
      <Button handleClick={handleClick} value="Nike" title='Nike'/>
      <Button handleClick={handleClick} value="Puma" title='Puma'/>
      <Button handleClick={handleClick} value="Adidas"title='Adidas'/>
      <Button handleClick={handleClick} value="Vans"title='Vans'/>
      {/* <button className="btns">Nike</button>
      <button className="btns">Puma</button>
      <button className="btns">Adidas</button>
      <button className="btns">Vans</button> */}
    </div>

  </div>
  </>
}

export default Recommended