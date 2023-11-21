import errorImage from '../assets/error-image.jpg';

const Error = () => {
    return (
        <div style={{ margin: '50px auto', textAlign: 'center' }}>
            <h1>Error 404</h1>
            <p style={{ marginBottom: '20px' }}>The page you are looking for was not found  :/</p>
            <img className='img-error' src={errorImage} alt="error" />
        </div>
    );
};

export default Error;