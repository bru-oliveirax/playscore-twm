function Title() {
    const textStyle = {
        position: 'absolute',
        bottom: 'calc(50vh - 70px)',
        left: 'calc(50vw - 400px)', 
        transform: 'translateX(-50%)',
        fontSize: '65px',
        fontFamily: 'CodeDC Pro, sans-serif',
        lineHeight: '1.1',
        fontWeight: 'bold',
        color: '#fff'
      };
    
      
      return (
        <div>
            <p style={textStyle}>
                Comece a <br/> 
                avaliar!
            </p>
        </div>
  );
}

export default Title;