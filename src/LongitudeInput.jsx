export default function LongitudeInput(props){
    return(
      <>
      <label>{props.name}</label>
      <input
        type="number"
        value={props.value}
        onChange={props.onChange}
      />
    </>
    )
  }