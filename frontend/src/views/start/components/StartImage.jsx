import image from "../../../assets/start_image.png"


function StartImage() {
  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <img
        src={image}
        alt=""
        style={{
          boxShadow: '0 8px 16px rgba(65, 37, 131, 0.7)',
          borderRadius: '10px',
          position: 'absolute', 
          top: '70px', 
          left: '750px', 
          maxWidth: '350px',
        }}
      />
    </div>
  );
}

export default StartImage;