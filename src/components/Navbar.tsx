const Navbar = () => {
  return (
    <div className='flex py-6 px-12 justify-between'>
      <div>
        <a href="#"><strong>USAMAPlaceholder</strong></a>
      </div>
      <div className='w-[45%] flex justify-evenly'>
        <a href="#Guide">Guide</a>
        <a href="#Sponsor-this-project">Sponsor this project</a>
        <a href="#Blog">Blog</a>
        <a href="#My-USAMA-Server">My USAMA Server</a>
      </div>
    </div>
  )
}

export default Navbar
