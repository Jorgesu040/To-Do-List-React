import '../App.css'


function LogoUrl({url, alt}){
    const defectoLogo = './u-tad-logo.svg'
    return (
        <div className='logo-background-color'>
            <img src={url || defectoLogo} alt={alt || 'Logo'} />
        </div>
    )

}

export default LogoUrl