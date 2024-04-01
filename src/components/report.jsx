import './weather.css'


export default function Report({data}){

  return <div className="report">
      <img src={data.current.condition.icon} alt="" />
      <p>{data.current.condition.text}</p>
      <p>{data.current.temp_c}</p>
  </div>

}