const ColorBox = ({color}) => {
  return  <p style={
    {backgroundColor: color,
      width: '300px', 
      height: '150px',
      margin: '20px auto',
      borderRadius: '10px',
      color: '#fff',
      fontSize: '24px',
      textAlign: 'center',
      lineHeight: '150px'}
  }>{color.toUpperCase()}</p>
}

export default ColorBox;