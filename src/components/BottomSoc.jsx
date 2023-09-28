import FB from '../Photoes/fb.webp'
import IN from '../Photoes/in.webp'
import TW from '../Photoes/tw.webp'
export default function BottomSoc() {
  return (
    <div className='h-bottom-info'>
    <div className='gl-ph'>
        <a href='tel:+512 678 123' className='bot-glph'>Tel: +512 678 123</a>
        <br />
        <br />
        <a href='mailto:hv-travel@gmail.com' className='bot-glph'>Gmail: travel@gmail.com</a>
    </div>s
    <div className='bto-socials'>
            <a href='https://www.facebook.com/' target="_blank" rel="noreferrer" className='socials-links'><img src={FB} className='social-imgs' alt='Travel Social Icons'/></a>
            <a href='https://www.instagram.com/' target="_blank" rel="noreferrer" className='socials-links'><img src={IN} className='social-imgs' alt='Travel Social Icons'/></a>
            <a href='https://www.twitter.com/' target="_blank" rel="noreferrer" className='socials-links'><img src={TW} className='social-imgs' alt='Travel Social Icons'/></a>
        </div>
</div>
  )
}
